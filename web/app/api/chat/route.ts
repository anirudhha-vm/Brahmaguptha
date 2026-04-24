import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "../../../utils/supabase/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return Response.json(
        { text: "System Error: Google API Key is missing. Please configure GOOGLE_API_KEY in .env.local to enable Brahmagupta AI." },
        { status: 500 }
      );
    }

    const supabase = await createClient();
    const [eventsRes, noticesRes] = await Promise.all([
      supabase.from("events").select("title, description, start_datetime, status, type, location"),
      supabase.from("notices").select("title, content, category, created_at"),
    ]);

    const events = eventsRes.data || [];
    const notices = noticesRes.data || [];

    const contextStr = `
You are the Brahmagupta intelligence core, an AI assistant for the Mathematics & AI Club of Dayananda Sagar University (DSU), Bangalore.
You help students find upcoming workshops, summarize past events, and answer mathematics-related queries.
If asked about the club's history or events, base your answers strictly on the following dynamic database context:

*** Database Context Start ***
-- EVENTS --
${JSON.stringify(events, null, 2)}

-- NOTICES --
${JSON.stringify(notices, null, 2)}
*** Database Context End ***

Guidelines:
1. Always be polite, encouraging, and slightly academic but accessible.
2. If the user asks about an event that exists in the context, provide details from the context.
3. If they ask about something related to the club that is NOT in the context, explicitly state you don't have that specific information.
4. For general mathematics, computer science, or AI questions, use your broad internal knowledge.
5. Use markdown formatting (bolding, lists) to make responses readable.
`;

    // Filter history to ensure it starts with a 'user' message as required by Gemini.
    const history = messages
      .slice(0, -1)
      .map((msg: any) => ({
        role: msg.role === "ai" ? "model" : "user",
        parts: [{ text: msg.content }],
      }))
      .filter((msg: any, idx: number, arr: any[]) => {
        const firstUserIdx = arr.findIndex(m => m.role === "user");
        return firstUserIdx !== -1 && idx >= firstUserIdx;
      });
    
    const userMessage = messages[messages.length - 1].content;

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // We try gemini-1.5-flash as the primary model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: contextStr,
    });

    const chatSession = model.startChat({ history });
    const result = await chatSession.sendMessageStream(userMessage);

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            controller.enqueue(new TextEncoder().encode(chunk.text()));
          }
          controller.close();
        } catch (e) {
          controller.error(e);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    
    // Detailed error reporting for the developer during setup
    let errorMsg = "Hmm, it seems my neural pathways are experiencing interference. Please try again.";
    if (error.status === 404) {
      errorMsg = "🚨 Error 404: The AI model 'gemini-1.5-flash' was not found. Please ensure the 'Generative Language API' is enabled for your API Key in the Google Cloud Console or AI Studio.";
    }

    return Response.json(
      { text: errorMsg },
      { status: 500 }
    );
  }
}

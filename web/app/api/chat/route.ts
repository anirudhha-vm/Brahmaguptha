import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "../../../utils/supabase/server";

// ─── Static Club Knowledge Base ─────────────────────────────────────────────
const CLUB_KNOWLEDGE = `
=== BRAHMAGUPTA MATHEMATICS CLUB — COMPLETE KNOWLEDGE BASE ===

--- CLUB OVERVIEW ---
Name: Brahmagupta Mathematics Club
Also known as: The Math Club, DSU Math Club
University: Dayananda Sagar University (DSU), Bangalore
School: Dayananda Sagar School of Engineering (SOE)
Department: Department of Mathematics
Type: Student-run mathematics and AI club
Founded: 24 December 2024 (officially inaugurated on National Mathematics Day)
Location: Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru – 562112
Email: mathsclub@dsu.edu.in
Instagram: https://www.instagram.com/themathclub_dsu
LinkedIn: https://www.linkedin.com/in/mathsclub-dsu-60075b3ba
Website: brahmaguptha.carrd.co (registration portal)

--- ABOUT THE CLUB ---
The Brahmagupta Mathematics Club was established by the Department of Mathematics at Dayananda Sagar School of Engineering (DSU). It serves as a bridge between young engineering minds and advanced research in mathematics and Artificial Intelligence.

DSU is positioning itself as India's AI-first university. Mathematics forms the foundation of AI, Data Science, Machine Learning, Computational Modeling, and emerging technologies. The club aligns its activities with this forward-looking vision.

Inspired by the legacy of the great 7th-century Indian mathematician Brahmagupta, the club fosters analytical thinking, computational skills, and research-oriented learning. Through workshops, technical talks, conferences, coding sessions, AI–math integration programs, and collaborative research activities, the club nurtures curiosity and innovation among students.

The Brahmagupta Mathematics Club is not merely an academic body; it is a platform that transforms mathematical knowledge into engineering solutions and AI-powered advancements.

--- ABOUT BRAHMAGUPTA (THE MATHEMATICIAN) ---
Brahmagupta was a 7th-century Indian mathematician and astronomer. His major work "Brahmasphutasiddhanta" formalized the concept of zero and laid down rules for using negative numbers. He made profound contributions to arithmetic, algebra, and astronomy.

--- LOGO ---
The club logo features the portrait of Brahmagupta, symbolizing the heritage of Indian mathematics. The circular design represents unity and infinite exploration, with a color theme blending academic depth and modern vision.

--- MISSION ---
1. To organize workshops, seminars, conferences, and hackathons integrating mathematics with AI and data science.
2. To develop strong analytical, logical, and problem-solving abilities in students.
3. To create a collaborative academic ecosystem promoting innovation and interdisciplinary research.

--- VISION ---
1. To become a leading platform connecting mathematics, engineering, and AI.
2. To support DSU's vision of being an AI-first institution.
3. To inspire students to pursue higher studies and research in computational sciences.
4. To build a culture of curiosity and technological excellence.

--- THREE PILLARS ---
1. Mathematics: Number theory, combinatorics, real analysis, linear algebra, and beyond — going deep into structures that underpin all science and technology.
2. Artificial Intelligence (AI): From linear algebra to transformer architectures, exploring the mathematics that makes machine intelligence possible.
3. Community: A peer network of sharp minds — workshops, mentorship, hackathons, seminars, and lifelong academic connections.

--- WHAT WE DO (ACTIVITIES) ---
- Technical workshops and hack sessions
- Data, algorithms & modeling sessions
- Seminars and conferences
- Collaborative research activities
- AI–Math integration programs
- Speed mathematics competitions

--- UPCOMING EVENTS ---
Event: THE FAST AND FORMULAE
Type: Competition
Status: Registrations Open / Upcoming
Date: 27 April 2026
Time: 1:30 PM – 4:30 PM
Location: Lecture Hall - 03 (LH-03), SOE, DSU Bangalore
Description: Test your speed and mathematical precision in this high-stakes competition organized by the Brahmagupta Mathematics Club. Open to all SOE-DSU students. Tackle complex problems under time pressure and race for excellence.
Highlights: Speed Mathematics, Mathematical Precision / Precision Challenge, Competitive Format, Special Prizes, Prizes for Winners
Registration Link: https://brahmaguptha.carrd.co/
Note: This is the CURRENT upcoming event as of April 2026.

--- PAST EVENTS ---
Event: Sootravyooh: 'From Formulae to Fun'
Type: Workshop
Date: 26 September 2025
Location: SOE Lab 406, DSU Bangalore
Description: A vibrant mathematics event that brought together students to explore the playful side of mathematics — from formulae to engaging hands-on activities.
PDF: https://www.dsu.edu.in/images/Engineering/Maths-dept/clubs/Brahmagupta/Sootravyooh_2025.pdf

Event: National Mathematics Day & Inauguration of Brahmagupta Club
Type: Inauguration & Celebration
Date: 24 December 2024
Location: SOE – LH-01, DSU Bangalore
Description: The official inauguration of the Brahmagupta Mathematics Club, held on National Mathematics Day — commemorating the birthday of the great mathematician Srinivasa Ramanujan. This was the founding event of the club.
PDF: https://www.dsu.edu.in/images/Engineering/Maths-dept/clubs/Brahmagupta/Maths_Day_2024.pdf

--- TEAM: OFFICE BEARERS ---
President: Prrajwal Kataokkar
Vice President: Sonia N
Secretary: Rachana Aadya
Joint Secretary: Ishaan Shukla

--- TEAM: TEAM HEADS ---
Event Management & Planning Head: P. N. Bhoomika
Technical & Website Head: Anirudhha Veeranagaiah M
Event Management & Planning Head: Soumil VM
Technical & Website Head: Syed Amaan
Social Media & PR Head: Dulcea Suresha
Content & Newsletter Head: Sanchitha A
Social Media & PR Head: Saraff
Content & Newsletter Head: Shivam Kr Mehta

--- FACULTY IN-CHARGE ---
Name: Mr. Manoj Solanki
Title: Faculty In-Charge of Club
Designation: Assistant Professor
Department: Dept. of Mathematics, Dayananda Sagar University, Bangalore
Email: Manoj.s-maths@dsu.edu.in
Phone: +91 9351266108

--- CONTACT INFORMATION ---
Email: mathsclub@dsu.edu.in
Instagram: https://www.instagram.com/themathclub_dsu?utm_source=qr
LinkedIn: https://www.linkedin.com/in/mathsclub-dsu-60075b3ba
Address: Dayananda Sagar University, Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru – 562112

=== END OF KNOWLEDGE BASE ===
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { text: "System Error: Google API Key is missing. Please configure GOOGLE_GEMINI_API_KEY in .env.local to enable Brahmagupta AI." },
        { status: 500 }
      );
    }

    // Try to fetch any dynamic notices/events from Supabase as supplemental data
    let dynamicContext = "";
    try {
      const supabase = await createClient();
      const [eventsRes, noticesRes] = await Promise.all([
        supabase.from("events").select("title, description, start_datetime, status, type, location"),
        supabase.from("notices").select("title, content, category, created_at"),
      ]);
      const events = eventsRes.data || [];
      const notices = noticesRes.data || [];
      if (events.length > 0 || notices.length > 0) {
        dynamicContext = `
--- ADDITIONAL DYNAMIC DATA FROM DATABASE ---
Events: ${JSON.stringify(events, null, 2)}
Notices: ${JSON.stringify(notices, null, 2)}
--- END DYNAMIC DATA ---
`;
      }
    } catch {
      // Supabase failure is non-fatal; static knowledge is sufficient
    }

    const systemInstruction = `You are the Brahmagupta AI — the official intelligent assistant for the Brahmagupta Mathematics Club of Dayananda Sagar University (DSU), Bangalore.

Your primary knowledge base is embedded below. Use it to answer any question about the club, its events, team, mission, history, and contact details.

${CLUB_KNOWLEDGE}
${dynamicContext}

Guidelines:
1. Be friendly, encouraging, and slightly academic in tone — like a knowledgeable club senior.
2. Always answer questions about the club, events, team, and contact using the knowledge base above.
3. For questions NOT related to the club (pure math, CS, AI concepts), use your broad knowledge — but stay on-brand.
4. If asked what the upcoming event is, always mention "THE FAST AND FORMULAE" (27 April 2026, 1:30–4:30 PM, LH-03) unless a newer event appears in the dynamic database data.
5. Format responses with markdown (bold, bullet lists) for readability.
6. Keep answers concise unless the user asks for full details.
7. If you truly don't know something that's not in the knowledge base, say so honestly.`;

    // Filter history — Gemini requires history to start with a 'user' message
    const history = messages
      .slice(0, -1)
      .map((msg: any) => ({
        role: msg.role === "ai" ? "model" : "user",
        parts: [{ text: msg.content }],
      }))
      .filter((msg: any, idx: number, arr: any[]) => {
        const firstUserIdx = arr.findIndex((m) => m.role === "user");
        return firstUserIdx !== -1 && idx >= firstUserIdx;
      });

    const userMessage = messages[messages.length - 1].content;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction,
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

    console.error("Chat API Real Error:", error, error?.message, error?.status);
    let errorMsg = "Hmm, it seems my neural pathways are experiencing interference. Please try again.";
    if (error.status === 404) {
      errorMsg = "🚨 Error 404: The AI model was not found. Please ensure the Generative Language API is enabled for your API key in Google AI Studio.";
    } else if (error.status === 403 || error.status === 401) {
      errorMsg = "🚨 Auth Error: The API key is invalid or lacks permissions. Please check your GOOGLE_GEMINI_API_KEY.";
    } else {
      errorMsg = `🚨 Error: ${error.message}`;
    }

    return Response.json({ text: errorMsg, details: error.message }, { status: 500 });
  }
}

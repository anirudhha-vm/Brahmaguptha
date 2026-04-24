'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './ask.css';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function AskBrahmaguptaPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: "Greetings! I am the Brahmagupta intelligence core. \n\nI can help you find upcoming workshops, summarize past mathematical proofs from our blog, or match you with a mentor based on your research interests. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.text || 'Server error');
      }
      
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aiContent = "";

      setMessages([...newMessages, { role: 'ai', content: '' }]);

      if (reader) {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          aiContent += decoder.decode(value, { stream: true });
          setMessages([...newMessages, { role: 'ai', content: aiContent }]);
        }
      }
    } catch (error: any) {
      setMessages([...newMessages, { role: 'ai', content: `🚨 Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ask-wrapper">
      <div className="chat-container animate-fade-in">
        
        <div className="chat-header">
          <div className="ai-avatar">🤖</div>
          <div className="chat-title">
            <h2>Ask Brahmagupta</h2>
            <p>Trained on DSU Club History & Mathematical Knowledge</p>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg ${msg.role}`}>
              {msg.role === 'ai' && <div className="ai-avatar" style={{width: '35px', height:'35px', fontSize: '1rem', flexShrink: 0}}>🤖</div>}
              <div className="msg-bubble markdown-body" style={{lineHeight: '1.6'}}>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="msg ai">
              <div className="ai-avatar" style={{width: '35px', height:'35px', fontSize: '1rem', flexShrink: 0}}>🤖</div>
              <div className="msg-bubble loading-bubble">Thinking...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input" style={{display: 'flex', gap: '10px'}}>
          <input 
            type="text" 
            className="chat-field" 
            placeholder="Ask about events, math, or the club..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
              }
            }}
            disabled={isLoading}
            style={{flex: 1}}
          />
          <button className="send-btn" onClick={handleSend} disabled={isLoading || !input.trim()}>➔</button>
        </div>

      </div>
    </div>
  );
}

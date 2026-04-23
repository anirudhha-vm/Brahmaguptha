import React from 'react';
import './ask.css';

export default function AskBrahmaguptaPage() {
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
          <div className="msg ai">
            <div className="ai-avatar" style={{width: '35px', height:'35px', fontSize: '1rem'}}>🤖</div>
            <div className="msg-bubble">
              <strong>Greetings!</strong> I am the Brahmagupta intelligence core. <br/><br/>
              I can help you find upcoming workshops, summarize past mathematical proofs from our blog, or match you with a mentor based on your research interests. How can I assist you today?
            </div>
          </div>

          <div className="msg user">
            <div className="msg-bubble">
              Can you tell me what happened in the Dimensional Data Analysis workshop last week?
            </div>
          </div>

          <div className="msg ai">
            <div className="ai-avatar" style={{width: '35px', height:'35px', fontSize: '1rem'}}>🤖</div>
            <div className="msg-bubble">
              Of course. The Dimensional Data Analysis workshop, led by Dr. Arvind Ramesh on October 2nd, focused on using <strong>Persistent Homology</strong> to track hole-structures through high-dimensional noise.<br/><br/>
              Key takeaways included:
              <ul style={{marginLeft: '20px', marginTop: '10px'}}>
                <li>Vietoris-Rips complexes generation in Python.</li>
                <li>Betti numbers and computing persistence barcodes.</li>
                <li>Applications to brain imagery analysis.</li>
              </ul>
              <br/>
              Would you like me to link you to the full blog recap or the GitHub repository utilized during the event?
            </div>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" className="chat-field" placeholder="Ask about events, math, or the club..." />
          <button className="send-btn">➔</button>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import Footer from '../../components/Footer';
import './events.css';

export const metadata = {
  title: 'Events | Brahmagupta Mathematics Club DSU',
  description: 'All events and workshops organized by the Brahmagupta Mathematics Club at DSU Bengaluru.',
};

const PAST_EVENTS = [
  {
    id: 'the-fast-and-formulae',
    title: 'The Fast & The Formulae',
    date: '27 April 2026',
    time: '1:30 PM – 4:30 PM',
    location: 'Lecture Hall - 03, SOE, DSU Bengaluru',
    type: 'Competition',
    desc: 'A high-stakes mathematics competition featuring a 4-round Mathematical Quiz (Kahoot, Buzzer, Pen-and-Paper), a Desmos Graphing Challenge, and the official launch of the Brahmagupta Club website. Over 100 participants across 25 teams.',
    highlights: ['25 Teams · 100+ Participants', 'Mathematical Quiz – 4 Rounds', 'Desmos Graphing Challenge', 'Official Website Launch'],
    galleryLink: '/gallery',
  },
  {
    id: 'sootravyooh-2025',
    title: "Sootravyooh: 'From Formulae to Fun'",
    date: '26 September 2025',
    location: 'SOE Lab 406, DSU Bengaluru',
    type: 'Workshop',
    desc: "A vibrant mathematics event that brought together students to explore the playful side of mathematics — from formulae to engaging hands-on activities.",
    pdfLink: 'https://www.dsu.edu.in/images/Engineering/Maths-dept/clubs/Brahmagupta/Sootravyooh_2025.pdf',
  },
  {
    id: 'national-math-day-2024',
    title: 'National Mathematics Day & Inauguration of Brahmagupta Club',
    date: '24 December 2024',
    location: 'SOE – LH-01, DSU Bengaluru',
    type: 'Inauguration & Celebration',
    desc: 'The official inauguration of the Brahmagupta Mathematics Club, held on National Mathematics Day — commemorating the birthday of the great mathematician Srinivasa Ramanujan.',
    pdfLink: 'https://www.dsu.edu.in/images/Engineering/Maths-dept/clubs/Brahmagupta/Maths_Day_2024.pdf',
  },
];

export default function EventsPage() {
  return (
    <div className="events-page">
      {/* Hero */}
      <section className="events-hero">
        <div className="events-hero-inner animate-fade-in">
          <div className="ev-section-label">What We Do</div>
          <h1>Events &<br />Workshops</h1>
          <p>From national day celebrations to competitive mathematics hackathons — every event is a step deeper into the world of mathematics and AI.</p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="events-coming-soon">
        <div className="events-body-inner">
          <div className="coming-soon-card">
            <div className="coming-soon-glow" />
            <div className="coming-soon-badge">Next Chapter</div>
            <h2 className="coming-soon-title">Something Big Is Brewing</h2>
            <p className="coming-soon-sub">
              The Brahmagupta Mathematics Club is crafting the next experience. Stay sharp — our next event will push boundaries further.
            </p>
            <div className="coming-soon-dots">
              <span /><span /><span />
            </div>
            <div className="coming-soon-meta">
              <span>Follow us on Instagram for announcements</span>
              <a
                href="https://www.instagram.com/themathclub_dsu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-copper"
                style={{ textDecoration: 'none', marginTop: '0.5rem', display: 'inline-block' }}
              >
                @themathclub_dsu ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="events-past">
        <div className="events-body-inner">
          <div className="ev-section-header">
            <div className="ev-section-label-dark">Archive</div>
            <h2>Past Events</h2>
          </div>
          <div className="ev-past-grid">
            {PAST_EVENTS.map(ev => (
              <div key={ev.id} className="ev-past-card">
                <div className="ev-past-card-badge">{ev.type}</div>
                <h3 className="ev-past-title">{ev.title}</h3>
                <p className="ev-past-desc">{ev.desc}</p>
                {ev.highlights && (
                  <div className="ev-highlights">
                    {ev.highlights.map((h, i) => (
                      <span key={i} className="ev-highlight-tag">{h}</span>
                    ))}
                  </div>
                )}
                <div className="ev-past-meta">
                  <span>📅 {ev.date}</span>
                  {ev.time && <span>⏰ {ev.time}</span>}
                  <span>📍 {ev.location}</span>
                </div>
                <div className="ev-past-links">
                  {ev.galleryLink && (
                    <a href={ev.galleryLink} className="ev-past-link">View Photos ↗</a>
                  )}
                  {ev.pdfLink && (
                    <>
                      <a href={ev.pdfLink} target="_blank" rel="noopener noreferrer" className="ev-past-link">Read More ↗</a>
                      <a href={ev.pdfLink} target="_blank" rel="noopener noreferrer" className="ev-past-link">View Photos ↗</a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

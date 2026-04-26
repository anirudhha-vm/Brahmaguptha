import React from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import './events.css';

export const metadata = {
  title: 'Events | Brahmagupta Mathematics Club DSU',
  description: 'All events and workshops organized by the Brahmagupta Mathematics Club at DSU Bengaluru.',
};

const CURRENT_EVENTS = [
  {
    id: 'the-fast-and-formulae',
    title: 'THE FAST AND FORMULAE',
    date: '27 April 2026',
    time: '1:30 PM – 4:30 PM',
    location: 'Lecture Hall - 03',
    type: 'Competition',
    desc: 'Unleash your mathematical speed and precision in this thrilling competition. Tackle complex problems under time pressure and race for excellence.',
    highlights: ['Speed Mathematics', 'Precision Challenge', 'Competitive Format'],
    formLink: 'https://brahmaguptha.carrd.co/',
    prize: 'Prizes for Winners'
  }
];

const PAST_EVENTS = [
  {
    id: 'sootravyooh-2025',
    title: "Sootravyooh: 'From Formulae to Fun'",
    date: '26 September 2025',
    location: 'SOE Lab 406, DSU Bengaluru',
    type: 'Workshop',
    status: 'past',
    desc: "A vibrant mathematics event that brought together students to explore the playful side of mathematics — from formulae to engaging hands-on activities.",
    pdfLink: 'https://www.dsu.edu.in/images/Engineering/Maths-dept/clubs/Brahmagupta/Sootravyooh_2025.pdf',
  },
  {
    id: 'national-math-day-2024',
    title: 'National Mathematics Day & Inauguration of Brahmagupta Club',
    date: '24 December 2024',
    location: 'SOE – LH-01, DSU Bengaluru',
    type: 'Inauguration & Celebration',
    status: 'past',
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
          <h1>Events &amp;<br />Workshops</h1>
          <p>From national day celebrations to competitive mathematics hackathons — every event is a step deeper into the world of mathematics and AI.</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-body">
        <div className="events-body-inner">
          <div className="ev-section-header">
            <div className="ev-section-label-dark">Upcoming</div>
            <h2>Current Events</h2>
          </div>
          <div className="ev-grid">
            {CURRENT_EVENTS.map(ev => (
              <div key={ev.id} className="ev-card ev-card-featured">
                <div className="ev-card-top">
                  <span className="ev-badge">{ev.type}</span>
                  <span className="ev-live-pill">🔥 Registrations Open</span>
                </div>
                <h3 className="ev-title">{ev.title}</h3>
                <p className="ev-desc">{ev.desc}</p>
                <div className="ev-highlights">
                  {ev.highlights?.map((h: string, i: number) => (
                    <span key={i} className="ev-highlight-tag">{h}</span>
                  ))}
                </div>
                <div className="ev-meta">
                  <span>📅 {ev.date}</span>
                  <span>⏰ {ev.time}</span>
                  <span>📍 {ev.location}</span>
                  {ev.prize && <span>🏆 {ev.prize}</span>}
                </div>
                {ev.formLink && (
                  <a
                    href={ev.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-copper ev-register-btn"
                    style={{ textDecoration: 'none' }}
                  >
                    Register on Google Forms ↗
                  </a>
                )}
              </div>
            ))}
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
                <div className="ev-past-meta">
                  <span>📅 {ev.date}</span>
                  <span>📍 {ev.location}</span>
                </div>
                {ev.pdfLink && (
                  <div className="ev-past-links">
                    <a href={ev.pdfLink} target="_blank" rel="noopener noreferrer" className="ev-past-link">
                      Read More ↗
                    </a>
                    <a href={ev.pdfLink} target="_blank" rel="noopener noreferrer" className="ev-past-link">
                      View Photos ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

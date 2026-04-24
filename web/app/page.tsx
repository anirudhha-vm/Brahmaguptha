import React from 'react';
import Link from 'next/link';
import './home.css';
import ContactForm from './ContactForm';
import Footer from '../components/Footer';
import { CLUB_PHOTOS } from './gallery/photos';

const UPCOMING_EVENTS: any[] = [
  {
    id: 'the-fast-and-formulae',
    type: 'Competition',
    title: 'THE FAST AND FORMULAE',
    desc: 'Test your speed and mathematical precision in this high-stakes competition organized by the Brahmagupta Mathematics Club. Open to all SOE-DSU students.',
    highlights: ['Speed Challenge', 'Mathematical Precision', 'Special Prizes'],
    date: '27 April 2026 | 1:30 PM - 4:30 PM',
    location: 'Lecture Hall - 03',
    formLink: 'https://brahmaguptha.carrd.co/'
  }
];

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section" id="home">
        <div className="hero-background"></div>
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">Mathematics &amp; AI Club — DSU Bangalore</div>
          <h1 className="hero-massive-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
            From Mathematical Insight to<br />Intelligent Engineering...
          </h1>
          <p className="hero-subtitle">
            The Mathematics club of Dayanada sagar University, Bangalore
          </p>
          <div className="hero-actions">
            <Link href="/events" className="btn btn-copper">View Events</Link>
            <a
              href="https://www.dsu.edu.in/engineering/mathematics"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              Know More ↗
            </a>
          </div>
        </div>



        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="about-section" id="about">
        <div className="section-inner">
          <div className="about-text-col">
            <div className="section-label">Who We Are</div>
            <h2 className="section-head">Born from curiosity.<br />Built on rigour.</h2>
            <p className="section-para">
              The Brahmagupta Mathematics Club, established by the Department of Mathematics at Dayananda Sagar School of Engineering, serves as a bridge between young engineering minds and advanced research in mathematics and AI.
            </p>
            <p className="section-para">
              Inspired by the 7th-century Indian mathematician Brahmagupta, we foster analytical thinking, computational skills, and research-oriented learning through workshops, hackathons, seminars, and more.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <Link href="/about" className="btn btn-dark">Learn More About Us</Link>
              <a
                href="https://www.dsu.edu.in/engineering/mathematics"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ background: 'transparent', border: '1.5px solid var(--color-secondary)', color: 'var(--color-secondary)' }}
              >
                Know More ↗
              </a>
            </div>
          </div>
          <div className="about-pillars-col">
            <div className="pillar-card">
              <div className="pillar-icon">∑</div>
              <h3>Mathematics for Engineers</h3>
              <p>Strengthening the core concepts that power modern technology.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">⟨Data⟩</div>
              <h3>Data, Algorithms &amp; Modeling</h3>
              <p>Building strong foundations for intelligent systems.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">⚙</div>
              <h3>Technical Workshops &amp; Hack Sessions</h3>
              <p>Practical exposure beyond classroom learning.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">◎</div>
              <h3>Collaborative Learning Environment</h3>
              <p>A platform for idea exchange, discussion, and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EVENTS SECTION ─── */}
      <section className="events-section" id="events">
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <div className="section-label light">Upcoming</div>
              <h2 className="section-head light">Events &amp; Workshops</h2>
            </div>
            <Link href="/events" className="btn btn-outline-copper">View All Events</Link>
          </div>
          <div className="events-grid">
            {UPCOMING_EVENTS.map(ev => (
              <div key={ev.id} className="event-card featured-event">
                <div className="event-card-top">
                  <span className="event-type-badge">{ev.type}</span>
                  <span className="event-live-pill">🔥 Registrations Open</span>
                </div>
                <h3 className="event-title">{ev.title}</h3>
                <p className="event-desc">{ev.desc}</p>
                <div className="event-highlights">
                  {ev.highlights?.map((h: string, i: number) => (
                    <span key={i} className="event-highlight-tag">{h}</span>
                  ))}
                </div>
                <div className="event-meta">
                  <span>📅 {ev.date}</span>
                  <span>📍 {ev.location}</span>
                </div>
                {ev.formLink && (
                  <a
                    href={ev.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-copper event-register-btn"
                  >
                    Register ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY TEASER ─── */}
      <section className="gallery-section" id="gallery">
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <div className="section-label">Our Moments</div>
              <h2 className="section-head">The Brahmagupta Experience</h2>
              <p className="section-para gallery-intro">From intense problem-solving sessions to relaxed community meetups — here&apos;s a glimpse of life in the club.</p>
            </div>
          </div>
          <div className="gallery-grid">
            {CLUB_PHOTOS.slice(0, 6).map((photo, i) => (
              <div
                key={i}
                className={`gallery-item${photo.layout ? ' ' + photo.layout : ''}`}
              >
                <img src={photo.src} alt={photo.alt} loading={i === 0 ? 'eager' : 'lazy'} />
                <div className="gallery-overlay"><span>{photo.alt}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="contact-section" id="contact">
        <div className="contact-bg-overlay"></div>
        <div className="section-inner contact-inner">
          <div className="contact-info-col">
            <div className="section-label light">Get In Touch</div>
            <h2 className="section-head light">Connect With Us</h2>
            <p className="section-para light-para">
              Whether you&apos;re a new student looking to join, a faculty member wanting to collaborate, or an industry partner — we&apos;d love to hear from you.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <a href="mailto:mathsclub@dsu.edu.in" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>mathsclub@dsu.edu.in</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div>
                  <span>Dayananda Sagar University,</span><br />
                  <span>Devarakaggalahalli, Harohalli,</span><br />
                  <span>Kanakapura Road, Bengaluru - 562112</span>
                </div>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://www.instagram.com/themathclub_dsu?utm_source=qr&igsh=Y2pybWNvYXBod29q" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://www.linkedin.com/in/mathsclub-dsu-60075b3ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <Link href="/contact" className="social-link">Full Contact Page</Link>
            </div>
          </div>
          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

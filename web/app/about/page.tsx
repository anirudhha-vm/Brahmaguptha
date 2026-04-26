import React from 'react';
import Link from 'next/link';
import './about.css';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About | Brahmagupta Mathematics Club DSU',
  description: 'Learn about the Brahmagupta Mathematics Club — a student-led mathematics and AI community at Dayananda Sagar University, Bengaluru.',
};

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-inner animate-fade-in">
          <div className="section-label">Who We Are</div>
          <h1>About<br />Brahmagupta Club</h1>
          <p>
            The official Mathematics &amp; AI Club of Dayananda Sagar University — born from the legacy of a great Indian mathematician and built on a foundation of rigour, curiosity, and innovation.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="about-body">

        {/* Overview + Mission */}
        <div className="about-overview">
          <div className="about-overview-text">
            <div className="section-label">Our Story</div>
            <h2>Brahmagupta Mathematics Club</h2>
            <p>
              The Brahmagupta Mathematics Club, established by the Department of Mathematics at School of Engineering, Dayananda Sagar University, serves as a bridge between young engineering minds and advanced research in mathematics and Artificial Intelligence.
            </p>
            <p>
              As Dayananda Sagar University proudly positions itself as India's AI-first university, the club aligns its activities with this forward-looking vision. Mathematics forms the foundation of Artificial Intelligence, Data Science, Machine Learning, Computational Modeling, and emerging technologies.
            </p>
            <p>
              Inspired by the legacy of the great Indian mathematician Brahmagupta, the club fosters analytical thinking, computational skills, and research-oriented learning. Through workshops, technical talks, conferences, coding sessions, AI–math integration programs, and collaborative research activities, the club nurtures curiosity and innovation among students.
            </p>
            <p>
              The Brahmagupta Mathematics Club is not merely an academic body; it is a platform that transforms mathematical knowledge into engineering solutions and AI-powered advancements.
            </p>
            <h3>Logo Description</h3>
            <p>
              Features the portrait of Brahmagupta, symbolizing the heritage of Indian mathematics. The circular design represents unity and infinite exploration, with a color theme blending academic depth and modern vision.
            </p>
            <h3>About Brahmagupta</h3>
            <p>
              The 7th-century mathematician Brahmagupta made profound contributions to mathematics, particularly through his work <em>Brahmasphutasiddhanta</em>, where he formalized the concept of zero and laid down rules for using negative numbers.
            </p>
            <a
              href="https://www.dsu.edu.in/engineering/mathematics"
              target="_blank"
              rel="noopener noreferrer"
              className="know-more-btn"
            >
              Know More — Dept. of Mathematics ↗
            </a>
          </div>

          <div className="about-mission">
            <h3>Our Mission</h3>
            <ul className="mission-list">
              {[
                'To organize workshops, seminars, conferences, and hackathons integrating mathematics with AI and data science.',
                'To develop strong analytical, logical, and problem-solving abilities in students.',
                'To create a collaborative academic ecosystem promoting innovation and interdisciplinary research.',
              ].map((item, i) => (
                <li key={i}>
                  <span className="mission-bullet">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-vision" style={{ marginTop: '2rem' }}>
            <h3>Our Vision</h3>
            <ul className="mission-list">
              {[
                'To become a leading platform connecting mathematics, engineering, and AI.',
                'To support DSU\'s vision of being an AI-first institution.',
                'To inspire students to pursue higher studies and research in computational sciences.',
                'To build a culture of curiosity and technological excellence.',
              ].map((item, i) => (
                <li key={i}>
                  <span className="mission-bullet" style={{ background: 'var(--color-secondary)' }}>★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillars */}
        <div className="about-pillars">
          <div className="section-label">What We Do</div>
          <h2>Our Three Pillars</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">∑</div>
              <h3>Mathematics</h3>
              <p>
                Number theory, combinatorics, real analysis, linear algebra, and beyond — we go deep into the structures that underpin all of science and technology.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">⟨AI⟩</div>
              <h3>Artificial Intelligence</h3>
              <p>
                From linear algebra to transformer architectures, we explore the mathematics that makes machine intelligence possible — and push the boundaries of what&apos;s computationally achievable.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">◎</div>
              <h3>Community</h3>
              <p>
                A peer network of sharp minds — workshops, mentorship, hackathons, seminars, and lifelong academic connections that extend across batches and years.
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

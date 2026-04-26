import React from 'react';
import './team.css';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Team | Brahmagupta Mathematics Club DSU',
  description: 'Meet the office bearers, team heads, and faculty in-charge of the Brahmagupta Mathematics Club at DSU Bengaluru.',
};

const OFFICE_BEARERS = [
  { name: 'Prrajwal Kataokkar', role: 'President' },
  { name: 'Sonia N', role: 'Vice President' },
  { name: 'Rachana Aadya', role: 'Secretary' },
  { name: 'Ishaan Shukla', role: 'Joint Secretary' },
];

const TEAM_HEADS = [
  { name: 'P. N. Bhoomika', role: 'Event Management & Planning Head' },
  { name: 'Anirudhha Veeranagaiah M', role: 'Technical & Website Head' },
  { name: 'Soumil VM', role: 'Event Management & Planning Head' },
  { name: 'Syed Amaan', role: 'Technical & Website Head' },
  { name: 'Dulcea Suresha', role: 'Social Media & PR Head' },
  { name: 'Sanchitha A', role: 'Content & Newsletter Head' },
  { name: 'Saraff', role: 'Social Media & PR Head' },
  { name: 'Shivam Kr Mehta', role: 'Content & Newsletter Head' },
];

const FACULTY = [
  {
    name: 'Mr. Manoj Solanki',
    title: 'Faculty In-Charge of Club',
    designation: 'Assistant Professor',
    dept: 'Dept. of Mathematics\nDayananda Sagar University, Bengaluru',
    email: 'Manoj.s-maths@dsu.edu.in',
    phone: '+91 9351266108',
  },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

export default function TeamPage() {
  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-inner animate-fade-in">
          <div className="section-label" style={{ color: 'var(--color-accent)', letterSpacing: '4px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Meet The People
          </div>
          <h1>Our Team</h1>
          <p>The dedicated students and faculty who drive the Brahmagupta Mathematics Club forward — organizing events, building platforms, and fostering a culture of mathematical excellence.</p>
        </div>
      </section>

      <div className="team-body">

        {/* Office Bearers */}
        <div className="team-section">
          <div className="team-section-header">
            <h2>Office Bearers</h2>
          </div>
          <div className="team-grid">
            {OFFICE_BEARERS.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{getInitials(member.name)}</div>
                <div className="team-card-name">{member.name}</div>
                <div className="team-card-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Heads */}
        <div className="team-section">
          <div className="team-section-header">
            <h2>Team Heads</h2>
          </div>
          <div className="team-grid">
            {TEAM_HEADS.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{getInitials(member.name)}</div>
                <div className="team-card-name">{member.name}</div>
                <div className="team-card-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty In-Charge */}
        <div className="team-section faculty-section">
          <div className="team-section-header">
            <h2>Faculty In-Charge</h2>
          </div>
          <div className="faculty-grid">
            {FACULTY.map((f, i) => (
              <div className="faculty-card" key={i}>
                <div className="faculty-avatar">{getInitials(f.name)}</div>
                <div className="faculty-info">
                  <div className="faculty-card-name">{f.name}</div>
                  <div className="faculty-card-title">{f.title}</div>
                  <div className="faculty-card-dept">
                    {f.designation}<br />
                    {f.dept.split('\n').map((line, j) => (
                      <span key={j}>{line}<br /></span>
                    ))}
                  </div>
                  <div className="faculty-contact">
                    <a href={`mailto:${f.email}`}>{f.email}</a>
                    <span>{f.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

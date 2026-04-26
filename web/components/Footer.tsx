import React from 'react';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo-wrap">
            <img src="/Final_Logo.png" alt="Brahmagupta Club Logo" className="footer-logo" />
            <div className="footer-brand-name">BRAHMAGUPTA<br />MATHEMATICS CLUB</div>
          </div>
          <p className="footer-tagline">
            The official Mathematics &amp; AI Club of Dayananda Sagar University, Bangalore — empowering analytical thinking, research, and innovation.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/themathclub_dsu?utm_source=qr&igsh=Y2pybWNvYXBod29q" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/in/mathsclub-dsu-60075b3ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.dsu.edu.in/engineering/mathematics" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Dept of Mathematics">
              <span style={{ fontSize: '1.1rem' }}>∑</span>
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-nav-col">
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer-nav-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://www.dsu.edu.in/engineering/mathematics" target="_blank" rel="noopener noreferrer">Dept. of Mathematics</a></li>
            <li><a href="https://www.dsu.edu.in" target="_blank" rel="noopener noreferrer">DSU Website</a></li>
            <li><Link href="/ask">Ask AI ✦</Link></li>
            <li><Link href="/login">Admin Login</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact-col">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <a href="mailto:mathsclub@dsu.edu.in">mathsclub@dsu.edu.in</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </span>
            <span>
              Dayananda Sagar University,<br />
              Devarakaggalahalli, Harohalli,<br />
              Kanakapura Road,<br />
              Bengaluru – 562112
            </span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="22"></line><line x1="8" y1="18" x2="8" y2="22"></line><line x1="16" y1="18" x2="16" y2="22"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="10" x2="20" y2="10"></line></svg>
            </span>
            <span>Dept. of Mathematics, SOE – DSU Bangalore</span>
          </div>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 Brahmagupta Mathematics &amp; AI Club. All rights reserved.
        </span>
        <span className="footer-dept-badge">
          A club of the Dept. of Mathematics, School of Engineering, DSU
        </span>
      </div>
    </footer>
  );
}

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
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Instagram">ig</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn">in</a>
            <a href="https://www.dsu.edu.in/engineering/mathematics" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Dept of Mathematics">∑</a>
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
            <span className="footer-contact-icon">✉</span>
            <a href="mailto:mathsclub@dsu.edu.in">mathsclub@dsu.edu.in</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <span>
              Dayananda Sagar University,<br />
              Devarakaggalahalli, Harohalli,<br />
              Kanakapura Road,<br />
              Bengaluru – 562112
            </span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">🏛</span>
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

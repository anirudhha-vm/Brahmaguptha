import React from 'react';
import ContactForm from '../ContactForm';
import Footer from '../../components/Footer';
import './contact.css';

export const metadata = {
  title: 'Contact | Brahmagupta Mathematics Club DSU',
  description: 'Get in touch with the Brahmagupta Mathematics Club at DSU Bengaluru.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-inner animate-fade-in">
          <div className="section-label-lgt">Get In Touch</div>
          <h1>Contact Us</h1>
          <p>Whether you&apos;re a new student looking to join, a faculty member wanting to collaborate, or an industry partner — we&apos;d love to hear from you.</p>
        </div>
      </section>

      {/* Contact Body */}
      <section className="contact-body">
        <div className="contact-body-inner">
          {/* Info Column */}
          <div className="contact-info-col">
            <div className="ci-block">
              <div className="ci-icon" style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <div className="ci-label">Email</div>
                <a href="mailto:mathsclub@dsu.edu.in" className="ci-value">mathsclub@dsu.edu.in</a>
              </div>
            </div>
            <div className="ci-block">
              <div className="ci-icon" style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <div className="ci-label">Address</div>
                <div className="ci-value">
                  Dayananda Sagar University,<br />
                  Devarakaggalahalli, Harohalli,<br />
                  Kanakapura Road,<br />
                  Bengaluru – 562112
                </div>
              </div>
            </div>
            <div className="ci-block">
              <div className="ci-icon" style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="22"></line><line x1="8" y1="18" x2="8" y2="22"></line><line x1="16" y1="18" x2="16" y2="22"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="10" x2="20" y2="10"></line></svg>
              </div>
              <div>
                <div className="ci-label">Department</div>
                <a href="https://www.dsu.edu.in/engineering/mathematics" target="_blank" rel="noopener noreferrer" className="ci-value">
                  Dept. of Mathematics, SOE – DSU
                </a>
              </div>
            </div>

            <div className="contact-socials-block">
              <div className="ci-label" style={{ marginBottom: '1rem' }}>Follow Us</div>
              <div className="co-socials">
                <a href="https://www.instagram.com/themathclub_dsu?utm_source=qr&igsh=Y2pybWNvYXBod29q" target="_blank" rel="noopener noreferrer" className="co-social-link">Instagram</a>
                <a href="https://www.linkedin.com/in/mathsclub-dsu-60075b3ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="co-social-link">LinkedIn</a>
                <a href="https://www.dsu.edu.in/engineering/mathematics" target="_blank" rel="noopener noreferrer" className="co-social-link">DSU Maths</a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col-outer">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

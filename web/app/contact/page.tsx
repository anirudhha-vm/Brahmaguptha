import React from 'react';
import ContactForm from '../ContactForm';
import Footer from '../../components/Footer';
import './contact.css';

export const metadata = {
  title: 'Contact | Brahmagupta Mathematics Club DSU',
  description: 'Get in touch with the Brahmagupta Mathematics Club at DSU Bangalore.',
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
              <div className="ci-icon">✉</div>
              <div>
                <div className="ci-label">Email</div>
                <a href="mailto:mathsclub@dsu.edu.in" className="ci-value">mathsclub@dsu.edu.in</a>
              </div>
            </div>
            <div className="ci-block">
              <div className="ci-icon">📍</div>
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
              <div className="ci-icon">🏛</div>
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
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="co-social-link">Instagram</a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="co-social-link">LinkedIn</a>
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

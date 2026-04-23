'use client';

import React, { useState } from 'react';
import { createClient } from '../utils/supabase/client';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // 1. Save to Supabase DB
      const supabase = createClient();
      await supabase.from('contact_messages').insert([{
        name: formData.name,
        email: formData.email,
        message: formData.message
      }]);

      // 2. Trigger email via Edge Function
      await fetch(
        'https://azmkrrgbhqeeivcmsjsi.supabase.co/functions/v1/send-contact-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form error:', err);
      setErrorMsg('Failed to send message. Please email us directly at mathsclub@dsu.edu.in');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id.replace('contact-', '')]: e.target.value
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Send a Message</h3>
      {submitted ? (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          letterSpacing: '1px'
        }}>
          ✓ Message Sent!<br />
          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
            We&apos;ll get back to you soon at mathsclub@dsu.edu.in
          </span>
        </div>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-msg">Message</label>
            <textarea
              id="contact-msg"
              rows={4}
              placeholder="Tell us what's on your mind..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {errorMsg && (
            <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              {errorMsg}
            </p>
          )}
          <button type="submit" className="btn btn-copper full-width-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </>
      )}
    </form>
  );
}

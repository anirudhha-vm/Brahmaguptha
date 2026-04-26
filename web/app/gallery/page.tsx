import React from 'react';
import Footer from '../../components/Footer';
import './gallery.css';
import GalleryGrid from './GalleryGrid';

export const metadata = {
  title: 'Gallery | Brahmagupta Mathematics Club DSU',
  description: 'Photo gallery of Brahmagupta Mathematics Club events and activities at DSU Bengaluru.',
};

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-inner animate-fade-in">
          <div className="section-label-light">Our Moments</div>
          <h1>Brahmagupta<br />Gallery</h1>
          <p>
            From intense problem-solving sessions to celebrations of mathematical victories — a visual story of our club&apos;s journey.
          </p>
        </div>
      </section>

      {/* Animated Photo Grid */}
      <section className="gallery-photos-section">
        <div className="gallery-photos-inner">
          <div className="gallery-section-header">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Browse Photos</div>
            <h2>Our Event Gallery</h2>
            <p>Highlights from workshops, competitions, and club life at DSU Bengaluru.</p>
          </div>
          <GalleryGrid />
        </div>
      </section>

      <Footer />
    </div>
  );
}

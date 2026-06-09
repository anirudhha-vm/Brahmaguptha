'use client';

import React, { useEffect, useRef } from 'react';
import { FAST_FORMULAE_PHOTOS, CLUB_PHOTOS } from './photos';

// Older event photos
const OLDER_PHOTOS = CLUB_PHOTOS.slice(5);

export default function GalleryGrid() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const allPhotos = [...FAST_FORMULAE_PHOTOS, ...OLDER_PHOTOS];

  return (
    <>
      {/* ── The Fast & The Formulae Section ── */}
      <div className="gallery-event-section">

        <div className="gallery-photo-grid">
          {FAST_FORMULAE_PHOTOS.map((photo, i) => (
            <div
              key={`ff-${i}`}
              className={`gallery-photo-item ${photo.layout}`}
              ref={(el) => { itemRefs.current[i] = el; }}
            >
              <img src={photo.src} alt={photo.alt} loading={i < 4 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Earlier Events ── */}
      <div className="gallery-divider">
        <span>Earlier Events</span>
      </div>

      <div className="gallery-photo-grid">
        {OLDER_PHOTOS.map((photo, i) => (
          <div
            key={`older-${i}`}
            className={`gallery-photo-item ${photo.layout}`}
            ref={(el) => { itemRefs.current[FAST_FORMULAE_PHOTOS.length + i] = el; }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
}

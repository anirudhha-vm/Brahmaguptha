'use client';

import React, { useEffect, useRef } from 'react';
import { CLUB_PHOTOS } from './photos';

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-photo-grid">
      {CLUB_PHOTOS.map((photo, i) => (
        <div
          key={i}
          className={`gallery-photo-item ${photo.layout}`}
          ref={(el) => { itemRefs.current[i] = el; }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading={i < 4 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </div>
  );
}

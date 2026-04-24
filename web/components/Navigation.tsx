'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  // Hide the floating navigation on auth and admin pages to prevent overlapping
  // with their unique layouts/headers
  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  return (
    <nav className="floating-nav" id="floating-nav">
      <Link href="/" className="nav-brand" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
        <img src="/Final_Logo.png" alt="Brahmagupta Club Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
        <span style={{paddingTop: '2px'}}>BRAHMAGUPTA</span>
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/team">Team</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/ask" className="nav-ask-ai">Ask AI ✦</Link>
      </div>
      <button className="nav-menu-toggle" aria-label="Toggle menu">☰</button>
    </nav>
  );
}

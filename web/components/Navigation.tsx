'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Hide the floating navigation on auth and admin pages to prevent overlapping
  // with their unique layouts/headers
  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="floating-nav" id="floating-nav">
      <Link href="/" className="nav-brand" onClick={closeMenu}>
        <img src="/Final_Logo.png" alt="Brahmagupta Club Logo" className="nav-brand-logo" />
        <span className="nav-brand-text">BRAHMAGUPTA</span>
        <span className="nav-brand-divider desktop-only" style={{ opacity: 0.3, margin: '0 8px', fontSize: '1.2rem', fontWeight: 300, color: 'var(--color-secondary)' }}>|</span>
        <span className="nav-brand-divider mobile-only" style={{ opacity: 0.3, margin: '0 6px', fontSize: '1rem', fontWeight: 300, color: 'var(--color-secondary)' }}>|</span>
        <img src="/dsu_logo_color.png" alt="DSU Logo" className="nav-dsu-logo desktop-only" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
        <img src="/dsu_logo_seal.png" alt="DSU Logo" className="nav-dsu-logo mobile-only" style={{ height: '28px', width: '28px', objectFit: 'contain' }} />
      </Link>
      
      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/events" onClick={closeMenu}>Events</Link>
        <Link href="/team" onClick={closeMenu}>Team</Link>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/ask" className="nav-ask-ai" onClick={closeMenu}>Ask AI ✦</Link>
      </div>

      <button 
        className="nav-menu-toggle" 
        aria-label="Toggle menu" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

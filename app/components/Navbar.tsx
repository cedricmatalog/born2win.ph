"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/free-webinar', label: 'Free Webinar' },
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/contact', label: 'Contact' },
  { href: '/global', label: 'Global Students' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <style>{`
      .nav-desktop { display: none; }
      .nav-burger  { display: flex; }
      #nav-cta     { display: none; }
      @media (min-width: 768px) {
        .nav-desktop { display: flex; }
        .nav-burger  { display: none; }
        #nav-cta     { display: inline-block; }
      }
    `}</style>
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.2)' : '1px solid rgba(212,175,55,0.06)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/Logo-Gray.png"
            alt="Born2WinPh"
            width={140}
            height={40}
            style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div style={{ gap: '2.5rem', alignItems: 'center' }} className="nav-desktop">
          {NAV_LINKS.map(function renderNavLink(l) {
            return (
              <Link
                key={l.href}
                href={l.href}
                className="hover-gold"
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/free-webinar" className="btn-gold" style={{ textDecoration: 'none', fontSize: '0.7rem' }} id="nav-cta">
            Register Free
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: 'var(--gold)' }}
            className="nav-burger"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              {isOpen ? (
                <path d="M1 1L21 15M21 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <>
                  <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{
          background: '#0A0A0A',
          borderTop: '1px solid var(--border)',
          padding: '1.5rem 2rem 2rem',
        }}>
          {NAV_LINKS.map(function renderMobileLink(l, i) {
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/free-webinar" onClick={() => setIsOpen(false)} className="btn-gold" style={{ display: 'inline-block', marginTop: '1.5rem', textDecoration: 'none' }}>
            Register Free
          </Link>
        </div>
      )}
    </nav>
    </>
  );
}

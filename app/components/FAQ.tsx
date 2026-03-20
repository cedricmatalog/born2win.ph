"use client";

import { useState } from 'react';
import SectionHeader from './SectionHeader';

const FAQS = [
  {
    q: "How much is the introductory webinar for beginners?",
    a: "Our introductory webinar is completely free of charge for beginners."
  },
  {
    q: "How long is the introductory webinar?",
    a: "The introductory webinar is a 3-hour comprehensive online workshop."
  },
  {
    q: "How much is the advanced program you offer?",
    a: "Details regarding the advanced program are shared during the free introductory webinar."
  },
  {
    q: "Do I need to do this full-time?",
    a: "No, forex trading can be done part-time. The market is open 24/5, allowing you to trade at your convenience."
  },
  {
    q: "Can I give you money and you trade for me?",
    a: "No, we are an education provider. We teach you how to trade for yourself so you have full control over your finances."
  },
  {
    q: "Is that the same as stocks/bonds/crypto?",
    a: "No. The forex market is the most liquid market. It is recession-proof. In forex trading, you can make money whether the market goes up or down, unlike other trading instruments where you can only make profits when the market goes up."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{
      background: 'var(--obsidian)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      borderTop: '1px solid rgba(212,175,55,0.08)',
    }}>
      {/* Section number */}
      <div className="section-num" style={{
        position: 'absolute', bottom: '-2rem', right: '-1rem', zIndex: 0, opacity: 0.5,
      }}>06</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="faq-grid">

          {/* Left: header */}
          <div>
            <SectionHeader eyebrow="FAQ">
              Frequently<br /><span className="text-gradient-gold">Asked Questions</span>
            </SectionHeader>

            <p style={{
              fontSize: '0.9rem', lineHeight: 1.8,
              fontWeight: 300, color: 'var(--text-secondary)', marginTop: '1.5rem',
            }}>
              Everything you need to know before starting your forex journey with us.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              <a href="/free-webinar" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Register for Free Webinar
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            {FAQS.map(function renderFaq(faq, i) {
              return (
                <div
                  key={i}
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'flex-start', gap: '1rem',
                      padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span className="font-display" style={{
                        fontSize: '1rem',
                        color: 'rgba(212,175,55,0.4)', letterSpacing: '0.05em', flexShrink: 0,
                        paddingTop: '2px',
                      }}>{String(i + 1).padStart(2, '0')}</span>
                      <span style={{
                        fontSize: '0.95rem', fontWeight: 500,
                        color: open === i ? 'var(--gold)' : 'var(--text-primary)',
                        lineHeight: 1.5, transition: 'color 0.2s',
                      }}>{faq.q}</span>
                    </div>

                    <div style={{
                      flexShrink: 0, width: '22px', height: '22px',
                      border: '1px solid rgba(212,175,55,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'transform 0.3s ease, background 0.2s',
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      background: open === i ? 'rgba(212,175,55,0.1)' : 'transparent',
                      marginTop: '2px',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1V9M1 5H9" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>

                  {open === i && (
                    <div style={{ paddingBottom: '1.5rem', paddingLeft: '2.25rem' }}>
                      <p style={{
                        fontSize: '0.9rem', lineHeight: 1.8,
                        fontWeight: 300, color: 'var(--text-secondary)', margin: 0,
                        borderLeft: '2px solid rgba(212,175,55,0.3)',
                        paddingLeft: '1rem',
                      }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

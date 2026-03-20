"use client";

import { useEffect, useState } from "react";

// Update this to match the next upcoming webinar date
const NEXT_WEBINAR = new Date("2026-02-04T05:00:00Z"); // Feb 4, 1pm PHT = 05:00 UTC

function getTimeLeft() {
  const diff = NEXT_WEBINAR.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function WebinarCountdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      background: 'rgba(17,17,17,0.8)',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      padding: '1.5rem',
      position: 'relative',
    }}>
      {/* Corner accent */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderBottom: '1px solid rgba(212,175,55,0.2)', borderLeft: '1px solid rgba(212,175,55,0.2)' }} />

      {/* Header */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
          Next Free Webinar
        </div>
        <div className="font-display" style={{ fontSize: '1.1rem', letterSpacing: '0.06em', color: 'var(--text-primary)', lineHeight: 1 }}>
          Feb 4 · Wednesday · 1pm–4pm PHT
        </div>
      </div>

      <div style={{ height: '1px', background: 'rgba(212,175,55,0.1)', marginBottom: '1.25rem' }} />

      {/* Countdown units */}
      {time.expired ? (
        <div style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.1em', textAlign: 'center', padding: '1rem 0' }}>
          Webinar is live now!
        </div>
      ) : (
        <div className="countdown-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(212,175,55,0.08)' }}>
          {[
            { val: time.days,    label: 'Days' },
            { val: time.hours,   label: 'Hours' },
            { val: time.minutes, label: 'Mins' },
            { val: time.seconds, label: 'Secs' },
          ].map((u) => (
            <div key={u.label} style={{ background: 'rgba(17,17,17,0.9)', padding: '0.85rem 0.5rem', textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '2.2rem', color: 'var(--text-primary)', letterSpacing: '0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                {pad(u.val)}
              </div>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {u.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pulse badge */}
      <div style={{
        position: 'absolute', top: '1rem', right: '1rem',
        display: 'flex', alignItems: 'center', gap: '5px',
        background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)',
        borderRadius: '2px', padding: '3px 8px',
      }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', animation: 'dotPulse 1.5s infinite' }} />
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--gold)', fontWeight: 600 }}>FREE</span>
      </div>
    </div>
  );
}

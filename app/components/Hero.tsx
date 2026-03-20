
const SOCIAL_PROOF = [
  { text: 'Earned ₱120,000 in my first month', name: 'Mark T.' },
  { text: 'Finally understood forex after years of confusion', name: 'Jessa R.' },
  { text: '6-digit profit in a single trading day', name: 'Carlo M.' },
  { text: 'Coach Ferdie\'s method is unlike anything else', name: 'Ana L.' },
  { text: 'Quit my day job after 3 months of trading', name: 'Ryan P.' },
  { text: 'Best investment I\'ve ever made in myself', name: 'Liza G.' },
  { text: 'From zero to consistent profits in 60 days', name: 'Danilo F.' },
  { text: 'The risk management framework changed everything', name: 'Grace N.' },
];

const STATS = [
  { num: '300K+', label: 'Traders Trained' },
  { num: '19 yrs', label: 'Combined Experience' },
  { num: '#1', label: 'In Asia' },
  { num: 'Free', label: '3-Hour Webinar' },
];

import WebinarCountdown from "./WebinarCountdown";

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--obsidian)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>

      {/* Background: faint grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Large decorative section number */}
      <div className="section-num" style={{
        position: 'absolute', top: '-2rem', left: '-1rem', zIndex: 0,
        fontSize: 'clamp(8rem, 25vw, 22rem)',
      }}>01</div>

      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%', width: '600px', height: '600px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '0', left: '20%', width: '400px', height: '300px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', zIndex: 0,
      }} />

      {/* Social proof strip */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2,
        background: 'rgba(212,175,55,0.06)', borderBottom: '1px solid var(--border)',
        padding: '7px 0', overflow: 'hidden',
      }}>
        <div className="ticker-wrap">
          <div className="ticker-content">
            {[...SOCIAL_PROOF, ...SOCIAL_PROOF].map((item, i) => (
              <span key={i} style={{ marginRight: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.55rem' }}>★</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '0.06em' }}>
                  &ldquo;{item.text}&rdquo;
                </span>
                <span style={{ fontSize: '0.6rem', color: 'rgba(212,175,55,0.5)', letterSpacing: '0.1em' }}>
                  — {item.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.25rem 4rem', position: 'relative', zIndex: 3, width: '100%' }} className="hero-content-pad">

        {/* Eyebrow label */}
        <div className="fade-up fade-up-1" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
          <div className="dot-pulse" />
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>Asia&apos;s #1 Forex Education</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)', maxWidth: '120px' }} />
        </div>

        {/* Hero heading split layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'end' }} className="hero-grid">

          {/* Left: headline */}
          <div>
            <h1 className="fade-up fade-up-2 font-display" style={{
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              lineHeight: 0.92,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
              margin: 0,
            }}>
              Learn Forex<br />
              <span className="text-shimmer">Trading</span><br />
              With Born2WinPh
            </h1>

            <p className="fade-up fade-up-3" style={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: '460px',
              marginTop: '2rem',
            }}>
              Discover the art of forex trading from the <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>number 1 and most trusted coaches</span> in the industry. Start making profitable trades today.
            </p>

            <div className="fade-up fade-up-4 btn-row" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href="/free-webinar" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Register for Free Webinar
              </a>
              <a href="#about" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Meet the Coaches
              </a>
            </div>
          </div>

          {/* Right: next webinar countdown */}
          <div className="hero-chart fade-up fade-up-3">
            <WebinarCountdown />
          </div>
        </div>

        {/* Stats row */}
        <div className="fade-up fade-up-4" style={{ marginTop: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div className="gold-rule" style={{ width: '100%', marginBottom: '2rem' }} />
          {STATS.map(function renderStat(s, i) {
            return (
              <div key={i}>
                <div className="font-display" style={{ fontSize: '2rem', letterSpacing: '0.05em', color: 'var(--gold)' }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '2px' }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

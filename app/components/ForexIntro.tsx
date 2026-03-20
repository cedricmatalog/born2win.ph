const KEY_FACTS = [
  { label: 'Daily Volume', value: '$7.5 Trillion' },
  { label: 'Trading Hours', value: '24 Hours / 5 Days' },
  { label: 'Market Access', value: 'Global & Online' },
  { label: 'Entry Point', value: 'Beginner Friendly' },
];

export default function ForexIntro() {
  return (
    <section style={{
      background: '#0D0D0D',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      borderTop: '1px solid rgba(212,175,55,0.1)',
    }}>
      {/* Section number */}
      <div className="section-num" style={{
        position: 'absolute', bottom: '-3rem', right: '-1rem', zIndex: 0, opacity: 0.6,
      }}>02</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <div className="section-eyebrow" style={{ marginBottom: '3rem' }}>
          <span className="section-eyebrow__label">What Is Forex</span>
          <div className="section-eyebrow__rule" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="intro-grid">

          {/* Text */}
          <div>
            <h2 className="section-heading" style={{ marginBottom: '2rem' }}>
              What is Forex<br /><span className="text-gradient-gold">Trading?</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.85,
                fontWeight: 300,
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                Forex trading involves exchanging one currency for another on a global market. It&apos;s a vital 24-hour marketplace, offering myriad opportunities for profit through analyzing currency value changes.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.85,
                fontWeight: 300,
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                Essential for international commerce, it&apos;s dynamic, fast-paced, and accessible to traders worldwide, presenting unique investment prospects.
              </p>
            </div>

            {/* Key facts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem' }}>
              {KEY_FACTS.map(function renderFact(f, i) {
                return (
                  <div key={i} style={{
                    padding: '1rem',
                    background: 'rgba(212,175,55,0.04)',
                    border: '1px solid rgba(212,175,55,0.1)',
                    borderLeft: '2px solid rgba(212,175,55,0.4)',
                  }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '4px' }}>{f.label}</div>
                    <div className="font-display" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>{f.value}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video placeholder */}
          <div style={{ position: 'relative' }}>
            {/* Offset border frame */}
            <div style={{
              position: 'absolute',
              top: '1rem', left: '1rem', right: '-1rem', bottom: '-1rem',
              border: '1px solid rgba(212,175,55,0.2)',
              zIndex: 0,
            }} />

            <div
              className="video-box"
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                cursor: 'pointer',
                zIndex: 1,
              }}
            >
              {/* Abstract market lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} viewBox="0 0 400 225" preserveAspectRatio="none">
                <polyline points="0,180 40,160 80,170 120,110 160,130 200,80 240,100 280,60 320,90 360,40 400,70" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                <polyline points="0,200 40,195 80,190 120,175 160,170 200,155 240,165 280,140 320,150 360,120 400,130" fill="none" stroke="var(--gold)" strokeWidth="0.5" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

              {/* Play button */}
              <div className="play-btn" style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }}>
                <div style={{
                  width: '68px', height: '68px',
                  border: '1px solid rgba(212,175,55,0.5)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--gold)" style={{ marginLeft: '3px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem',
                fontSize: '0.65rem', letterSpacing: '0.12em',
                color: 'rgba(212,175,55,0.7)', textTransform: 'uppercase', fontWeight: 500,
              }}>Watch: Introduction to Forex</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

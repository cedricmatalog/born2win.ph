const CANDLES = [
  { h: 70, bull: true, wick_top: 10, wick_bot: 8 },
  { h: 45, bull: false, wick_top: 14, wick_bot: 6 },
  { h: 80, bull: true, wick_top: 8, wick_bot: 12 },
  { h: 55, bull: false, wick_top: 18, wick_bot: 5 },
  { h: 95, bull: true, wick_top: 6, wick_bot: 10 },
  { h: 65, bull: true, wick_top: 12, wick_bot: 7 },
  { h: 40, bull: false, wick_top: 9, wick_bot: 14 },
  { h: 85, bull: true, wick_top: 5, wick_bot: 8 },
];

const TICKER_ITEMS = [
  'EUR/USD +0.0012', 'GBP/USD -0.0008', 'USD/JPY +0.42', 'USD/CHF +0.0003',
  'AUD/USD -0.0015', 'NZD/USD +0.0009', 'USD/CAD -0.0021', 'EUR/GBP +0.0006',
];

const STATS = [
  { num: '300K+', label: 'Traders Trained' },
  { num: '19 yrs', label: 'Combined Experience' },
  { num: '#1', label: 'In Asia' },
  { num: 'Free', label: '3-Hour Webinar' },
];

const TIME_LABELS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];

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

      {/* Ticker tape */}
      <div style={{
        position: 'absolute', top: '64px', left: 0, right: 0, zIndex: 2,
        background: 'rgba(212,175,55,0.08)', borderBottom: '1px solid var(--border)',
        padding: '6px 0', overflow: 'hidden',
      }}>
        <div className="ticker-wrap">
          <div className="ticker-content" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(212,175,55,0.7)', fontWeight: 500 }}>
            {/* Duplicate the items for seamless looping */}
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map(function renderTickerItem(item, i) {
              return (
                <span key={i} style={{ marginRight: '3rem' }}>
                  <span style={{ color: item.includes('+') ? '#6FCF97' : '#EB5757' }}>
                    {item.includes('+') ? '\u25B2' : '\u25BC'}
                  </span>{' '}
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 4rem', position: 'relative', zIndex: 3, width: '100%' }}>

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

            <div className="fade-up fade-up-4" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href="/free-webinar" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Register for Free Webinar
              </a>
              <a href="#about" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Meet the Coaches
              </a>
            </div>
          </div>

          {/* Right: candlestick chart visual */}
          <div className="hero-chart fade-up fade-up-3" style={{
            background: 'rgba(17,17,17,0.8)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '1.5rem',
            position: 'relative',
          }}>
            {/* Chart header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <div className="font-display" style={{ fontSize: '1.1rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>EUR/USD</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>FOREIGN EXCHANGE</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="font-display" style={{ fontSize: '1.6rem', letterSpacing: '0.05em', color: '#6FCF97' }}>1.0847</div>
                <div style={{ fontSize: '0.65rem', color: '#6FCF97', letterSpacing: '0.08em' }}>{'\u25B2'} +0.0052 (0.48%)</div>
              </div>
            </div>

            {/* Chart area */}
            <div style={{ position: 'relative', height: '160px', display: 'flex', alignItems: 'flex-end', gap: '12px', padding: '0 4px' }}>
              {/* Horizontal grid lines */}
              {[0, 25, 50, 75, 100].map(function renderGridLine(p) {
                return (
                  <div key={p} style={{
                    position: 'absolute', left: 0, right: 0,
                    bottom: `${p}%`,
                    borderTop: '1px dashed rgba(212,175,55,0.08)',
                  }} />
                );
              })}

              {/* Candles */}
              {CANDLES.map(function renderCandle(c, i) {
                return (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', position: 'relative' }}>
                    <div style={{ width: '1px', height: `${c.wick_top}px`, background: c.bull ? 'rgba(111,207,151,0.6)' : 'rgba(235,87,87,0.6)' }} />
                    <div
                      className="candle-body"
                      style={{
                        width: '100%',
                        height: `${c.h}%`,
                        background: c.bull
                          ? 'linear-gradient(to top, #27AE60, #6FCF97)'
                          : 'linear-gradient(to top, #EB5757, #FF8A8A)',
                        opacity: 0.85,
                        animationDelay: `${i * 0.25}s`,
                        borderRadius: '2px 2px 0 0',
                        maxHeight: '140px',
                      }}
                    />
                    <div style={{ width: '1px', height: `${c.wick_bot}px`, background: c.bull ? 'rgba(111,207,151,0.6)' : 'rgba(235,87,87,0.6)' }} />
                  </div>
                );
              })}
            </div>

            {/* Time labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
              {TIME_LABELS.map(function renderTimeLabel(t) {
                return (
                  <span key={t} style={{ fontSize: '0.55rem', color: 'rgba(138,128,112,0.5)', letterSpacing: '0.05em' }}>{t}</span>
                );
              })}
            </div>

            {/* Live badge */}
            <div style={{
              position: 'absolute', top: '1rem', right: '1rem',
              display: 'flex', alignItems: 'center', gap: '5px',
              background: 'rgba(111,207,151,0.1)', border: '1px solid rgba(111,207,151,0.25)',
              borderRadius: '2px', padding: '3px 8px',
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#6FCF97', animation: 'dotPulse 1.5s infinite' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: '#6FCF97', fontWeight: 600 }}>LIVE</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="fade-up fade-up-4" style={{ marginTop: '4rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
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

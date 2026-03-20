const DATES = [
  { date: "Jan 21", day: "Wed", time: "12pm – 3pm", spots: "12 spots left" },
  { date: "Jan 24", day: "Sat", time: "12pm – 3pm", spots: "8 spots left" },
  { date: "Jan 28", day: "Wed", time: "1pm – 4pm", spots: "15 spots left" },
  { date: "Jan 30", day: "Fri", time: "1pm – 4pm", spots: "20 spots left" },
  { date: "Feb 1",  day: "Sun", time: "1pm – 4pm", spots: "18 spots left" },
  { date: "Feb 4",  day: "Wed", time: "1pm – 4pm", spots: "14 spots left" },
];

export default function WebinarDates() {
  return (
    <section style={{ background: '#0A0A0A', padding: 'clamp(4rem,8vw,7rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div className="section-num" style={{ position: 'absolute', bottom: '-2rem', right: '-1rem', opacity: 0.2, fontSize: 'clamp(6rem,16vw,14rem)' }}>03</div>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="dates-layout">

          {/* Header col */}
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow__label">Choose a Date</span>
              <div className="section-eyebrow__rule" />
            </div>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
              Free Introductory<br />Webinar<br /><span className="text-gradient-gold">For Beginners</span>
            </h2>
            <div className="gold-rule" style={{ maxWidth: '120px', marginBottom: '1.5rem' }} />
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '300px' }}>
              Select one preferred date and time below. All sessions are hosted live online — 3 hours, completely free.
            </p>
          </div>

          {/* Dates col */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(212,175,55,0.08)', marginBottom: '2rem' }}>
              {DATES.map((d, i) => (
                <div key={i} className="hover-row" style={{
                  background: 'var(--surface)',
                  display: 'grid', gridTemplateColumns: '80px 1fr auto',
                  gap: '1.5rem', alignItems: 'center',
                  padding: '1.25rem 1.5rem', cursor: 'pointer',
                }}>
                  {/* Date block */}
                  <div style={{ textAlign: 'center', borderRight: '1px solid rgba(212,175,55,0.1)', paddingRight: '1.5rem' }}>
                    <div className="font-display" style={{ fontSize: '1.6rem', color: 'var(--gold)', letterSpacing: '0.02em', lineHeight: 1 }}>{d.date}</div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '3px' }}>{d.day}</div>
                  </div>

                  {/* Time + spots */}
                  <div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 400 }}>{d.time}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.08em', marginTop: '2px', opacity: 0.75 }}>{d.spots}</div>
                  </div>

                  {/* Radio */}
                  <div style={{ width: '20px', height: '20px', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '50%', flexShrink: 0 }} />
                </div>
              ))}
            </div>

            <button className="btn-gold">Reserve My Spot →</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .dates-layout { grid-template-columns: 1fr 1.5fr !important; }
        }
      `}</style>
    </section>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import WebinarDates from "../components/WebinarDates";
import Link from "next/link";

const BENEFITS = [
  { num: '01', title: 'Live Expert Coaching', desc: 'Learn directly from Coach Ferdie and Coach Alyanna — 35 years of combined forex expertise distilled into 3 focused hours.' },
  { num: '02', title: 'Zero Prior Experience Required', desc: 'This webinar is engineered for absolute beginners. We strip away jargon and build your foundation from the ground up.' },
  { num: '03', title: 'Real Market Analysis', desc: 'Watch live chart readings, pattern identification, and entry/exit strategy demos on real market data.' },
  { num: '04', title: 'Risk Management Framework', desc: 'The #1 skill that separates profitable traders. We teach our proprietary 3-step framework every student applies.' },
];

export default function FreeWebinar() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--obsidian)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--obsidian)',
        padding: 'clamp(6rem, 12vw, 10rem) 0 clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid rgba(212,175,55,0.08)',
      }}>
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.04) 1px,transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        {/* Glow left */}
        <div style={{ position: 'absolute', top: '15%', left: '-10%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.07) 0%,transparent 65%)', filter: 'blur(60px)', zIndex: 0 }} />
        {/* Glow right */}
        <div style={{ position: 'absolute', bottom: '0', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.05) 0%,transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
        {/* Ghost letters */}
        <div className="section-num" style={{ position: 'absolute', bottom: '-3rem', right: '-1rem', zIndex: 0, opacity: 0.3, fontSize: 'clamp(8rem,22vw,20rem)' }}>FW</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'flex-end' }} className="fw-hero-grid">
            {/* Left: Headline */}
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>
                <span className="section-eyebrow__label">Free 3-Hour Webinar</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h1 className="font-display fade-up fade-up-1" style={{
                fontSize: 'clamp(3.5rem,10vw,8.5rem)', lineHeight: 0.92,
                letterSpacing: '0.02em', color: 'var(--text-primary)', margin: 0,
              }}>
                Forex Trading<br />Courses<br /><span className="text-shimmer">With Born2WinPh</span>
              </h1>
            </div>

            {/* Right: Description + stats */}
            <div className="fade-up fade-up-2">
              <p style={{ fontSize: '1rem', lineHeight: 1.85, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '400px', marginBottom: '2.5rem' }}>
                Begin your forex trading adventure with us. We provide the tools, insights, and guidance you need to navigate the dynamic world of forex trading — building a solid foundation for lasting success.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {[
                  { n: '3 hrs', l: 'Session Length' },
                  { n: 'FREE', l: 'No Cost to Attend' },
                  { n: 'LIVE', l: 'Interactive Format' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display" style={{ fontSize: '2rem', color: 'var(--gold)', letterSpacing: '0.04em' }}>{s.n}</div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '2px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="#dates" className="btn-gold" style={{ display: 'inline-block' }}>
                Reserve My Spot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(4rem,8vw,7rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-num" style={{ position: 'absolute', top: '-2rem', right: '-1rem', opacity: 0.25, fontSize: 'clamp(6rem,16vw,14rem)' }}>01</div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="learn-grid">
            {/* Label col */}
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow__label">What You&apos;ll Learn</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
                Built For<br /><span className="text-gradient-gold">Complete Beginners</span>
              </h2>
              <div className="gold-rule" style={{ maxWidth: '120px' }} />
              <p style={{ fontSize: '0.9rem', lineHeight: 1.85, fontWeight: 300, color: 'var(--text-secondary)', marginTop: '1.5rem', maxWidth: '360px' }}>
                No trading background required. This 3-hour session is the fastest path from zero knowledge to confident market reading.
              </p>
            </div>

            {/* Benefits col */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="hover-row" style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr',
                  gap: '1.5rem', padding: '2rem 0',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  alignItems: 'flex-start',
                }}>
                  <span className="font-display" style={{ fontSize: '2rem', color: 'transparent', WebkitTextStroke: '1px rgba(212,175,55,0.3)', lineHeight: 1, paddingTop: '3px' }}>{b.num}</span>
                  <div>
                    <h3 className="font-display" style={{ fontSize: '1.4rem', letterSpacing: '0.04em', color: 'var(--text-primary)', margin: 0, marginBottom: '0.5rem' }}>{b.title}</h3>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--text-secondary)', margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── DATES ── */}
      <div id="dates">
        <WebinarDates />
      </div>

      {/* ── 5-STAR RATING ── */}
      <section style={{ background: 'var(--obsidian)', padding: 'clamp(4rem,8vw,7rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-num" style={{ position: 'absolute', bottom: '-2rem', left: '-1rem', opacity: 0.2, fontSize: 'clamp(6rem,16vw,14rem)' }}>02</div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="rating-grid">
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow__label">Student Reviews</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h2 className="section-heading">
                The Numbers<br /><span className="text-gradient-gold">Speak For Themselves</span>
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '1px', background: 'rgba(212,175,55,0.08)', flexWrap: 'wrap' }}>
              {[
                { n: '★★★★★', l: 'Overall Rating', sub: 'Facebook & Google Reviews' },
                { n: '300K+', l: 'Students Trained', sub: 'Across Asia and beyond' },
                { n: '4 yrs', l: 'Of Excellence', sub: 'Helping Filipinos win' },
              ].map((s, i) => (
                <div key={i} className="hover-card" style={{ background: 'var(--obsidian)', padding: '2.5rem', flex: '1', minWidth: '180px' }}>
                  <div className="font-display" style={{ fontSize: '2.5rem', color: 'var(--gold)', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '0.75rem' }}>{s.n}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '4px' }}>{s.l}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      <Footer />

      <style>{`
        @media (min-width: 900px) {
          .fw-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .learn-grid   { grid-template-columns: 1fr 1.5fr !important; }
          .rating-grid  { grid-template-columns: 1fr 2fr !important; }
        }
      `}</style>
    </main>
  );
}

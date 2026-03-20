import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedList from "../components/FeaturedList";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Link from "next/link";

const OUTLETS = [
  { name: 'ABS-CBN News', type: 'Television' },
  { name: 'GMA News', type: 'Television' },
  { name: 'Philippine Star', type: 'Print' },
  { name: 'Inquirer.net', type: 'Digital' },
  { name: 'Business Mirror', type: 'Print' },
  { name: 'Manila Times', type: 'Print' },
  { name: 'DWIZ 882', type: 'Radio' },
  { name: 'Radyo Pilipinas', type: 'Radio' },
  { name: 'Times Square NYC', type: 'Billboard' },
];

export default function FeaturesPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--obsidian)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--obsidian)',
        padding: 'clamp(6rem,12vw,10rem) 0 clamp(4rem,8vw,7rem)',
        borderBottom: '1px solid rgba(212,175,55,0.08)',
      }}>
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.04) 1px,transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        {/* Glows */}
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.07) 0%,transparent 65%)', filter: 'blur(60px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.04) 0%,transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
        {/* Ghost letters */}
        <div className="section-num" style={{ position: 'absolute', bottom: '-3rem', left: '-1rem', zIndex: 0, opacity: 0.3, fontSize: 'clamp(8rem,22vw,20rem)' }}>PR</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'flex-end' }} className="pr-hero-grid">
            {/* Left: headline */}
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>
                <span className="section-eyebrow__label">Media Features</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h1 className="font-display fade-up fade-up-1" style={{
                fontSize: 'clamp(3.5rem,10vw,8.5rem)', lineHeight: 0.92,
                letterSpacing: '0.02em', color: 'var(--text-primary)', margin: 0,
              }}>
                Features,<br />Interviews<br />&amp; <span className="text-shimmer">Press</span>
              </h1>
            </div>

            {/* Right: description */}
            <div className="fade-up fade-up-2">
              <p style={{ fontSize: '1rem', lineHeight: 1.85, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '420px', marginBottom: '2.5rem' }}>
                Coach Ferdie and Coach Alyanna have been featured in major television broadcasts, national newspapers, international billboards, and digital outlets — cementing Born2WinPh as the most trusted forex education provider in Asia.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[
                  { n: '30+', l: 'Press Features' },
                  { n: '#1', l: 'In Asia' },
                  { n: 'NYC', l: 'Times Square Billboard' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display" style={{ fontSize: '2rem', color: 'var(--gold)', letterSpacing: '0.04em' }}>{s.n}</div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '2px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED OUTLETS MARQUEE ── */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(3rem,6vw,5rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-eyebrow">
              <span className="section-eyebrow__label">As Seen In</span>
              <div className="section-eyebrow__rule" />
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', background: 'rgba(212,175,55,0.06)' }}>
            {OUTLETS.map((o, i) => (
              <div key={i} className="hover-card" style={{
                background: '#0A0A0A', padding: '1.25rem 1.75rem',
                display: 'flex', flexDirection: 'column', gap: '4px', flex: '1', minWidth: '130px',
              }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{o.type}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{o.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ background: 'linear-gradient(135deg,var(--gold) 0%,var(--gold-dark) 100%)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="font-display" style={{ position: 'absolute', right: '-1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '7rem', color: 'rgba(0,0,0,0.07)', userSelect: 'none', lineHeight: 1 }}>FREE</div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 1 }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.2rem,3vw,2rem)', letterSpacing: '0.04em', color: '#000', margin: 0 }}>
            Attend Our Free 3-Hour Online Webinar
          </h2>
          <Link href="/free-webinar" style={{ display: 'inline-block', background: '#000', color: 'var(--gold)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.85rem 2rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Register Now →
          </Link>
        </div>
      </section>

      <FeaturedList />
      <Testimonials />
      <FAQ />
      <Footer />

      <style>{`
        @media (min-width: 900px) {
          .pr-hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import SectionHeader from "../components/SectionHeader";

const INCLUSIONS = [
  { title: 'Full Curriculum Access', desc: 'Every module, every lesson — the same world-class content our 300K+ Filipino students receive, delivered entirely in English.' },
  { title: 'Live Webinar Sessions', desc: 'Join our scheduled online coaching sessions with Coach Ferdie and Coach Alyanna, broadcast live and available for replay.' },
  { title: 'Pattern Recognition Mastery', desc: 'Learn to identify high-probability chart patterns using the same scientific methodology Coach Ferdie has refined over 19 years.' },
  { title: 'Risk Management Framework', desc: 'Our proprietary 3-step framework that separates profitable traders from the rest — the cornerstone of every Born2WinPh student\'s success.' },
  { title: 'Community Access', desc: 'Join a global network of Born2WinPh graduates. Share trades, insights, and milestones with students from across the world.' },
  { title: 'Lifetime Material Access', desc: 'One-time payment, lifetime access. Course materials are updated regularly so your knowledge stays current with the market.' },
];

export default function GlobalStudentsPage() {
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
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.07) 0%,transparent 65%)', filter: 'blur(60px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.04) 0%,transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
        {/* Ghost letters */}
        <div className="section-num" style={{ position: 'absolute', bottom: '-3rem', right: '-1rem', zIndex: 0, opacity: 0.3, fontSize: 'clamp(8rem,22vw,20rem)' }}>GL</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'flex-end' }} className="gl-hero-grid">
            {/* Left: Headline */}
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>
                <span className="section-eyebrow__label">Global Students</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h1 className="font-display fade-up fade-up-1" style={{
                fontSize: 'clamp(3.5rem,10vw,8.5rem)', lineHeight: 0.92,
                letterSpacing: '0.02em', color: 'var(--text-primary)', margin: 0,
              }}>
                Forex Course<br />For Foreign<br /><span className="text-shimmer">Students</span>
              </h1>
            </div>

            {/* Right: description + stats */}
            <div className="fade-up fade-up-2">
              <p style={{ fontSize: '1rem', lineHeight: 1.85, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '400px', marginBottom: '2.5rem' }}>
                Born2WinPh&apos;s world-class forex trading curriculum, now available in English for students worldwide. Begin your journey toward financial mastery — wherever you are.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {[
                  { n: '$100', l: 'One-time Fee' },
                  { n: 'EN', l: 'Full English' },
                  { n: '∞', l: 'Lifetime Access' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display" style={{ fontSize: '2rem', color: 'var(--gold)', letterSpacing: '0.04em' }}>{s.n}</div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '2px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <button className="btn-gold">Enroll Now →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE INCLUSIONS ── */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(4rem,8vw,7rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-num" style={{ position: 'absolute', top: '-2rem', right: '-1rem', opacity: 0.25, fontSize: 'clamp(6rem,16vw,14rem)' }}>01</div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">
          <div style={{ marginBottom: '3.5rem' }}>
            <SectionHeader eyebrow="What&apos;s Included">
              Everything You Need<br /><span className="text-gradient-gold">To Succeed</span>
            </SectionHeader>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'rgba(212,175,55,0.06)' }} className="inclusions-grid">
            {INCLUSIONS.map((item, i) => (
              <div key={i} className="hover-card" style={{ background: '#0A0A0A', padding: '2rem 2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <span className="font-display" style={{ fontSize: '2.5rem', color: 'transparent', WebkitTextStroke: '1px rgba(212,175,55,0.25)', lineHeight: 1, flexShrink: 0, paddingTop: '2px' }}>0{i + 1}</span>
                  <div>
                    <h3 className="font-display" style={{ fontSize: '1.3rem', letterSpacing: '0.04em', color: 'var(--text-primary)', margin: 0, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLLMENT ── */}
      <section style={{ background: 'var(--obsidian)', padding: 'clamp(4rem,8vw,7rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-num" style={{ position: 'absolute', bottom: '-2rem', left: '-1rem', opacity: 0.2, fontSize: 'clamp(6rem,16vw,14rem)' }}>02</div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="enroll-grid">

            <div>
              <SectionHeader eyebrow="English-speaking Students Worldwide">
                Special Course<br /><span className="text-gradient-gold">Made For You</span>
              </SectionHeader>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, fontWeight: 300, color: 'var(--text-secondary)', marginTop: '1.5rem', maxWidth: '480px' }}>
                For English-speaking Born2WinPh students all over the world — here&apos;s a special course made just for you. Get full access to our world-class curriculum and coaching.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '360px' }}>
                {['Live webinar sessions with top coaches', 'Full English-language curriculum', 'Community of global traders', 'One-time payment, lifetime access'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div style={{ background: 'var(--surface)', border: '1px solid rgba(212,175,55,0.2)', padding: '3rem', position: 'relative' }}>
              {/* Corner accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '70px', height: '70px', borderBottom: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '70px', height: '70px', borderTop: '1px solid var(--border)', borderRight: '1px solid var(--border)' }} />

              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Course Access</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span className="font-display" style={{ fontSize: '5rem', letterSpacing: '0.02em', color: 'var(--text-primary)', lineHeight: 1 }}>$100</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>One-time payment · Lifetime access</div>

              <div className="gold-rule" style={{ marginBottom: '2rem' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>New Student?</div>
                <button className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>Make a Payment →</button>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Already a Student?</div>
                <button className="btn-ghost" style={{ width: '100%', textAlign: 'center' }}>Login Here</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'var(--obsidian)', paddingTop: 'clamp(4rem,8vw,7rem)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 3rem' }}>
          <SectionHeader eyebrow="Global Graduates">
            Hear From Our<br /><span className="text-gradient-gold">Previous Graduates</span>
          </SectionHeader>
        </div>
        <Testimonials />
      </section>

      <Footer />

      <style>{`
        @media (min-width: 900px) {
          .gl-hero-grid    { grid-template-columns: 1fr 1fr !important; }
          .enroll-grid     { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 640px) {
          .inclusions-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .inclusions-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}

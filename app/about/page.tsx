import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import SectionHeader from "../components/SectionHeader";

const PILLARS = [
  {
    title: 'Empowering Interactive Webinars',
    desc: 'Unlock the world of Forex trading with our engaging webinars. Led by experienced traders, these sessions are crafted to make complex concepts clear and accessible.',
  },
  {
    title: 'Comprehensive Step-by-Step Tutorials',
    desc: 'Begin your trading journey with our user-friendly tutorials. They guide you through Forex trading basics, from understanding currency pairs to navigating platforms.',
  },
  {
    title: 'Guides for Informed Trading',
    desc: 'Enhance your trading knowledge with our expert guides. Focused on essential strategies and risk management, these resources lay a solid foundation for success.',
  },
];

const FOUNDERS = [
  {
    initials: 'FP',
    name: 'Ferdie Pabalan',
    role: 'Chairman & Founder',
    exp: '19',
    unit: 'Years',
    cert: 'Licensed Forex Authority',
    bio: 'Coach Ferdie impresses with a 19-year tenure in public speaking, training, and financial services. A licensed authority in Forex trading, he employs a scientific methodology to market analysis — advocating for meticulous observation, pattern discernment, hypothesis validation, and strategic risk management.',
  },
  {
    initials: 'AP',
    name: 'Alyanna Pabalan',
    role: 'CEO & Co-founder',
    exp: '16',
    unit: 'Years',
    cert: 'Executive Coach · NLP Master Practitioner',
    bio: 'CEO & Co-founder with 16-year experience, she is a seasoned business owner and financial literacy coach. Coach Alyanna holds certifications as an Executive Coach, Master in Business Management, Life Coach, and Master Practitioner in Neuro Linguistic Programming.',
  },
];

export default function AboutPage() {
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
        {/* Glow */}
        <div style={{ position:'absolute', top:'10%', right:'-5%', width:'700px', height:'700px', borderRadius:'50%', background:'radial-gradient(circle,rgba(212,175,55,0.07) 0%,transparent 65%)', filter:'blur(60px)', zIndex:0 }} />
        {/* Ghost letters */}
        <div className="section-num" style={{ position:'absolute', bottom:'-3rem', left:'-1rem', zIndex:0, opacity:0.35, fontSize:'clamp(8rem,22vw,20rem)' }}>AB</div>

        <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 2rem', position:'relative', zIndex:1 }}>
          {/* Split: headline left, stat right */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'3rem', alignItems:'flex-end' }} className="about-hero-grid">
            <div>
              <div className="section-eyebrow" style={{ marginBottom:'1.5rem' }}>
                <span className="section-eyebrow__label">About Born2WinPh</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h1 className="font-display fade-up fade-up-1" style={{
                fontSize:'clamp(3.5rem,10vw,8.5rem)', lineHeight:0.92,
                letterSpacing:'0.02em', color:'var(--text-primary)', margin:0,
              }}>
                Your Forex<br />Trading<br /><span className="text-shimmer">Education</span><br />Provider
              </h1>
            </div>

            {/* Right: intro + quick stats */}
            <div className="fade-up fade-up-2">
              <p style={{ fontSize:'1rem', lineHeight:1.85, fontWeight:300, color:'var(--text-secondary)', maxWidth:'420px', marginBottom:'2.5rem' }}>
                BORN2WINPH is your dedicated forex trading education provider. We simplify complex trading concepts and cultivate financial literacy — guiding you toward becoming a successful and profitable forex trader.
              </p>
              <div style={{ display:'flex', gap:'2.5rem', flexWrap:'wrap' }}>
                {[
                  { n:'300K+', l:'Students Trained' },
                  { n:'#1', l:'In Asia' },
                  { n:'35 yrs', l:'Combined Expertise' },
                ].map((s,i) => (
                  <div key={i}>
                    <div className="font-display" style={{ fontSize:'2rem', color:'var(--gold)', letterSpacing:'0.04em' }}>{s.n}</div>
                    <div style={{ fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-secondary)', marginTop:'2px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section style={{ background:'#0A0A0A', padding:'clamp(4rem,8vw,7rem) 0', borderBottom:'1px solid rgba(212,175,55,0.08)', position:'relative', overflow:'hidden' }}>
        <div className="section-num" style={{ position:'absolute', top:'-2rem', right:'-1rem', opacity:0.25, fontSize:'clamp(6rem,16vw,14rem)' }}>01</div>
        <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 2rem', position:'relative', zIndex:1 }}>
          <div style={{ marginBottom:'3.5rem' }}>
            <SectionHeader eyebrow="The Founders">
              Resilience &amp; Leadership<br /><span className="text-gradient-gold">In Forex Trading</span>
            </SectionHeader>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
            {FOUNDERS.map((f, i) => (
              <div key={i} style={{
                display:'grid', gridTemplateColumns:'1fr',
                borderTop:'1px solid rgba(255,255,255,0.06)',
                padding:'2.5rem 0',
              }} className="founder-row">
                <div style={{ display:'flex', gap:'2.5rem', alignItems:'flex-start', flexWrap:'wrap' }}>
                  {/* Large initials block */}
                  <div style={{
                    width:'100px', height:'100px', flexShrink:0,
                    background:'linear-gradient(135deg,var(--surface-2),#0A0A0A)',
                    border:'1px solid rgba(212,175,55,0.25)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    position:'relative',
                  }}>
                    <span className="font-display" style={{ fontSize:'2.5rem', color:'var(--gold)', letterSpacing:'0.04em' }}>{f.initials}</span>
                    <div style={{ position:'absolute', bottom:'-1px', right:'-1px', width:'12px', height:'12px', background:'var(--gold)' }} />
                    {/* Year badge */}
                    <div style={{
                      position:'absolute', top:'-12px', left:'-12px',
                      background:'var(--gold)', color:'#000',
                      fontFamily:"'Bebas Neue',sans-serif", fontSize:'0.85rem',
                      letterSpacing:'0.06em', padding:'2px 8px',
                    }}>{f.exp}Y</div>
                  </div>

                  <div style={{ flex:1, minWidth:'240px' }}>
                    <div style={{ fontSize:'0.6rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'4px' }}>{f.cert}</div>
                    <h3 className="font-display" style={{ fontSize:'2.5rem', letterSpacing:'0.04em', color:'var(--text-primary)', margin:0, lineHeight:1 }}>{f.name}</h3>
                    <div className="font-serif" style={{ fontStyle:'italic', fontSize:'0.95rem', color:'var(--text-secondary)', marginTop:'4px' }}>{f.role}, Born2WinPh</div>
                    <p style={{ fontSize:'0.9rem', lineHeight:1.85, fontWeight:300, color:'var(--text-secondary)', marginTop:'1.25rem', maxWidth:'580px' }}>{f.bio}</p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }} />
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── asymmetric split */}
      <section style={{ background:'var(--obsidian)', padding:'clamp(4rem,8vw,7rem) 0', borderBottom:'1px solid rgba(212,175,55,0.08)', position:'relative', overflow:'hidden' }}>
        <div className="section-num" style={{ position:'absolute', bottom:'-2rem', left:'-1rem', opacity:0.2, fontSize:'clamp(6rem,16vw,14rem)' }}>02</div>
        <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 2rem', position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'4rem', alignItems:'start' }} className="mv-grid">
            {/* Label col */}
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow__label">Our Purpose</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h2 className="section-heading" style={{ marginBottom:'1.5rem' }}>
                Mission &amp;<br /><span className="text-gradient-gold">Vision</span>
              </h2>
              <div className="gold-rule" style={{ maxWidth:'120px' }} />
            </div>

            {/* Cards col */}
            <div style={{ display:'flex', flexDirection:'column', gap:'1px', background:'rgba(212,175,55,0.08)' }}>
              {[
                {
                  label:'Our Mission',
                  num:'M',
                  text:'We aim to provide comprehensive, accessible Forex trading education. We strive to empower individuals, inspiring them to harness the potential of the Forex market for financial growth.',
                },
                {
                  label:'Our Vision',
                  num:'V',
                  text:'Our vision is to become a globally recognized leader in Forex trading education — inspiring and enabling individuals worldwide to achieve financial independence through informed, strategic Forex trading decisions.',
                },
              ].map((mv,i) => (
                <div key={i} className="hover-card" style={{
                  background:'var(--obsidian)', padding:'2.5rem',
                  display:'flex', gap:'2rem', alignItems:'flex-start',
                }}>
                  <div className="font-display" style={{
                    fontSize:'4rem', lineHeight:1,
                    color:'transparent',
                    WebkitTextStroke:'1px rgba(212,175,55,0.2)',
                    flexShrink:0,
                  }}>{mv.num}</div>
                  <div>
                    <div style={{ fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'0.75rem', fontWeight:600 }}>{mv.label}</div>
                    <p style={{ fontSize:'0.95rem', lineHeight:1.85, fontWeight:300, color:'var(--text-secondary)', margin:0 }}>{mv.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── numbered editorial */}
      <section style={{ background:'#0A0A0A', padding:'clamp(4rem,8vw,7rem) 0', borderBottom:'1px solid rgba(212,175,55,0.08)', position:'relative', overflow:'hidden' }}>
        <div className="section-num" style={{ position:'absolute', top:'-2rem', right:'-1rem', opacity:0.25, fontSize:'clamp(6rem,16vw,14rem)' }}>03</div>
        <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 2rem', position:'relative', zIndex:1 }}>
          <div style={{ marginBottom:'3.5rem' }}>
            <SectionHeader eyebrow="Why Choose Us">
              The Key to Your<br /><span className="text-gradient-gold">Trading Success</span>
            </SectionHeader>
          </div>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {PILLARS.map((p, i) => (
              <div key={i} className="hover-row" style={{
                display:'grid', gridTemplateColumns:'80px 1fr',
                gap:'2rem', padding:'2rem 0',
                borderTop:'1px solid rgba(255,255,255,0.05)',
                alignItems:'flex-start',
              }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'10px', paddingTop:'4px' }}>
                  <span className="font-display" style={{ fontSize:'2.5rem', color:'transparent', WebkitTextStroke:'1px rgba(212,175,55,0.3)', lineHeight:1 }}>0{i+1}</span>
                  <div style={{ width:'1px', flex:1, background:'rgba(212,175,55,0.1)', minHeight:'20px' }} />
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize:'1.6rem', letterSpacing:'0.04em', color:'var(--text-primary)', margin:0, marginBottom:'0.5rem' }}>{p.title}</h3>
                  <p style={{ fontSize:'0.9rem', lineHeight:1.8, fontWeight:300, color:'var(--text-secondary)', margin:0, maxWidth:'620px' }}>{p.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }} />
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />

      <style>{`
        @media (min-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .mv-grid { grid-template-columns: 1fr 1.6fr !important; }
        }
      `}</style>
    </main>
  );
}

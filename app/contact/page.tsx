import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CONTACT_INFO = [
  {
    label: 'Contact Number',
    value: '+639171658844',
    hint: 'Call or WhatsApp',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="var(--gold)" width={20} height={20} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Business Email',
    value: 'info@born2win.ph',
    hint: 'We respond within 24 hours',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="var(--gold)" width={20} height={20} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Philippines',
    hint: 'Serving students worldwide',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="var(--gold)" width={20} height={20} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
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
        <div style={{ position: 'absolute', top: '10%', right: '0', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,175,55,0.06) 0%,transparent 65%)', filter: 'blur(60px)', zIndex: 0 }} />
        {/* Ghost letters */}
        <div className="section-num" style={{ position: 'absolute', bottom: '-3rem', right: '-1rem', zIndex: 0, opacity: 0.3, fontSize: 'clamp(8rem,22vw,20rem)' }}>CT</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'flex-end' }} className="ct-hero-grid">
            {/* Left: Headline */}
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>
                <span className="section-eyebrow__label">Get In Touch</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h1 className="font-display fade-up fade-up-1" style={{
                fontSize: 'clamp(3.5rem,10vw,8.5rem)', lineHeight: 0.92,
                letterSpacing: '0.02em', color: 'var(--text-primary)', margin: 0,
              }}>
                Contact<br /><span className="text-shimmer">Born2WinPh</span>
              </h1>
            </div>

            {/* Right: blurb + quick contact */}
            <div className="fade-up fade-up-2">
              <p style={{ fontSize: '1rem', lineHeight: 1.85, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '420px', marginBottom: '2.5rem' }}>
                Have questions about our courses, webinars, or enrollment? Our team is ready to help you take the first step toward financial independence.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Phone', value: '+639171658844' },
                  { label: 'Email', value: 'info@born2win.ph' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', minWidth: '50px' }}>{c.label}</div>
                    <div style={{ width: '1px', height: '16px', background: 'rgba(212,175,55,0.25)' }} />
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 400 }}>{c.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section style={{ background: '#0A0A0A', padding: 'clamp(4rem,8vw,7rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-num" style={{ position: 'absolute', top: '-2rem', left: '-1rem', opacity: 0.2, fontSize: 'clamp(6rem,16vw,14rem)' }}>01</div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="ct-form-grid">

            {/* Form */}
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>
                <span className="section-eyebrow__label">Send a Message</span>
                <div className="section-eyebrow__rule" />
              </div>
              <h2 className="section-heading" style={{ marginBottom: '2rem' }}>
                We&apos;d Love to<br /><span className="text-gradient-gold">Hear From You</span>
              </h2>

              <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="form-row">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', autoComplete: 'email' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>{f.label}</label>
                      <input
                        type={f.type} id={f.id} name={f.id}
                        autoComplete={f.autoComplete} placeholder={f.placeholder}
                        className="ct-input"
                        style={{
                          display: 'block', width: '100%', background: 'var(--surface)',
                          border: '1px solid rgba(212,175,55,0.12)', padding: '0.9rem 1.1rem',
                          color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                          fontFamily: "'Sora', sans-serif", boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="phone" style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>Contact Number</label>
                  <input
                    type="tel" id="phone" name="phone"
                    autoComplete="tel" placeholder="Your contact number"
                    className="ct-input"
                    style={{
                      display: 'block', width: '100%', background: 'var(--surface)',
                      border: '1px solid rgba(212,175,55,0.12)', padding: '0.9rem 1.1rem',
                      color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                      fontFamily: "'Sora', sans-serif", boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell us how we can help you..."
                    className="ct-input"
                    style={{
                      display: 'block', width: '100%', background: 'var(--surface)',
                      border: '1px solid rgba(212,175,55,0.12)', padding: '0.9rem 1.1rem',
                      color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                      fontFamily: "'Sora', sans-serif", resize: 'vertical', boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <button type="submit" className="btn-gold">Send Message →</button>
                </div>
              </form>
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(212,175,55,0.06)' }}>
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="hover-card" style={{
                  background: '#0A0A0A', padding: '2rem 2.5rem',
                  display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '44px', height: '44px', flexShrink: 0,
                    border: '1px solid rgba(212,175,55,0.2)',
                    background: 'rgba(212,175,55,0.04)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '4px' }}>{c.label}</div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '3px' }}>{c.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{c.hint}</div>
                  </div>
                </div>
              ))}

              {/* SEC */}
              <div className="hover-card" style={{
                background: '#0A0A0A', padding: '2rem 2.5rem',
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  border: '1px solid rgba(212,175,55,0.2)',
                  background: 'rgba(212,175,55,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="var(--gold)" width={20} height={20} strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '4px' }}>SEC Registration</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontFamily: 'monospace', letterSpacing: '0.05em', marginBottom: '3px' }}>2024020136291-03</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Registered & regulated in the Philippines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (min-width: 900px) {
          .ct-hero-grid  { grid-template-columns: 1fr 1fr !important; }
          .ct-form-grid  { grid-template-columns: 1.2fr 1fr !important; }
          .form-row      { grid-template-columns: 1fr 1fr !important; }
        }
        .ct-input::placeholder { color: var(--text-secondary); opacity: 0.5; }
        .ct-input:focus { border-color: rgba(212,175,55,0.4) !important; }
      `}</style>
    </main>
  );
}

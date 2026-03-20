import SectionHeader from './SectionHeader';

const COACHES = [
  {
    initials: 'FP',
    name: 'Coach Ferdie',
    role: 'Head Trader & Lead Mentor',
    experience: '19 Years Experience',
    bio: 'Coach Ferdie has trained more than 300,000 people worldwide. His proven track record has been backed up by thousands of profitable traders globally under his guidance. Coach Ferdie is a living proof that financial and time freedom can be achieved through smart work.',
    stats: [
      { label: 'Students Trained', val: '300K+' },
      { label: 'Years Active', val: '19' },
    ],
  },
  {
    initials: 'AP',
    name: 'Coach Alyanna',
    role: 'Financial Coach & Advocate',
    experience: '16 Years Experience',
    bio: 'Coach Alyanna signifies women empowerment through financial literacy and advocacy. From an entry-level employee to a successful trader, business owner and financial coach, she exemplifies relentless ambition and strategic financial acumen.',
    stats: [
      { label: 'Years Active', val: '16' },
      { label: 'Certified Coach', val: '\u2713' },
    ],
  },
];

export default function Coaches() {
  return (
    <section id="about" style={{
      background: 'var(--obsidian)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      borderTop: '1px solid rgba(212,175,55,0.08)',
    }}>
      {/* Section number */}
      <div className="section-num" style={{
        position: 'absolute', top: '-2rem', left: '-1rem', zIndex: 0, opacity: 0.5,
      }}>03</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '560px' }}>
          <SectionHeader eyebrow="About Born2WinPh">
            The Coaches<br />Behind <span className="text-gradient-gold">Your Success</span>
          </SectionHeader>
          <p style={{
            fontSize: '0.95rem', lineHeight: 1.8,
            fontWeight: 300, color: 'var(--text-secondary)', marginTop: '1.5rem',
          }}>
            Born2WinPh is the number 1 forex trading education in Asia. We specialize in teaching forex trading to total beginners, well-known in the industry for making forex very easy and simple to understand.
          </p>
        </div>

        {/* Coach cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="coaches-grid">
          {COACHES.map(function renderCoach(c, i) {
            return (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid rgba(212,175,55,0.12)',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Corner accent */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '80px', height: '80px',
                  borderBottom: '1px solid var(--border)',
                  borderLeft: '1px solid var(--border)',
                }} />

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '90px', height: '90px', flexShrink: 0,
                    background: 'linear-gradient(135deg, var(--surface-2), #0A0A0A)',
                    border: '1px solid rgba(212,175,55,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <span className="font-display" style={{
                      fontSize: '2rem', letterSpacing: '0.05em', color: 'var(--gold)',
                    }}>{c.initials}</span>
                    {/* Gold corner pip */}
                    <div style={{
                      position: 'absolute', bottom: '-1px', right: '-1px',
                      width: '10px', height: '10px',
                      background: 'var(--gold)',
                    }} />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <div style={{
                      fontSize: '0.6rem', letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px',
                    }}>{c.experience}</div>
                    <h3 className="font-display" style={{
                      fontSize: '2.2rem',
                      letterSpacing: '0.05em', color: 'var(--text-primary)', margin: 0, lineHeight: 1,
                    }}>{c.name}</h3>
                    <div className="font-serif" style={{
                      fontStyle: 'italic',
                      fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px',
                    }}>{c.role}</div>

                    <p style={{
                      fontSize: '0.9rem', lineHeight: 1.8,
                      fontWeight: 300, color: 'var(--text-secondary)', marginTop: '1.25rem',
                    }}>{c.bio}</p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      {c.stats.map(function renderStat(s, j) {
                        return (
                          <div key={j}>
                            <div className="font-display" style={{ fontSize: '1.6rem', letterSpacing: '0.05em', color: 'var(--gold)' }}>{s.val}</div>
                            <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{s.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.5rem 2rem',
          background: 'rgba(212,175,55,0.03)',
          borderLeft: '2px solid rgba(212,175,55,0.4)',
        }}>
          <p className="font-serif" style={{
            fontStyle: 'italic',
            fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0,
          }}>
            &ldquo;Both founders are certified in their respective fields, passionately dedicated to teaching others the art of financial control and prosperity. Their combined expertise offers a powerful blend of practical trading strategies and life-changing financial guidance.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

import SectionHeader from './SectionHeader';

const FEATURES = [
  {
    num: '01',
    name: 'Global Financial Opportunities',
    description: "Explore the vast potential of the world's largest financial market. Learn to skillfully navigate currency exchanges for financial growth, guided by Asia's top trading experts.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--gold)" width={28} height={28}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Flexible Trading Schedule',
    description: "Embrace the convenience of 24/5 trading. Whether you're an early riser or a night owl, Forex fits seamlessly into your lifestyle, offering trading opportunities at your convenience.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--gold)" width={28} height={28}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Beginner-Friendly Learning',
    description: "Start your Forex journey confidently with our easy-to-follow courses. Designed for beginners, these programs build a strong foundation in market analysis and risk management.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--gold)" width={28} height={28}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Comprehensive Market Education',
    description: "Dive deep into the intricacies of Forex markets. Our comprehensive educational resources cover everything from basic concepts to advanced trading techniques.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--gold)" width={28} height={28}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25V21" />
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Ongoing Support & Community',
    description: "Join a community of aspiring and experienced traders. Gain access to ongoing support, interactive webinars, and a network of peers to share insights and strategies.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--gold)" width={28} height={28}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.272m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" style={{
      background: '#0A0A0A',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      borderTop: '1px solid rgba(212,175,55,0.08)',
    }}>
      {/* Section number */}
      <div className="section-num" style={{
        position: 'absolute', bottom: '-2rem', right: '-1rem', zIndex: 0,
      }}>04</div>

      {/* Diagonal stripe */}
      <div className="stripe-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <SectionHeader eyebrow="Premium Features">
            Want to Start<br /><span className="text-gradient-gold">Forex Trading?</span>
          </SectionHeader>
          <p style={{
            fontSize: '0.9rem', lineHeight: 1.8,
            fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '300px', margin: 0,
          }}>
            Everything you need to begin your journey toward financial independence.
          </p>
        </div>

        {/* Feature list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {FEATURES.map(function renderFeature(f, i) {
            return (
              <div key={i}
                className="hover-row feature-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '2rem',
                  padding: '1.5rem 0',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  alignItems: 'flex-start',
                }}
              >
                {/* Number + icon */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingTop: '4px' }}>
                  <span className="font-display" style={{
                    fontSize: '2.5rem', letterSpacing: '0.05em',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(212,175,55,0.3)',
                    lineHeight: 1,
                  }}>{f.num}</span>
                  <div style={{
                    width: '42px', height: '42px',
                    border: '1px solid rgba(212,175,55,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(212,175,55,0.04)',
                  }}>
                    {f.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display" style={{
                    fontSize: '1.6rem', letterSpacing: '0.05em',
                    color: 'var(--text-primary)', margin: 0, marginBottom: '0.6rem',
                  }}>{f.name}</h3>
                  <p style={{
                    fontSize: '0.9rem', lineHeight: 1.8,
                    fontWeight: 300, color: 'var(--text-secondary)', margin: 0, maxWidth: '600px',
                  }}>{f.description}</p>
                </div>
              </div>
            );
          })}
          {/* Bottom rule */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
        </div>
      </div>
    </section>
  );
}

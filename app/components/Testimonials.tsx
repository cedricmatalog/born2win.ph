import SectionHeader from './SectionHeader';

const TESTIMONIALS = [
  {
    name: 'Anna Benjieline Puzon',
    quote: "B2W makes trading concepts easy to understand. They also don't just teach the concepts, they make sure you learn and absorb it. They are generous in giving guidance and they genuinely care for their students. Galing nila coach F and coach A!",
  },
  {
    name: 'Melanie Kathleen San Pablo-Alejandro',
    quote: "I immensely appreciate how Coach Ferdie, Coach Alyanna, and B2W staff assist me and try to simplify things for me. I feel the genuine support and commitment they have to teaching me the intricacies of currency trading. Thank you, Born2Win!",
  },
  {
    name: 'Edmilyn Palma',
    quote: "Coach Ferdie's style of teaching in this complex FOREX made simple and easy. He ensures his students understood every module. His strategies and techniques make me WIN against the market with accuracy of about 90 to 95% with proper risk management.",
  },
  {
    name: 'Mary Grace Sajol-Pascual',
    quote: "I've never understood forex trading until I saw this Born2win post, joined the program, got educated and most of all understanding it's not just all about strategies but discipline as well!",
  },
  {
    name: 'Nathalie',
    quote: "Highly recommended to those who want to learn Forex. Best coaches ever! They will guide and support you all the way. The moral support helps you as well not to lose hope in forex trading. Kudos to Born2Win!",
  },
  {
    name: 'John Nicolai Curioso',
    quote: "I really recommend B2WPh because the lessons and concepts of trading are easy to understand, especially for beginners. Many thanks to our great coaches, Coach Ferdie and Coach Alyanna.",
  },
  {
    name: 'Reymundo De Guzman Jr',
    quote: "Coach Ferdie's direct and bare to basic discussion on Forex makes its learning much easier compared to others or doing it on your own. Worth every sentimo yung pag aaral under him.",
  }
];

const FEATURED_INDEX = 2;
const featured = TESTIMONIALS[FEATURED_INDEX];

export default function Testimonials() {
  return (
    <section style={{
      background: '#0D0D0D',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      borderTop: '1px solid rgba(212,175,55,0.08)',
    }}>
      {/* Section number */}
      <div className="section-num" style={{
        position: 'absolute', top: '-2rem', left: '-1rem', zIndex: 0, opacity: 0.5,
      }}>05</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <SectionHeader eyebrow="Testimonials">
            Hear From Our<br /><span className="text-gradient-gold">Students</span>
          </SectionHeader>

          {/* Large quote mark decoration */}
          <div className="font-serif" style={{
            fontSize: '8rem', lineHeight: 1,
            color: 'rgba(212,175,55,0.12)',
            userSelect: 'none',
          }}>&ldquo;</div>
        </div>

        {/* Featured testimonial */}
        <div style={{
          padding: '2.5rem',
          background: 'rgba(212,175,55,0.04)',
          border: '1px solid rgba(212,175,55,0.2)',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            fontSize: '0.6rem', letterSpacing: '0.15em',
            color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600,
            background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)',
            padding: '3px 10px',
          }}>Featured</div>

          <p className="font-serif" style={{
            fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            lineHeight: 1.7, color: 'var(--text-primary)', margin: 0, marginBottom: '1.5rem',
          }}>&ldquo;{featured.quote}&rdquo;</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '44px', height: '44px',
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="font-display" style={{ fontSize: '1.2rem', color: '#000' }}>{featured.name[0]}</span>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{featured.name}</div>
              <div style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'rgba(255,255,255,0.05)' }} className="testimonials-grid">
          {TESTIMONIALS.filter(function filterFeatured(_, i) { return i !== FEATURED_INDEX; }).map(function renderTestimonial(t, i) {
            return (
              <div key={i}
                className="hover-card"
                style={{
                  background: '#0D0D0D',
                  padding: '2rem',
                }}
              >
                <p style={{
                  fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300,
                  color: 'var(--text-secondary)', margin: 0, marginBottom: '1.25rem',
                  fontStyle: 'italic',
                }}>&ldquo;{t.quote}&rdquo;</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid rgba(212,175,55,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="font-display" style={{ fontSize: '1rem', color: 'var(--gold)' }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ color: 'var(--gold)', fontSize: '0.6rem', marginTop: '2px' }}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

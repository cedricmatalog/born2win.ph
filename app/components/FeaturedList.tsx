import SectionHeader from "./SectionHeader";

const MEDIA_FEATURES = [
  { type: "Video",     title: "Pagtuturo ng forex trading sa mga eskuwelahan, iminungkahi para makaiwas sa budol",                    source: "Frontline Tonight | News5" },
  { type: "Billboard", title: "Born2WinPh international billboard",                                                                   source: "Times Square, New York City, USA" },
  { type: "Billboard", title: "The only Forex Education Company approved of a billboard in the Philippines",                          source: "BILLBOARD, C5, Bagong Ilog, Pasig" },
  { type: "Billboard", title: "The only Forex Education Company approved of a billboard in the Philippines",                          source: "BILLBOARD, Guadalupe, EDSA" },
  { type: "Article",   title: "Humans still better than AI in forex trading",                                                         source: "ABSCBN News" },
  { type: "Article",   title: "'Risk management, disciplined decision-making vital in forex trading'",                                 source: "PHILIPPINE STAR" },
  { type: "Video",     title: "MARKET EDGE Forex Trading in Focus",                                                                   source: "ANC ABSCBN News Channel" },
  { type: "Article",   title: "Born2WinPh Forex Trading Education celebrates four years helping Filipinos win",                       source: "BUSINESS MIRROR" },
  { type: "Video",     title: "\"The Financial District\" with Coach Ferdie Pabalan",                                                 source: "DWIZ 882 | Born2WinPh Guesting" },
  { type: "Audio",     title: "Financial Empowerment with Coach Alyanna Pabalan",                                                     source: "Relax PH" },
  { type: "Video",     title: "Coach Ferdie's Guesting Interview About Forex Trading with James Deakin on \"One For The Road\" Show", source: "James Deakin" },
  { type: "Video",     title: "FINANCIAL LITERACY 101: 5 Things To Learn Now with Coach Alyanna Pabalan",                             source: "Born2WinPh" },
  { type: "Article",   title: "This Filipino Earned P500k or $10,000 in 1 Month From Forex Trading. Here's What Happened.",           source: "wheninmanila.com" },
  { type: "Article",   title: "Seasoned coach makes forex trading for beginners easy to understand",                                   source: "INQUIRER.net" },
  { type: "Article",   title: "Beginner-friendly course helping Filipinos succeed in forex trading",                                   source: "www.manilatimes.net" },
  { type: "Article",   title: "These 4 Filipinos Share How They Earned Up To 6 Digits in 1 Day Through Forex Trading",                source: "wheninmanila.com" },
  { type: "Article",   title: "FOREX TRADING: A 6-DIGIT INCOME THAT ANYONE CAN DO",                                                  source: "Press Feature" },
  { type: "Article",   title: "How Forex Traders Make Money - A Total Beginner's Guide to the Basics",                                source: "Guide" },
  { type: "Article",   title: "These 6 Filipinos Achieved Their Dreams After Learning Forex Trading",                                 source: "Success Stories" },
  { type: "Video",     title: "One Mindanao News INTERVIEW with Coach Ferdie Pabalan",                                                source: "GMA News" },
  { type: "Video",     title: "Umagang Kay Ganda Interview",                                                                          source: "ABSCBN" },
  { type: "Article",   title: "5 WAYS TO IMPROVE YOUR FINANCES IN 2023",                                                             source: "Financial Tips" },
  { type: "Article",   title: "INSPIRING: How 5 Filipinos Earned 5-Digit Profits In 1 Day Through Forex Trading",                    source: "Success Stories" },
  { type: "Article",   title: "8 TIPS ON HOW TO SUCCEED IN FOREX TRADING FOR BEGINNERS",                                             source: "wheninmanila.com" },
  { type: "Video",     title: "Radyo Pilipinas Interview with Coach Ferdie Pabalan",                                                  source: "Radyo Pilipinas" },
  { type: "Video",     title: "TV PATROL INTERVIEW with Coach Ferdie Pabalan",                                                        source: "ABSCBN News" },
  { type: "Article",   title: "WHY YOU SHOULD LEARN ABOUT FOREX TRADING DURING THE PANDEMIC",                                        source: "wheninmanila.com" },
  { type: "Article",   title: "Money Machine: Why Forex Trading Beginners Call It The Easiest And Most Effective Strategy",           source: "Feature" },
  { type: "Article",   title: "This Free Forex Webinar Will Make Forex Trading Easy And Simple To Understand For You",                source: "Webinar Feature" },
];

const TYPE_BADGE: Record<string, { bg: string; color: string }> = {
  Video:     { bg: 'rgba(235,87,87,0.12)',    color: '#EB5757' },
  Article:   { bg: 'rgba(86,150,228,0.12)',   color: '#5696E4' },
  Billboard: { bg: 'rgba(155,100,230,0.12)',  color: '#9B64E6' },
  Audio:     { bg: 'rgba(111,207,151,0.12)',  color: '#6FCF97' },
};

const SOURCE_ICON = (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width={13} height={13} strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

export default function FeaturedList() {
  return (
    <section style={{ background: '#0A0A0A', padding: 'clamp(4rem,8vw,7rem) 0', borderBottom: '1px solid rgba(212,175,55,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div className="section-num" style={{ position: 'absolute', top: '-2rem', right: '-1rem', opacity: 0.2, fontSize: 'clamp(6rem,16vw,14rem)' }}>04</div>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="inner">

        <div style={{ marginBottom: '3rem' }}>
          <SectionHeader eyebrow="As Featured In">
            Media Coverage &amp;<br /><span className="text-gradient-gold">Press Features</span>
          </SectionHeader>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: '480px', fontWeight: 300, lineHeight: 1.7 }}>
            Coach Ferdie and Coach Alyanna have been featured in major news outlets, billboards, and shows worldwide.
          </p>
        </div>

        {/* Type legend */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {Object.entries(TYPE_BADGE).map(([type, style]) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', background: style.color, borderRadius: '1px' }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{type}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'rgba(212,175,55,0.06)' }} className="featured-grid">
          {MEDIA_FEATURES.map((item, i) => {
            const badge = TYPE_BADGE[item.type] ?? { bg: 'rgba(212,175,55,0.1)', color: 'var(--gold)' };
            return (
              <div key={i} className="hover-card" style={{
                background: '#0A0A0A', padding: '1.5rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem',
              }}>
                <div>
                  <span style={{
                    display: 'inline-block', padding: '2px 10px', marginBottom: '0.75rem',
                    background: badge.bg, color: badge.color,
                    fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                  }}>{item.type}</span>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>{item.title}</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.04)', color: 'var(--text-secondary)' }}>
                  {SOURCE_ICON}
                  <span style={{ fontSize: '0.75rem' }}>{item.source}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px)  { .featured-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .featured-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}

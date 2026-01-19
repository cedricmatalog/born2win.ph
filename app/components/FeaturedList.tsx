const mediaFeatures = [
  { type: "Video", title: "Pagtuturo ng forex trading sa mga eskuwelahan, iminungkahi para makaiwas sa budol", source: "Frontline Tonight | News5" },
  { type: "Billboard", title: "Born2WinPh international billboard", source: "Times Square, New York City, USA" },
  { type: "Billboard", title: "The only Forex Education Company - approved of a billboard in the Philippines", source: "BILLBOARD, C5, Bagong Ilog, Pasig" },
  { type: "Billboard", title: "The only Forex Education Company - approved of a billboard in the Philippines", source: "BILLBOARD, Guadalupe, EDSA" },
  { type: "Article", title: "Humans still better than AI in forex trading", source: "ABSCBN News" },
  { type: "Article", title: "‘Risk management, disciplined decision-making vital in forex trading’", source: "PHILIPPINE STAR" },
  { type: "Video", title: "MARKET EDGE Forex Trading in Focus", source: "ANC ABSCBN News Channel" },
  { type: "Article", title: "\"Born2WinPh Forex Trading Education celebrates four years helping Filipinos win\"", source: "BUSINESS MIRROR" },
  { type: "Video", title: "\"The Financial District\" with Coach Ferdie Pabalan", source: "DWIZ 882 | Born2WinPh Guesting" },
  { type: "Audio", title: "Financial Empowerment with Coach Alyanna Pabalan", source: "Relax PH" },
  { type: "Video", title: "Coach Ferdie's Guesting Interview About Forex Trading with James Deakin on \"One For The Road\" Show", source: "James Deakin" },
  { type: "Video", title: "FINANCIAL LITERACY 101: 5 Things To Learn Now with Coach Alyanna Pabalan", source: "Born2WinPh" },
  { type: "Article", title: "This Filipino Earned P500k or $10,000 in 1 Month From Forex Trading. Here's What Happened.", source: "wheninmanila.com" },
  { type: "Article", title: "Seasoned coach makes forex trading for beginners easy to understand", source: "INQUIRER.net" },
  { type: "Article", title: "Beginner-friendly course helping Filipinos succeed in forex trading", source: "www.manilatimes.net" },
  { type: "Article", title: "These 4 Filipinos Share How They Earned Up To 6 Digits in 1 Day Through Forex Trading", source: "wheninmanila.com" },
  { type: "Article", title: "FOREX TRADING: A 6-DIGIT INCOME THAT ANYONE CAN DO", source: "Press Feature" },
  { type: "Article", title: "How Forex Traders Make Money - A Total Beginner's Guide to the Basics", source: "Guide" },
  { type: "Article", title: "These 6 Filipinos Achieved Their Dreams After Learning Forex Trading", source: "Success Stories" },
  { type: "Video", title: "One Mindanao News INTERVIEW with Coach Ferdie Pabalan", source: "GMA News" },
  { type: "Video", title: "Umagang Kay Ganda Interview", source: "ABSCBN" },
  { type: "Article", title: "5 WAYS TO IMPROVE YOUR FINANCES IN 2023", source: "Financial Tips" },
  { type: "Article", title: "INSPIRING: How 5 Filipinos Earned 5-Digit Profits In 1 Day Through Forex Trading", source: "Success Stories" },
  { type: "Article", title: "8 TIPS ON HOW TO SUCCEED IN FOREX TRADING FOR BEGINNERS", source: "wheninmanila.com" },
  { type: "Video", title: "Radyo Pilipinas Interview with Coach Ferdie Pabalan", source: "Radyo Pilipinas" },
  { type: "Video", title: "TV PATROL INTERVIEW with Coach Ferdie Pabalan", source: "ABSCBN News" },
  { type: "Article", title: "WHY YOU SHOULD LEARN ABOUT FOREX TRADING DURING THE PANDEMIC", source: "wheninmanila.com" },
  { type: "Article", title: "Money Machine: Why Forex Trading Beginners Call It The Easiest And Most Effective Strategy", source: "Feature" },
  { type: "Article", title: "This Free Forex Webinar Will Make Forex Trading Easy And Simple To Understand For You", source: "Webinar Feature" },
];

export default function FeaturedList() {
  return (
    <section className="bg-zinc-900 py-16 sm:py-24 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">As Featured In</h2>
          <p className="text-gray-400">
            Coach Ferdie and Coach Alyanna have been featured in major news outlets, billboards, and shows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaFeatures.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col justify-between p-6 rounded-xl bg-black/40 border border-white/10 hover:border-yellow-500/50 hover:bg-black/60 transition-all cursor-default"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide 
                    ${item.type === 'Video' ? 'bg-red-500/20 text-red-500' : 
                      item.type === 'Article' ? 'bg-blue-500/20 text-blue-500' :
                      item.type === 'Billboard' ? 'bg-purple-500/20 text-purple-500' :
                      'bg-green-500/20 text-green-500'}`}>
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-yellow-500 transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                {item.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
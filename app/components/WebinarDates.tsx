const dates = [
  "Jan 21, Wed, 12pm-3pm",
  "Jan 24, Sat, 12pm-3pm",
  "Jan 28, Wed, 1pm-4pm",
  "Jan 30, Fri, 1pm-4pm",
  "Feb 1, Sun, 1pm-4pm",
  "Feb 4, Wed, 1pm-4pm"
];

export default function WebinarDates() {
  return (
    <section className="bg-zinc-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Free Introductory Forex Trading Webinar For Beginners
          </h2>
          <p className="text-yellow-500 text-lg font-medium italic">
            (Choose one preferred date and time)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {dates.map((date, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-between p-6 rounded-xl bg-black/40 border border-white/10 hover:border-yellow-500/50 hover:bg-black/60 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  <svg className="h-6 w-6 text-gray-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">{date}</span>
              </div>
              <div className="h-6 w-6 rounded-full border border-white/20 group-hover:border-yellow-500 group-hover:bg-yellow-500 transition-all flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="w-full sm:w-auto bg-yellow-500 text-black px-12 py-4 rounded-full font-black hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 uppercase tracking-widest text-sm">
            Reserve My Spot
          </button>
        </div>
      </div>
    </section>
  );
}

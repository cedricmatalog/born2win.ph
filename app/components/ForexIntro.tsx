export default function ForexIntro() {
  return (
    <section className="bg-black py-20 sm:py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              What is Forex Trading?
            </h2>
            <div className="space-y-6 text-lg leading-8 text-gray-300">
              <p>
                Forex trading involves exchanging one currency for another on a global market. It’s a vital 24-hour marketplace, offering myriad opportunities for profit through analyzing currency value changes.
              </p>
              <p>
                Essential for international commerce, it’s dynamic, fast-paced, and accessible to traders worldwide, presenting unique investment prospects.
              </p>
            </div>
          </div>
          
          {/* Placeholder Video */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video rounded-2xl bg-zinc-900 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
              {/* Abstract Background Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900 via-zinc-900 to-black"></div>
              
              {/* Play Button */}
              <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300 z-10">
                <svg className="h-8 w-8 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              
              <p className="absolute bottom-6 text-sm text-gray-400 font-medium tracking-wide">
                Watch: Introduction to Forex
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
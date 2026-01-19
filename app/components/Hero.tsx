export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:pb-40">
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-8">
            Learn Forex Trading with <br />
            <span className="text-gradient-gold">Born2WinPh</span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-300 max-w-2xl mx-auto font-light">
            Discover the art of forex trading from the <span className="text-white font-medium">number 1 and most trusted coaches</span> in the industry. Start making profitable trades today.
          </p>
          <div className="mt-12 flex justify-center">
             <button className="w-full sm:w-auto bg-gradient-gold text-black px-12 py-5 rounded-full font-black hover:brightness-110 transition-all uppercase tracking-widest btn-glow">
              Register Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Premium Glow Effects */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-yellow-500/10 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-yellow-600/5 blur-[100px] mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-white/5 blur-[150px] opacity-20" />
    </section>
  );
}
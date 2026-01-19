import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import WebinarDates from "../components/WebinarDates";
import Link from "next/link";

export default function FreeWebinar() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      
      {/* Webinar Hero */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              Forex Trading Courses <br />
              <span className="text-2xl sm:text-4xl font-normal text-gray-300 block mt-4">
                with <span className="text-yellow-500 font-bold">Born2WinPh</span> Forex Trading Education
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
              Begin your forex trading adventure with us and embark on a journey towards financial mastery.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
              We provide the tools, insights, and guidance you need to navigate the dynamic world of forex trading, ensuring a solid foundation for your trading success.
            </p>
          </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#fbbf24] to-[#d97706] opacity-10" 
               style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          />
        </div>
      </section>

      <WebinarDates />

      <section className="bg-black py-16 text-center border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8">
           <h2 className="text-2xl font-bold text-white mb-6">Top-notch Training Program:</h2>
           <div className="inline-block p-6 rounded-2xl bg-zinc-900 border border-white/10">
             <p className="text-lg text-yellow-500 font-medium mb-2">Check Out Our 5-Star Rating</p>
             <p className="text-gray-400">From Student Reviews on Facebook and Google</p>
             <div className="flex justify-center gap-1 mt-4 text-yellow-500 text-2xl">
               ★★★★★
             </div>
           </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      
      {/* Course Enrollment CTA from Footer Links */}
      <section className="bg-yellow-500 py-12">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl font-black text-black mb-6 uppercase">Ready to Start?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/" className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-zinc-800 transition-colors">
               Back to Home
             </Link>
             <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
               Course Enrollment
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Link from "next/link";

export default function GlobalStudentsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      
      {/* Global Hero */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              Forex Trading Course for Foreign Students
            </h1>
            <p className="text-xl text-gray-400 font-medium mb-8">
              with <span className="text-white">Born2WinPh</span> Forex Trading Education
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
              Begin your forex trading adventure with us and embark on a journey towards financial mastery.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
              We provide the tools, insights, and guidance you need to navigate the dynamic world of forex trading, ensuring a solid foundation for your trading success.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="bg-zinc-900 py-24 sm:py-32 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="mx-auto max-w-2xl bg-black/40 p-10 rounded-3xl border border-white/10 ring-1 ring-yellow-500/10">
            <h2 className="text-2xl font-bold text-white mb-6">For English-speaking Born2WinPh students all over the world</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Here’s a special course made for you. Simply make a payment of <span className="text-yellow-500 font-bold">$100</span> to get access.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-end">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <span className="text-gray-500 text-xs mb-2 uppercase tracking-wider">New Student?</span>
                <button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 uppercase tracking-widest text-sm">
                  Make A Payment
                </button>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <span className="text-gray-500 text-xs mb-2 uppercase tracking-wider">Already a Student?</span>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-sm">
                  Login Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-8 text-center mb-16">
           <h2 className="text-3xl font-bold text-white">Hear From Our Previous Graduates</h2>
        </div>
        <Testimonials />
      </section>

      <Footer />
    </main>
  );
}

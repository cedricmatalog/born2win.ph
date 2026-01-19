import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForexIntro from "./components/ForexIntro";
import Coaches from "./components/Coaches";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <Hero />
      
      {/* Workshop Registration Section */}
      <section id="webinars" className="bg-yellow-500 py-12">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-black text-black text-center md:text-left">
            ATTEND OUR FREE 3-HOUR ONLINE WORKSHOP
          </h2>
          <button className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all uppercase tracking-widest text-sm shadow-xl">
            Register Now
          </button>
        </div>
      </section>

      <ForexIntro />
      <Coaches />
      
      <section className="bg-zinc-900 py-20 sm:py-32 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Free Webinars On Forex Trading</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Step into the captivating world of forex trading with our free introductory webinar, accessible online anywhere you are in the world. Under the expert guidance of Coach Ferdie Pabalan, you’ll uncover the secrets of currency market dynamics.
          </p>
          <button className="w-full sm:w-auto bg-yellow-500 text-black px-12 py-4 rounded-full font-extrabold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20">
            Register Now
          </button>
        </div>
      </section>

      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
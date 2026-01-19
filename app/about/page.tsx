import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      
      {/* About Hero */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              About Us
            </h1>
            <p className="text-xl text-yellow-500 font-bold mb-8 italic">
              Your Forex Trading Education Provider
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
              BORN2WINPH is your dedicated forex trading education provider. We aim to simplify complex trading concepts and cultivate financial literacy. With our comprehensive training programs, we’re committed to guiding you on your journey toward becoming a successful and profitable forex trader.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-zinc-900 py-24 sm:py-32 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About The Founders</h2>
            <p className="mt-4 text-gray-400">
              Resilience, knowledge, and transformative leadership in the world of Forex trading.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-black/40 p-8 rounded-3xl ring-1 ring-white/10">
              <h3 className="text-2xl font-bold text-white mb-1">Ferdie Pabalan</h3>
              <p className="text-yellow-500 font-medium mb-6">Chairman & Founder, Born2WinPh</p>
              <p className="text-gray-300 leading-relaxed">
                Coach Ferdie impresses with a 19-year tenure in public speaking, training, and financial services. A licensed authority in Forex trading, Coach Ferdie employs a scientific methodology to market analysis, advocating for meticulous observation, pattern discernment, hypothesis validation, and strategic risk management.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-3xl ring-1 ring-white/10">
              <h3 className="text-2xl font-bold text-white mb-1">Alyanna Pabalan</h3>
              <p className="text-yellow-500 font-medium mb-6">CEO & Co-founder, Born2WinPh</p>
              <p className="text-gray-300 leading-relaxed">
                CEO & Co-founder of Born2WinPh with a 16-year experience, she is a seasoned business owner and financial literacy coach. Coach Alyanna holds certifications as an Executive Coach, Master in Business Management, Life Coach, and Master Practitioner in Neuro Linguistic Programming. She specializes in fostering proactive and sustainable mindsets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-black py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border-l-4 border-yellow-500 bg-zinc-900/50">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We aim to provide comprehensive, accessible Forex trading education. We strive to empower individuals, inspiring them to harness the potential of the Forex market for financial growth.
              </p>
            </div>
            <div className="p-8 border-l-4 border-yellow-500 bg-zinc-900/50">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our vision is to become a globally recognized leader in Forex trading education. We aim to inspire and enable individuals worldwide to achieve financial independence through informed, strategic Forex trading decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Guide */}
      <section className="bg-zinc-900 py-24 sm:py-32 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why Our Guide for Beginners is the Key to Your Success
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-500 mb-4 uppercase tracking-wider">Empowering Interactive Webinars</h3>
              <p className="text-gray-400">Unlock the world of Forex trading with our engaging webinars. Led by experienced traders, these sessions are crafted to make complex concepts clear and accessible.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-500 mb-4 uppercase tracking-wider">Comprehensive Step-by-Step Tutorials</h3>
              <p className="text-gray-400">Begin your trading journey with our user-friendly tutorials. They guide you through Forex trading basics, from understanding currency pairs to navigating platforms.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-500 mb-4 uppercase tracking-wider">Guides for Informed Trading</h3>
              <p className="text-gray-400">Enhance your trading knowledge with our expert guides. Focused on essential strategies and risk management, these resources lay a solid foundation for success.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="bg-yellow-500 py-20">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase italic">
            Ready To Learn With Us?
          </h2>
          <p className="text-xl text-black font-bold mb-10">
            Free Forex Trading Webinars To Unlock Your Potential
          </p>
          <Link href="/free-webinar" className="inline-block bg-black text-white px-12 py-5 rounded-full font-black hover:bg-zinc-800 transition-all shadow-2xl uppercase tracking-widest">
            View Webinars
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

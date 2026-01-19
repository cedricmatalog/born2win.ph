import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedList from "../components/FeaturedList";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      
      {/* Features Hero */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Feature Articles, Guesting Interviews and Client Testimonials
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
              Read and watch some of our features about our expertise.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-400 max-w-3xl mx-auto">
              Coach Ferdie and Coach Alyanna have been featured in several interviews on news articles, television, social media and so much more, making Born2WinPh the most trusted and knowledgable forex education provider in Asia, and one of the best in the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-yellow-500 py-12">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col items-center justify-center text-center gap-6">
          <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
            ATTEND OUR FREE 3-HOUR WEBINAR
          </h2>
          <Link href="/free-webinar" className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all uppercase tracking-widest text-sm shadow-xl">
            Register Now
          </Link>
        </div>
      </section>

      <FeaturedList />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

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
    <main style={{ minHeight: '100vh', background: 'var(--obsidian)', color: 'var(--text-primary)' }}>
      <Navbar />
      <Hero />
      <ForexIntro />
      <Coaches />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

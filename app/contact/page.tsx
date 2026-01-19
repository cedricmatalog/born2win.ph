import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              Contact Born2WinPh
            </h1>
            <p className="text-xl text-yellow-500 font-bold mb-8 italic">
              Your Forex Trading Education Partner
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-zinc-900 py-24 sm:py-32 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Section */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Get in touch</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder="Name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Email address"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-number" className="block text-sm font-semibold leading-6 text-white">
                    Contact
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="contact-number"
                      id="contact-number"
                      autoComplete="tel"
                      placeholder="Contact number"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                    Message Box
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="Message"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-bold text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-colors uppercase tracking-widest"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="flex flex-col justify-center">
              <div className="bg-black/40 p-10 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-none rounded-lg bg-yellow-500/10 p-2 ring-1 ring-yellow-500/20">
                      <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Contact Number</h4>
                      <p className="mt-1 text-gray-400 font-mono">+639171658844</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-none rounded-lg bg-yellow-500/10 p-2 ring-1 ring-yellow-500/20">
                      <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Business Email Address</h4>
                      <p className="mt-1 text-gray-400 font-mono">info@born2win.ph</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="flex-none rounded-lg bg-yellow-500/10 p-2 ring-1 ring-yellow-500/20">
                      <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Location</h4>
                      <p className="mt-1 text-gray-400">Philippines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

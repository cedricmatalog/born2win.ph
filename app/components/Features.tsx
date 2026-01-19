const features = [
  {
    name: 'Global Financial Opportunities',
    description: "Explore the vast potential of the world's largest financial market. Learn to skillfully navigate currency exchanges for financial growth, guided by Asia's top trading experts.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: 'Flexible Trading Schedule',
    description: "Embrace the convenience of 24/5 trading. Whether you're an early riser or a night owl, Forex fits seamlessly into your lifestyle, offering trading opportunities at your convenience.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Beginner-Friendly Learning',
    description: "Start your Forex journey confidently with our easy-to-follow courses. Designed for beginners, these programs build a strong foundation in market analysis and risk management, paving your path to trading success.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: 'Comprehensive Market Education',
    description: "Dive deep into the intricacies of Forex markets. Our comprehensive educational resources cover everything from basic concepts to advanced trading techniques, ensuring a well-rounded trading education.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25V21" />
      </svg>
    ),
  },
  {
    name: 'Ongoing Support and Community',
    description: "Join a community of aspiring and experienced traders. Gain access to ongoing support, interactive webinars, and a network of peers to share insights and strategies for continuous growth in your trading journey.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.272m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-950 py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-3">Premium Features</h2>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to start <span className="text-gradient-gold">Forex Trading?</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col p-8 rounded-2xl glass-panel hover:border-yellow-500/30 transition-all duration-300 group hover:-translate-y-1">
              {/* Icon Container */}
              <div className="h-14 w-14 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 ring-1 ring-yellow-500/20 group-hover:bg-yellow-500/20 transition-all">
                {feature.icon}
              </div>
              <dt className="text-xl font-bold text-white mb-4">{feature.name}</dt>
              <dd className="text-gray-400 leading-relaxed font-light">{feature.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

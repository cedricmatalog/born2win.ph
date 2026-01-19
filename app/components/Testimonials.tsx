const testimonials = [
  {
    name: 'Anna Benjieline Puzon',
    quote: "B2W makes trading concepts easy to understand. They also don’t just teach the concepts, they make sure you learn and absorb it. They are generous in giving guidance and they genuinely care for their students. Galing nila coach F and coach A!",
  },
  {
    name: 'Melanie Kathleen San Pablo-Alejandro',
    quote: "I immensely appreciate how Coach Ferdie, Coach Alyanna, and B2W staff assist me and try to simplify things for me. I feel the genuine support and commitment they have to teaching me the intricacies of currency trading. Thank you, Born2Win!",
  },
  {
    name: 'Edmilyn Palma',
    quote: "Coach Ferdie’s style of teaching in this complex FOREX made simple and easy. He ensures his students understood every modules. His strategies and techniques makes me WIN against the market with accuracy of about 90 to 95% with proper risk management without being greedy.",
  },
  {
    name: 'Mary Grace Sajol-Pascual',
    quote: "I’ve never understood forex trading until I saw this Born2win post, joined the program, get educated and most of all understanding it’s not just all about strategies but discipline as well!",
  },
  {
    name: 'Nathalie',
    quote: "Highly recommended to those who want to learn Forex. Best coaches ever! They will guide and support you all the way. The moral support helps you as well not to lose hope in forex trading. Kudos to Born2Win!",
  },
  {
    name: 'John Nicolai Curioso',
    quote: "I really recommend B2WPh because the lessons and concepts of trading are easy to understand, especially for beginners. Many thanks to our great coaches, Coach Ferdie and Coach Alyanna.",
  },
  {
    name: 'Reymundo De Guzman Jr',
    quote: "Coach Ferdie’s direct and bare to basic discussion on Forex makes it’s learning much easier compared to others or doing it on your own. Worth every sentimo yung pag aaral under him.",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-yellow-500 italic">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hear From Our Previous Customers and Enrollees
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col h-full rounded-2xl bg-zinc-900/50 p-8 ring-1 ring-white/10 hover:ring-yellow-500/20 transition-all">
              <div className="flex-grow">
                <p className="text-base leading-7 text-gray-300 italic">"{t.quote}"</p>
              </div>
              <div className="mt-8 flex items-center gap-x-4 pt-6 border-t border-white/5">
                <div className="h-12 w-12 flex-none rounded-full bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center font-bold text-yellow-500 border-2 border-zinc-800 ring-1 ring-white/10 shadow-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <div className="flex text-yellow-500 text-xs">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

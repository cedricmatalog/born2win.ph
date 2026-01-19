const faqs = [
  {
    q: "How much is the introductory webinar for beginners?",
    a: "Our introductory webinar is completely free of charge for beginners."
  },
  {
    q: "How long is the introductory webinar?",
    a: "The introductory webinar is a 3-hour comprehensive online workshop."
  },
  {
    q: "How much is the advanced program you offer?",
    a: "Details regarding the advanced program are shared during the free introductory webinar."
  },
  {
    q: "Do I need to do this full-time?",
    a: "No, forex trading can be done part-time. The market is open 24/5, allowing you to trade at your convenience."
  },
  {
    q: "Can I give you money and you trade for me?",
    a: "No, we are an education provider. We teach you how to trade for yourself so you have full control over your finances."
  },
  {
    q: "Is that the same as stocks/bonds/crypto?",
    a: "No. The forex market is the most liquid market. It is recession-proof. In forex trading, you can make money whether the market goes up or down, unlike other trading instruments where you can only make profits when the market goes up."
  }
];

export default function FAQ() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-black/40 p-8 ring-1 ring-white/5">
              <dt className="text-lg font-bold text-white mb-2">{faq.q}</dt>
              <dd className="text-gray-400 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

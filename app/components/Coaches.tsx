export default function Coaches() {
  return (
    <section id="about" className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Born2WinPh
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Born2WinPh is the number 1 forex trading education in Asia, and one of the best in the world. We specialize in teaching forex trading to total beginners, well-known in the industry in making forex trading very easy and simple to understand.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Coach Ferdie */}
          <div className="flex flex-col p-8 rounded-2xl bg-zinc-900 ring-1 ring-white/10">
            <div className="self-center h-40 w-40 rounded-full bg-zinc-800 mb-6 flex items-center justify-center text-4xl font-bold text-white border-4 border-zinc-900 ring-2 ring-yellow-500/50 shadow-2xl shadow-yellow-500/10 relative overflow-hidden bg-gradient-to-br from-zinc-700 to-black">
              FP
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Coach Ferdie</h3>
            <p className="text-gray-400 mb-6 italic">19-year experience in trading and mentorship</p>
            <p className="text-gray-300 leading-relaxed">
              Coach Ferdie has trained more than 300,000 people worldwide. His proven-track record has been backed up by thousands of profitable traders globally under his guidance. Coach Ferdie is a living proof that financial and time freedom can be achieved through smart work.
            </p>
          </div>

          {/* Coach Alyanna */}
          <div className="flex flex-col p-8 rounded-2xl bg-zinc-900 ring-1 ring-white/10">
            <div className="self-center h-40 w-40 rounded-full bg-zinc-800 mb-6 flex items-center justify-center text-4xl font-bold text-white border-4 border-zinc-900 ring-2 ring-yellow-500/50 shadow-2xl shadow-yellow-500/10 relative overflow-hidden bg-gradient-to-br from-zinc-700 to-black">
              AP
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Coach Alyanna</h3>
            <p className="text-gray-400 mb-6 italic">16-year experience</p>
            <p className="text-gray-300 leading-relaxed">
              Coach Alyanna signifies women empowerment through financial literacy and advocacy, and suggests that there is no limit as to what women can accomplish. From an entry-level employee to a successful trader, business owner and financial coach, she exemplifies relentless ambition and strategic financial acumen.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-300 italic">
            Both founders are certified in their respective fields, passionately dedicated to teaching others the art of financial control and prosperity. Their combined expertise offers a powerful blend of practical trading strategies and life-changing financial guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

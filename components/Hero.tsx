import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-amber-50/30 to-white py-14 sm:py-20 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-school-yellowLight border border-amber-200 text-school-navy text-xs sm:text-sm font-bold shadow-xs">
            <span className="text-school-yellow text-base">★</span> Welcome to First Grade 2025–2026
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-school-navy tracking-tight leading-tight">
            Growing, Learning &amp; Leading Together.
          </h1>
          
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Welcome to our First Grade classroom website! I am so excited to partner with you this school year. This site is designed to keep families informed, connected, and involved in our learning journey. In first grade, students grow in so many ways. We will build strong reading and writing skills, develop confidence in math, explore science and social studies, and most importantly, learn how to be kind, responsible members of our classroom community.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#schedule"
              className="px-6 py-3 rounded-xl bg-school-navy text-white font-bold shadow-md hover:bg-school-dark hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0"
            >
              View Daily Schedule
            </a>
            <a
              href="#links"
              className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold shadow-xs hover:border-slate-400 hover:bg-slate-50 transition-all hover:shadow-sm"
            >
              Genesis &amp; Parent Links
            </a>
          </div>
        </div>

        {/* Teacher Card with shadow & border */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl bg-white border-2 border-slate-200 shadow-xl flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-4 right-4 bg-school-yellow text-school-navy text-[11px] font-black px-2.5 py-1 rounded-full shadow-xs">
              ROOM 1 ★
            </div>

            {/* Bitmoji Image slot */}
            <div className="w-36 h-36 relative mb-3 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center overflow-hidden">
              {/* To display real Bitmoji: place file in public/bitmoji.png and un-comment next line: */}
              <Image src="/bitmoji.png" alt="Mr. Weiss" fill className="object-contain p-2" />
              <span className="text-6xl">👨‍🏫</span>
            </div>

            <h3 className="text-xl font-black text-school-navy">Mr. Ari Weiss</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
              1st Grade Lead Teacher
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
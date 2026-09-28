import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-school-yellow font-black text-school-navy text-xl shadow-xs transition-transform group-hover:scale-105">
            ★
          </span>
          <span className="font-extrabold text-school-navy text-base sm:text-lg tracking-tight">
            Mr. Weiss&apos;s First Grade SuperStars
          </span>
        </Link>
        
        <nav className="flex items-center space-x-4 sm:space-x-6 text-sm font-semibold text-slate-700">
          <a href="#schedule" className="hidden md:inline hover:text-school-navy transition-colors">
            Schedule
          </a>
          <a href="#links" className="hidden md:inline hover:text-school-navy transition-colors">
            Parent Portals
          </a>
          <a href="#classroom" className="hidden md:inline hover:text-school-navy transition-colors">
            Classroom Tour
          </a>
          <a href="#about" className="hidden md:inline hover:text-school-navy transition-colors">
            About Mr. Weiss
          </a>
          
          {/* High-visibility Action Button */}
          <a
            href="mailto:weiss.ari@robbinsvillek12.gov"
            className="flex items-center gap-2 rounded-xl bg-school-navy px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-school-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 active:translate-y-0"
          >
            <span>✉️</span>
            <span>Email Mr. Weiss</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
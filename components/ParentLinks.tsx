const links = [
  {
    title: "Genesis Parent Portal",
    desc: "Access student attendance, grading updates, and official school records.",
    href: "https://parents.c3.genesisedu.net/robbinsville",
    badge: "Grades & Records",
    icon: "📋",
  },
  {
    title: "ParentSquare",
    desc: "Direct classroom communications, messaging, and district announcements.",
    href: "https://robbinsvillek12.gov/parentsquare",
    badge: "Messaging",
    icon: "💬",
  },
  {
    title: "2025–2026 District Calendar",
    desc: "Key dates, school holidays, half days, and scheduled district closings.",
    href: "https://files.smartsites.parentsquare.com/7708/25-26_district_calendar_final.pdf",
    badge: "Academic Year",
    icon: "📅",
  },
  {
    title: "Official District Website",
    desc: "Transportation information, lunch menus, and central district services.",
    href: "https://www.robbinsvillek12.gov/",
    badge: "District Hub",
    icon: "🏫",
  },
];

export default function ParentLinks() {
  return (
    <section id="links" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-school-navy">Parent Portals &amp; Resources</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Quick one-tap shortcuts to your essential school applications and calendars.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-school-yellow transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{link.icon}</div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-school-navy bg-school-yellowLight px-2 py-0.5 rounded-md">
                  {link.badge}
                </span>
                <h3 className="font-bold text-slate-900 mt-2 group-hover:text-school-navy transition-colors">
                  {link.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {link.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-school-navy group-hover:underline">
                Open Resource &rarr;
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
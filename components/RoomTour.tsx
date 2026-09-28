import Image from "next/image";

const classroomPhotos = [
  { src: "/classroom/image1.jpg", label: "Our Welcome Board" },
  { src: "/classroom/image2.jpg", label: "Our Class Rules" },
  { src: "/classroom/image3.jpg", label: "Greeting Guide" },
  { src: "/classroom/image4.jpg", label: "Boomer" },
];

export default function RoomTour() {
  // Duplicate array so marquee scrolls continuously without gaps
  const items = [...classroomPhotos, ...classroomPhotos];

  return (
    <section id="classroom" className="py-16 bg-slate-50/70 border-y border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-school-navy bg-school-yellowLight px-2.5 py-1 rounded-md border border-amber-200">
          Virtual Tour
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-school-navy mt-2">
          Inside the Classroom
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          A glimpse into our welcoming space where our superstars learn every day.
        </p>
      </div>

      <div className="flex w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee shrink-0">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative w-72 sm:w-80 h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-200 shrink-0 bg-slate-100 group"
            >
              {/* Actual Next.js image component */}
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient overlay for label contrast */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8 pointer-events-none">
                <p className="text-xs font-bold text-white tracking-wide drop-shadow-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
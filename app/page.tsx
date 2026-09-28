import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Schedules from "@/components/Schedules";
import ParentLinks from "@/components/ParentLinks";
import RoomTour from "@/components/RoomTour";
import AboutTeacher from "@/components/AboutTeacher";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-school-yellow selection:text-school-navy">
      <Navbar />
      <Hero />
      <Schedules />
      <ParentLinks />
      <RoomTour />
      <AboutTeacher />
      
      <footer className="py-8 bg-slate-900 text-slate-400 text-xs text-center border-t border-slate-800">
        <p>© 2025–2026 Mr. Weiss&apos;s First Grade Class. Built for Room 1 families.</p>
      </footer>
    </main>
  );
}
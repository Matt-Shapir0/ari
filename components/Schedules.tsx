"use client";

import { useState } from "react";

const dailyRoutine = [
  { time: "9:00 – 9:10 AM", event: "Arrival & Unpack", icon: "🎒" },
  { time: "9:10 – 9:35 AM", event: "Boomer's Nest & Calendar", icon: "🗓️" },
  { time: "9:35 – 11:05 AM", event: "Math", icon: "🔢" },
  { time: "11:05 – 11:50 AM", event: "Science / Social Studies", icon: "🔬" },
  { time: "11:52 – 12:36 PM", event: "Recess & Lunch", icon: "🥪" },
  { time: "12:38 – 2:08 PM", event: "Reading", icon: "📖" },
  { time: "2:10 – 2:54 PM", event: "Specials", icon: "🎨" },
  { time: "2:56 – 3:30 PM", event: "Writing", icon: "✏️" },
  { time: "3:30 – 3:40 PM", event: "Pack up & Dismissal", icon: "👋" },
];

const specialsSchedule = [
  { day: "Monday", special: "Gym", note: "Sneakers required! 👟" },
  { day: "Tuesday", special: "Music + Art", note: "Get ready to create 🎨" },
  { day: "Wednesday", special: "Health", note: "Healthy habits & wellness 🌱" },
  { day: "Thursday", special: "Gym", note: "Sneakers required! 👟" },
  { day: "Friday", special: "Media", note: "Library books check-out 📚" },
];

export default function Schedules() {
  const [tab, setTab] = useState<"daily" | "specials">("specials");

  return (
    <section id="schedule" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-school-navy">Class Schedules</h2>
          <p className="text-slate-600 text-sm mt-1">First Grade Room 1 daily timetable &amp; weekly specials</p>
        </div>

        {/* Tab Controls */}
        <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            onClick={() => setTab("specials")}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              tab === "specials"
                ? "bg-school-navy text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Weekly Specials
          </button>
          <button
            onClick={() => setTab("daily")}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              tab === "daily"
                ? "bg-school-navy text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Daily Bell Schedule
          </button>
        </div>
      </div>

      {tab === "specials" ? (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {specialsSchedule.map((item) => (
              <div
                key={item.day}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                    {item.day}
                  </span>
                  <h3 className="text-xl font-black text-school-navy mt-1">
                    {item.special}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mt-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-school-yellowLight border border-amber-200 text-school-navy text-sm font-semibold flex items-center gap-3">
            <span className="text-xl">👟</span>
            <span>
              <strong>Gym Reminder:</strong> Don&apos;t forget to wear sneakers on <strong>Monday</strong> and <strong>Thursday</strong>!
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
          {dailyRoutine.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50/80 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-xl">{item.icon}</span>
                <span className="font-bold text-slate-800 text-sm sm:text-base">{item.event}</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
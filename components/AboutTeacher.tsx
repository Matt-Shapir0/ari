"use client";

import { useState } from "react";

export default function AboutTeacher() {
  const [copied, setCopied] = useState(false);
  const teacherEmail = "weiss.ari@robbinsvillek12.gov";
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(teacherEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlights = [
    {
      icon: "🎓",
      title: "The College of New Jersey",
      detail: "B.S. in Elementary Education & Sociology",
      accent: "hover:border-amber-300",
    },
    {
      icon: "🌍",
      title: "Global Teaching Experience",
      detail: "Completed student teaching at Ghana International School in West Africa",
      accent: "hover:border-blue-300",
    },
    {
      icon: "📚",
      title: "Continuing Education",
      detail: "Current candidate in TCNJ’s Master’s program in Educational Studies",
      accent: "hover:border-emerald-300",
    },
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        {/* Subtle accent border glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-school-navy via-school-yellow to-school-navy" />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-school-yellowLight border border-amber-200 text-school-navy text-xs font-bold tracking-wide">
              <span>👋</span> Meet Your Teacher
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-school-navy tracking-tight">
              Hi! My name is Ari Weiss.
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              <p>
                I am a graduate from <strong>The College of New Jersey</strong>, where I earned my degree in Elementary Education and Sociology. During my time at TCNJ, I had the privilege of completing my student teaching abroad at <strong>Ghana International School</strong> in Ghana, West Africa.
              </p>
              <p>
                I am also currently in a Master’s program at TCNJ in <strong>Educational Studies</strong>. Please feel free to reach out with any questions, concerns, or information you would like to share about your child. I look forward to partnering with you to support your child’s growth and success!
              </p>
            </div>

            {/* Interactive Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={`mailto:${teacherEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-school-navy text-white text-sm font-bold shadow-md hover:bg-school-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              >
                <span>✉️</span>
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-white hover:border-slate-400 hover:shadow-xs active:scale-95 transition-all duration-150"
              >
                <span>{copied ? "✅" : "📋"}</span>
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Credential Cards with Micro-Interactions */}
          <div className="lg:col-span-5 space-y-3.5 pt-2 lg:pt-0">
            {highlights.map((card, i) => (
              <div
                key={i}
                className={`p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 flex items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-md ${card.accent}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-school-navy text-sm sm:text-base">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                    {card.detail}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Room 1 Note */}
            <div className="p-4 rounded-2xl bg-school-yellowLight border border-amber-200/80 flex items-center gap-3 text-school-navy text-xs font-semibold">
              <span className="text-xl">🤝</span>
              <span>
                <strong>Open Door Communication:</strong> Questions or updates? Email anytime—replies are typically sent within 24 hours on school days.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { LETTER_COLORS } from "../../lib/constants";
import heroData from "../../data/hero.json";

function Hero() {
  const [surnameIndex, setSurnameIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSurnameIndex((prev) => (prev + 1) % heroData.surnames.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between">
      <div className="flex-1 space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          {heroData.title}
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
          <div className="flex flex-wrap gap-1 text-5xl md:text-6xl">
            {heroData.name.split("").map((letter, idx) => (
              <span
                key={`${letter}-${idx}`}
                className={`transition duration-200 ease-out hover:-translate-y-1 hover:scale-110 ${
                  LETTER_COLORS[idx % LETTER_COLORS.length]
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="mt-2 text-4xl font-semibold text-slate-500 dark:text-slate-300 md:text-5xl">
            {heroData.surnames[surnameIndex]}
          </div>
          <div className="mt-3 text-2xl font-semibold md:text-3xl">
            {heroData.tagline}
          </div>
        </h1>
        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
          {heroData.description}
        </p>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-sky-50 via-white to-slate-50 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          {/* Replace with next/image when you add your photo */}
          <div className="flex h-full items-center justify-center text-slate-500 dark:text-slate-400">
            Add your photo
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

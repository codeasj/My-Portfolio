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
          
          <div className="flex flex-wrap gap-1 text-5xl md:text-6xl cursor-pointer group">
            <span className="inline-block transition-all duration-500 ease-in-out group-hover:rotate-2 group-hover:-translate-y-2 group-hover:scale-105">
              {Array.from(heroData.name).map((letter, idx) => (
                <span
                  key={`name-${idx}`}
                  className={LETTER_COLORS[idx % LETTER_COLORS.length]}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>
          
          <div className="mt-2 text-4xl font-semibold text-slate-500 dark:text-slate-300 md:text-5xl cursor-pointer group">
            <span className="inline-block transition-all duration-500 ease-in-out group-hover:-rotate-2 group-hover:-translate-y-2 group-hover:scale-105">
              {heroData.surnames[surnameIndex]}
            </span>
          </div>
          <div className="mt-3 text-2xl font-semibold md:text-3xl">
            {heroData.tagline}
          </div>
        </h1>
        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
          {heroData.description}
        </p>
      </div>

    </section>
  );
}

export default Hero;

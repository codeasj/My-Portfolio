"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const name = "Anuj";
const surnames = ["자부심", "誇り", "Pride", "Orgullo", "Proud"];

function Hero() {
  const [surnameIndex, setSurnameIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSurnameIndex((prev) => (prev + 1) % surnames.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between">
      <div className="flex-1 space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          Front-end Developer
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
          <div className="flex flex-wrap gap-1 text-5xl md:text-6xl">
            {name.split("").map((letter, idx) => (
              <span
                key={`${letter}-${idx}`}
                className="transition duration-200 ease-out hover:-translate-y-1 hover:scale-110 hover:text-pink-600 dark:hover:text-pink-400"
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="mt-2 text-4xl font-semibold text-slate-500 dark:text-slate-300 md:text-5xl">
            {surnames[surnameIndex]}
          </div>
          <div className="mt-3 text-2xl font-semibold md:text-3xl">
            I build fast, accessible web experiences.
          </div>
        </h1>
        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
          I craft modern interfaces with React/Next.js, Tailwind CSS, and a focus on performance and accessibility. Let&apos;s build something people love to use.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-sky-600 px-4 py-2 text-white shadow-sm transition hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-4 py-2 text-slate-800 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            Next.js
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            React
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            Tailwind CSS
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            TypeScript
          </span>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-sky-50 via-white to-slate-50 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
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

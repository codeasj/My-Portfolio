"use client";

import { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  url?: string;
  icon: ReactNode;
  onClick: () => void;
};

function ProjectCard({
  title,
  subtitle,
  url,
  icon,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full text-left"
    >
      {/* Layered shadow effect on hover - amber layer (behind) */}
      <div className="absolute inset-0 z-0 translate-x-0 translate-y-0 rounded-2xl bg-amber-300 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2.5 group-hover:opacity-100"></div>
      {/* Purple layer (middle) */}
      <div className="absolute inset-0 translate-x-0 translate-y-0 rounded-2xl bg-purple-400 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:opacity-100"></div>

      {/* Main card */}
      <div className="relative z-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:group-hover:border-slate-700">
        <div className="flex items-start gap-4">
          {/* Icon with its own animation */}
          <div className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-200">
                {subtitle}
              </p>
            )}
            {url && (
              <p className="mt-2 text-sm text-blue-600 underline transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
                {url}
              </p>
            )}
          </div>
        </div>

        {/* Subtle background gradient on hover */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 group-hover:opacity-100 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
      </div>
    </button>
  );
}

export default ProjectCard;

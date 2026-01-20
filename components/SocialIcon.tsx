"use client";

import type { ReactNode } from "react";
import Link from "next/link";

type SocialIconProps = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  disableScribble?: boolean;
};

function SocialIcon({ href, ariaLabel, children, disableScribble = false }: SocialIconProps) {
  const isExternal = href.startsWith("http");
  const isMailto = href.startsWith("mailto:");

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="social-icon-link group/social relative text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
    >
      <span className="relative inline-block">
        {children}
        {!isMailto && !disableScribble && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-6 left-0 z-10 w-6 h-6 opacity-0 transition-opacity duration-200 group-hover/social:opacity-100"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5"
              fill="none"
              strokeWidth="1.5"
              className="scribble-path"
            ></path>
          </svg>
        )}
      </span>
    </Link>
  );
}

export default SocialIcon;

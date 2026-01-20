"use client";

import Link from "next/link";
import DateTime from "../DateTime";
import SocialIcon from "../SocialIcon";
import { SOCIAL_LINKS } from "../../lib/constants";

function Header() {
  return (
    <header className=" z-20 w-full border-none bg-transparent">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 text-lg font-semibold tracking-tight will-change-transform transition-[transform] duration-1000 ease-[cubic-bezier(0.03,0.98,0.52,0.99)] transform-[perspective(1000px)_rotateX(0deg)_rotateY(0deg)_scale3d(1,1,1)] group-hover:transform-[perspective(1000px)_rotateX(6deg)_rotateY(-4deg)_scale3d(1.04,1.04,1.04)]"
        >
          <span className="text-3xl sm:text-5xl transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:rotate-12">
            👋
          </span>
          <span className="hidden text-2xl font-bold tracking-wider text-amber-400 transition-all duration-300 ease-in-out dark:text-amber-400 sm:flex sm:items-baseline">
            Hi&nbsp;there
            <span className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-30">
              , welcome!
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-10">
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Play"
              className="group/play relative w-6 h-6 text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 stroke-1"
              >
                <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M9 17v-13h10v9"></path>
                <path d="M9 8h10"></path>
                <path d="M17 17v5"></path>
                <path d="M21 17v5"></path>
              </svg>
              <span className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/play:opacity-100 dark:bg-slate-100 dark:text-slate-900">
                Stay tuned
              </span>
            </Link>

           
            <SocialIcon href={SOCIAL_LINKS.github} ariaLabel="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 stroke-1"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </SocialIcon>

            <SocialIcon
              href={SOCIAL_LINKS.linkedin}
              ariaLabel="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 stroke-1"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </SocialIcon>

            <SocialIcon href={`mailto:${SOCIAL_LINKS.email}`} ariaLabel="Email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 stroke-1"
              >
                <path d="M4 4h16v16H4z" fill="none"></path>
                <path d="M4 7l8 6l8 -6"></path>
              </svg>
            </SocialIcon>

            <SocialIcon href={SOCIAL_LINKS.resume} ariaLabel="Resume">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 stroke-1"
              >
                <path d="M12 3l8 4l-8 4l-8 -4z"></path>
                <path d="M4 7v5c0 4 4 7 8 9c4 -2 8 -5 8 -9V7"></path>
              </svg>
            </SocialIcon>

          
          </div>

          <DateTime/>
        </div>
      </div>
    </header>
  );
}

export default Header;
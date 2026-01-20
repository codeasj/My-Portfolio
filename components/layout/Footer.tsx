"use client";

import SocialIcon from "../SocialIcon";
import { SOCIAL_LINKS } from "../../lib/constants";

function Footer() {
  return (
    <footer className="w-full pb-24 pt-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6">
        {/* Connect with me section */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Connect with me on
          </p>
          <div className="flex items-center gap-6">
            <SocialIcon href={SOCIAL_LINKS.github} ariaLabel="GitHub" disableScribble>
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

            <SocialIcon href={`mailto:${SOCIAL_LINKS.email}`} ariaLabel="Email" disableScribble>
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
            
            <SocialIcon
              href={SOCIAL_LINKS.linkedin}
              ariaLabel="LinkedIn"
              disableScribble
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
          </div>
        </div>
      </div>

      {/* Repeating footer text*/}
      <div className="w-full overflow-hidden mt-8">
        <div className="marquee-text text-xs text-slate-400 dark:text-slate-500">
          Thanks for visiting my portfolio! | Thanks for visiting my portfolio! | Thanks for visiting my portfolio! | Thanks for visiting my portfolio! | Thanks for visiting my portfolio! | Thanks for visiting my portfolio! | Thanks for visiting my portfolio! | Thanks for visiting my portfolio! | Thanks for visiting my portfolio! |   Thanks for visiting my portfolio! |  Thanks for visiting my portfolio!     
        </div>
      </div>
    </footer>
  );
}

export default Footer;

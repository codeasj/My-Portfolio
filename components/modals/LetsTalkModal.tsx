"use client";

import { toast } from "sonner";
import { SOCIAL_LINKS } from "../../lib/constants";

type LetsTalkModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function LetsTalkModal({ isOpen, onClose }: LetsTalkModalProps) {

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    toast.success("Email copied to clipboard");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 flex items-end ${
          !isOpen ? "pointer-events-none" : ""
        }`}
        onClick={onClose}
      >
        <div
          className={`relative w-full sm:max-w-sm sm:mx-auto rounded-t-xl bg-white p-4 pb-4 shadow-2xl transition-transform duration-300 ease-out dark:bg-slate-900 sm:rounded-xl sm:p-6 sm:pb-6 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 sm:right-4 sm:top-4"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>

          {/* Content */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
              Let&apos;s talk
            </h2>

            {/* Email Section */}
            <div className="flex flex-col gap-3">
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  For job opportunities, business inquiries, or collaborations, please reach out via email. I usually respond within 24–48 hours.
              You can also view my resume to learn more about my experience and work. Thanks!
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Yes, I&apos;ll send an email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  Let me copy the email
                </button>
                <a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsTalkModal;

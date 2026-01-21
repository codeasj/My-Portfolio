"use client";

import Image from "next/image";
import { ReactNode } from "react";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  url?: string;
  icon: ReactNode;
  images?: string[];
};

function ProjectModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  url,
  icon,
  images = [],
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-143.5 rounded-xl bg-white shadow-2xl dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center h-12 justify-end border-b border-slate-200 p-4 dark:border-slate-800">
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
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
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Icon and Title */}
          <div className="mb-4 flex items-start gap-3">
            <div className="shrink-0">{icon}</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {subtitle}
                </p>
              )}
              {url && (
                <a
                  href={url.startsWith('http') ? url : `https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-1 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 truncate block max-w-full"
                  title={url}
                >
                  {url}
                </a>
              )}
            </div>
          </div>

          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative h-24 w-40 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
                >
                  <Image
                    src={image}
                    alt={`${title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="160px"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
              {description}
            </p>
          )}

          {/* Visit Button */}
          {url && (
            <a
              href={url.startsWith('http') ? url : `https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Visit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

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

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18"></path>
    <path d="M6 6l12 12"></path>
  </svg>
);

const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

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
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  if (!isOpen) return null;

  const goToPrevImage = () => {
    setEnlargedImageIndex(
      enlargedImageIndex === 0 ? images.length - 1 : enlargedImageIndex! - 1
    );
  };

  const goToNextImage = () => {
    setEnlargedImageIndex(
      enlargedImageIndex === images.length - 1 ? 0 : enlargedImageIndex! + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      diff > 0 ? goToNextImage() : goToPrevImage();
    }
    setTouchStart(null);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-143.5 max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl [scrollbar-width:thin] [scrollbar-color:#475569_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-500/70 dark:bg-slate-900 dark:[scrollbar-color:#64748b_transparent] dark:[&::-webkit-scrollbar-thumb]:bg-slate-400/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center h-12 justify-end border-b border-slate-200 p-4 dark:border-slate-800">
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
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
            <>
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin] [scrollbar-color:#475569_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-500/70 dark:[scrollbar-color:#64748b_transparent] dark:[&::-webkit-scrollbar-thumb]:bg-slate-400/50">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setEnlargedImageIndex(idx)}
                    className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 sm:h-24 sm:w-40 transition hover:opacity-75 cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`${title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                      sizes="160px"
                    />
                  </button>
                ))}
              </div>

              {/* Image Lightbox */}
              {enlargedImageIndex !== null && (
                <div
                  className="fixed inset-0 z-110 flex items-center justify-center bg-black/80 p-4"
                  onClick={() => setEnlargedImageIndex(null)}
                >
                  <div
                    className="relative w-full max-w-3xl max-h-[80vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <Image
                      src={images[enlargedImageIndex]}
                      alt={`${title} screenshot enlarged ${enlargedImageIndex + 1}`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-[80vh] object-contain"
                      unoptimized
                      priority
                    />

                    {/* Close button */}
                    <button
                      onClick={() => setEnlargedImageIndex(null)}
                      className="absolute top-2 right-2 z-20 rounded-lg p-1 text-white transition hover:bg-white/20"
                      aria-label="Close enlarged image"
                    >
                      <CloseIcon />
                    </button>

                    {/* Navigation buttons - Outside the image */}
                    {images.length > 1 && (
                      <>
                        <button onClick={goToPrevImage} className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-3 text-black transition hover:bg-slate-200" aria-label="Previous image">
                          <PrevIcon />
                        </button>
                        <button onClick={goToNextImage} className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-3 text-black transition hover:bg-slate-200" aria-label="Next image">
                          <NextIcon />
                        </button>
                      </>
                    )}

                    {/* Image counter */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 rounded-lg bg-black/50 px-3 py-1 text-sm text-white">
                      {enlargedImageIndex + 1} / {images.length}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Description */}
          {description && (
            <p className="mb-3 text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line">
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
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

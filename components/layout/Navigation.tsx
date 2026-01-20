"use client";

import { useState } from "react";
import LetsTalkModal from "../modals/LetsTalkModal";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: true },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "hero1", label: "Let's talk", isButton: true },
  ];

  return (
    <>
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
      <div className="relative">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 rounded-full bg-slate-800 px-4 py-3 shadow-lg md:flex">
          {navItems.map((item) => {
            if (item.isButton) {
              return (
                <button
                  key={item.id}
                  onClick={() => setIsModalOpen(true)}
                  className="shrink-0 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
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
                    className="shrink-0"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              );
            }
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-white transition hover:text-sky-400"
              >
                {item.icon ? (
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
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                ) : (
                  item.label
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="relative flex w-full items-center justify-between gap-2 rounded-full bg-slate-800 px-2 py-2 shadow-lg md:hidden">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-slate-700 p-2.5 text-white transition hover:bg-slate-600"
            aria-label="Toggle menu"
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
              className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Let's talk Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-black px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-900"
          >
            <span className="whitespace-nowrap">Let&apos;s talk</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute bottom-full left-0 mb-2 w-full flex flex-col gap-1 rounded-lg bg-slate-800 p-2 shadow-lg">
              {navItems
                .filter((item) => !item.isButton)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                  >
                  
                    {item.label}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>

    {/* Let's Talk Modal */}
    <LetsTalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navigation;

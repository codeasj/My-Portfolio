"use client";

import Image from "next/image";
import { useState } from "react";

type ExperienceCardProps = {
  title: string;
  company: string;
  tenure: string;
  backgroundImage: string;
  description?: string | string[];
};

function ExperienceCard({
  title,
  company,
  tenure,
  backgroundImage,
  description,
}: ExperienceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="experience-card-lg w-full max-w-sm sm:max-w-70 md:max-w-sm lg:max-w-80 xl:w-120 aspect-video rounded-2xl bg-zinc-200 shadow-2xl cursor-pointer overflow-hidden perspective-1000 mx-auto"
      style={{ 
        transformStyle: "preserve-3d",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.1)"
      }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseLeave={() => setIsFlipped(false)}
      tabIndex={0}
    >
      <div
        className="absolute inset-0 backface-hidden p-3 sm:p-4 md:p-6 lg:p-5 xl:p-6 flex flex-col justify-between font-mono text-white transition-transform duration-700"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front side */}
        <div className="flex select-none pointer-events-none">
          <Image
            src="/icons/chip.png"
            alt=""
            width={60}
            height={48}
            className="h-6 sm:h-6 md:h-8 lg:h-4 xl:h-5 w-auto object-contain"
            unoptimized
          />
        </div>

        <p className="font-medium uppercase tracking-widest sm:tracking-[0.15em] md:tracking-[0.2em] text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl text-center wrap-break-word">
          {title}
        </p>

        <div className="flex justify-between gap-1 sm:gap-2 md:gap-4">
          <div className="min-w-0 flex-1">
            <span className="opacity-75 text-[10px] sm:text-[10px] md:text-xs">Company Name</span>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base wrap-break-word">{company}</p>
          </div>
          <div className="text-right min-w-0 flex-1">
            <span className="opacity-75 text-[10px] sm:text-[10px] md:text-xs">Tenure</span>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-base wrap-break-word">{tenure}</p>
          </div>
        </div>
      </div>

      {/* Back side - details */}
      <div
        className="absolute inset-0 backface-hidden p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 flex flex-col justify-center font-mono text-white bg-slate-900 transition-transform duration-700 overflow-hidden"
        style={{
          transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        {description && (
          <div
            className={`transition-opacity duration-500 w-full ${
              isFlipped ? "opacity-100 delay-300" : "opacity-0"
            }`}
          >
            <ul className="list-disc list-outside space-y-0.5 sm:space-y-0.5 md:space-y-1 lg:space-y-1 xl:space-y-3 text-xs sm:text-[9px] md:text-xs lg:text-[10px] xl:text-sm opacity-90 leading-relaxed pl-3 sm:pl-3 md:pl-4 lg:pl-5 xl:pl-6 pr-1.5 sm:pr-1.5 md:pr-2 lg:pr-1.5 xl:pr-0">
              {(Array.isArray(description) ? description : description.split('\n')).map((item, index) => (
                <li key={index} className="wrap-break-word pr-0.5 sm:pr-0.5 md:pr-1 lg:pr-2">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;

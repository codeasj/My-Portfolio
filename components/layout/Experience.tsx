"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import AnimatedTitle from "../AnimatedTitle";
import ExperienceCard from "../ExperienceCard";
import experienceData from "../../data/experience.json";
import { ExperienceData } from "@/lib/types";

function Experience() {
  const experiences = experienceData as ExperienceData[];

  return (
    <section id="experience" className="w-full flex flex-col items-center py-16">
      <AnimatedTitle text="Experience" />

      {/* Cards Carousel */}
      <div className="max-w-full w-full relative px-4 sm:px-8 lg:px-6 xl:px-12">
        <Swiper
          modules={[Mousewheel]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          allowTouchMove={true}
          mousewheel={{
            enabled: true,
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
            eventsTarget: 'container',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 24,
            },
          }}
          className="mySwiper"
        >
          {experiences.map((exp) => (
            <SwiperSlide key={exp.id} className="flex justify-center items-center">
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                tenure={exp.tenure}
                backgroundImage={exp.backgroundImage}
                description={exp.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient Fades */}
        <div className="h-full hidden sm:flex sm:w-20 bg-linear-to-l from-black to-transparent absolute right-0 top-0 bottom-0 z-10 pointer-events-none"></div>
        <div className="h-full hidden sm:flex sm:w-20 bg-linear-to-r from-black to-transparent absolute left-0 top-0 bottom-0 z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}

export default Experience;

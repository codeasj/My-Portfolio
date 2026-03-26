"use client";

import Image from "next/image";
import { 
  SiReact, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiApachetomcat,
  SiTypescript,
  SiJavascript,
  SiMui,
  SiRedux,
  SiJest,
  SiPython,
  SiOpenai,
  SiTensorflow
} from "react-icons/si";
import AnimatedTitle from "../AnimatedTitle";
import skillsData from "../../data/skills.json";

type SkillData = {
  name: string;
  iconType: string;
  color: string;
  learning?: boolean;
};

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact className="w-8 h-8" style={{ color: "#61DAFB" }} />,
  nextjs: <SiNextdotjs className="w-8 h-8" />,
  html5: <SiHtml5 className="w-8 h-8" style={{ color: "#E34F26" }} />,
  css3: <SiCss3 className="w-8 h-8" style={{ color: "#1572B6" }} />,
  tailwind: <SiTailwindcss className="w-8 h-8" style={{ color: "#06B6D4" }} />,
  nodejs: <SiNodedotjs className="w-8 h-8" style={{ color: "#339933" }} />,
  shadcn: <div className="w-8 h-8 rounded bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-xs">s</div>,
  mongodb: <SiMongodb className="w-8 h-8" style={{ color: "#47A248" }} />,
  postgresql: <SiPostgresql className="w-8 h-8" style={{ color: "#336791" }} />,
  mysql: <SiMysql className="w-8 h-8" style={{ color: "#4479A1" }} />,
  azure: (
    <div className="relative h-8 w-8">
      <Image
        src="/icons/azure.svg"
        alt="Azure logo"
        fill
        unoptimized
        className="object-contain"
        sizes="32px"
      />
    </div>
  ),
  tomcat: <SiApachetomcat className="w-8 h-8" style={{ color: "#F8DC75" }} />,
  typescript: <SiTypescript className="w-8 h-8" style={{ color: "#3178C6" }} />,
  javascript: <SiJavascript className="w-8 h-8" style={{ color: "#F7DF1E" }} />,
  mui: <SiMui className="w-8 h-8" style={{ color: "#007FFF" }} />,
  redux: <SiRedux className="w-8 h-8" style={{ color: "#764ABC" }} />,
  zustand: <div className="w-8 h-8 rounded bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-xs">Z</div>,
  jest: <SiJest className="w-8 h-8" style={{ color: "#C21325" }} />,
  python: <SiPython className="w-8 h-8" style={{ color: "#3776AB" }} />,
  openai: <SiOpenai className="w-8 h-8" style={{ color: "#412991" }} />,
  gemini: (
    <div className="relative h-8 w-8">
      <Image
        src="/icons/gemini.png"
        alt="Gemini logo"
        fill
        unoptimized
        className="object-contain"
        sizes="32px"
      />
    </div>
  ),
  langchain: <div className="w-8 h-8 rounded bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-xs">LC</div>,
  rag: (
    <div className="relative h-8 w-8">
      <Image
        src="/icons/rag.svg"
        alt="RAG logo"
        fill
        unoptimized
        className="object-contain"
        sizes="32px"
      />
    </div>
  ),
  vectordb: (
    <div className="relative h-8 w-8">
      <Image
        src="/icons/vectordb.svg"
        alt="Vector DB logo"
        fill
        unoptimized
        className="object-contain"
        sizes="32px"
      />
    </div>
  ),
  pinecone: (
    <div className="relative h-8 w-8">
      <Image
        src="/icons/pincone.png"
        alt="Pinecone logo"
        fill
        unoptimized
        className="object-contain"
        sizes="32px"
      />
    </div>
  ),
  tensorflow: <SiTensorflow className="w-8 h-8" style={{ color: "#FF6F00" }} />,
};

function Skills() {
  const skills = skillsData as SkillData[];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <AnimatedTitle text="Skills" />
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
        {skills.map((skill) => {
          const icon = iconMap[skill.iconType];
          return (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-4 transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {icon || (
                  <div 
                    className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xs"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                )}
              </div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center">
                {skill.name}
                {skill.learning && (
                  <span className="block text-[10px] text-slate-500 dark:text-slate-500 mt-0.5">
                    learning
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

import Image from "next/image";
import { ReactNode } from "react";
import { ICON_BG_COLORS } from "./constants";
import type { ProjectData } from "./types";

export function createProjectIcon(project: ProjectData): ReactNode {
  if (project.iconType === "text" && project.iconValue) {
    const bgColor = project.iconBg
      ? ICON_BG_COLORS[project.iconBg] || "bg-slate-500"
      : "bg-slate-500";
    return (
      <div
        className={`h-12 w-12 rounded-lg ${bgColor} flex items-center justify-center`}
      >
        <span className="text-xl font-semibold text-white">
          {project.iconValue}
        </span>
      </div>
    );
  }

  if (project.icon) {
    return (
      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
        <Image
          src={project.icon}
          alt={`${project.title} logo`}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-500">
      <span className="text-xl font-semibold text-white">?</span>
    </div>
  );
}

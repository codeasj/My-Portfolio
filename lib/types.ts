import { ReactNode } from "react";

export type ProjectData = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  url?: string;
  iconType?: "text" | "image";
  iconValue?: string;
  iconBg?: string;
  icon?: string;
  images?: string[];
};

export type ExperienceData = {
  id: string;
  title: string;
  company: string;
  tenure: string;
  backgroundImage: string;
  description?: string | string[];
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  url?: string;
  icon: ReactNode;
  images?: string[];
};
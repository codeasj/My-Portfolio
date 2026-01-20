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

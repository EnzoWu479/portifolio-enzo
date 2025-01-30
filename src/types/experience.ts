import { Tag } from "./tag";

export type IconProject = "Next.js" | "React.js" | "Spring";

export interface Experience {
  name: string;
  description: string;
  companyName: string;
  tags: Tag[];
  from: string;
  to?: string;
  icon: IconProject;
}

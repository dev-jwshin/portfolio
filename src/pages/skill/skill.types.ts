import { IconType } from "react-icons/lib";

type Category = "frontend" | "backend" | "infra" | "database" | "os" | "etc";

type SkillCategory = {
  name: string;
  category: Category;
}

type Skill = {
  icon: IconType;
  level: number;
  name: string;
  tags: string[];
}

type SkillType = {
  [key in Category]: Skill[];
};

export type { Category, SkillCategory, Skill, SkillType };
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "C++", "Python", "TypeScript", "HTML/CSS"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Visual Studio Code", "Postman"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "Adobe AI", "UI/UX Design"],
  },
];

import {
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiGithubactions,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FiCloud, FiCode, FiDatabase, FiServer } from "react-icons/fi";
import type { IconType } from "react-icons";

import { portfolioData } from "@/data/portfolio";

const skillIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  "C#": SiDotnet,
  ".NET": SiDotnet,
  "ASP.NET Core": SiDotnet,
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  NestJS: SiNodedotjs,
  Python: SiPython,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  AWS: FiCloud,
  "Azure OpenAI": FiCloud,
  LangChain: SiLangchain,
};

const categoryIcons: Record<string, IconType> = {
  Backend: FiServer,
  AI: FiCode,
  Data: FiDatabase,
  "Frontend & design": FiCode,
  "Cloud & delivery": FiCloud,
  Integrations: FiCode,
};

export const Skills = () => (
  <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
        Skills
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Tools I work with
      </h2>
      <p className="mt-4 leading-7 text-slate-400">{portfolioData.positioning}</p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      {portfolioData.techStack.map((stack) => {
        const CategoryIcon = categoryIcons[stack.category] ?? FiCode;

        return (
          <article
            key={stack.category}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="mb-4 flex items-center gap-2 font-medium text-white">
              <CategoryIcon aria-hidden="true" className="text-cyan-300" />
              {stack.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {stack.skills.map((skill) => {
                const SkillIcon = skillIcons[skill] ?? CategoryIcon;

                return (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
                  >
                    <SkillIcon aria-hidden="true" className="text-slate-400" />
                    {skill}
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  </section>
);

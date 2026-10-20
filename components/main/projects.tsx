import { ProjectCard } from "@/components/sub/project-card";
import { portfolioData } from "@/data/portfolio";

export const Projects = () => (
  <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
    <div className="mb-8">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
        Selected work
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Projects
      </h2>
      <p className="mt-3 text-slate-400">
        AI products, SaaS platforms, and original concept explorations.
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioData.projects.map((project) => (
        <ProjectCard
          key={project.title}
          src={project.image}
          title={project.title}
          description={project.description}
          type={project.type}
          techStack={project.techStack}
          isConcept={project.type.startsWith("Concept")}
        />
      ))}
    </div>
  </section>
);

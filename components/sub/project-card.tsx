import Image from "next/image";
import Link from "next/link";

import { projectSlug } from "@/lib/projects";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  type?: string;
  techStack?: readonly string[];
  isConcept?: boolean;
};

export const ProjectCard = ({
  src,
  title,
  description,
  type,
  techStack = [],
  isConcept = false,
}: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${projectSlug(title)}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        unoptimized={src.endsWith(".svg")}
        className="aspect-[4/3] w-full bg-slate-900 object-cover"
      />

      <div className="p-5">
        {type && <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">{type}</p>}
        <h3 className="mt-2 text-xl font-semibold text-white transition group-hover:text-cyan-100">{title}</h3>
        <p className="mt-3 line-clamp-4 leading-6 text-slate-400">{description}</p>
        {isConcept && (
          <p className="mt-3 text-xs text-slate-500">
            Original concept · not a live product
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.slice(0, 3).map((technology) => (
            <span key={technology} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300">
              {technology}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex text-sm font-medium text-cyan-300">
          View project <span className="ml-1 transition group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
        </span>
      </div>
    </Link>
  );
};

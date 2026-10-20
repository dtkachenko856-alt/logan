import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

import { ProjectImageSlider } from "@/components/sub/project-image-slider";
import { portfolioData } from "@/data/portfolio";
import { projectSlug } from "@/lib/projects";

const projectSkillDetails: Record<string, readonly { name: string; detail: string }[]> = {
  "Claim Health": [
    { name: "C# and .NET", detail: "Built reliable backend services for patient intake, eligibility workflows, authorization tracking, and billing operations." },
    { name: "Angular and TypeScript", detail: "Built responsive agency dashboards for intake queues, eligibility status, authorization tracking, and billing exceptions." },
    { name: "ASP.NET Core Web API", detail: "Provided secure APIs for agency staff, integrations, workflow updates, and operational dashboards." },
    { name: "Azure", detail: "Supported cloud deployment, background processing, storage, monitoring, and scalable healthcare workflows." },
    { name: "Document AI", detail: "Processed referral faxes and PDFs, extracted structured fields, and routed low-confidence results for review." },
    { name: "SQL Server", detail: "Stored patient workflow records, coverage history, authorization events, billing data, and audit history." },
    { name: "Identity and security", detail: "Applied role-based access control, encrypted data handling, audit trails, and minimum-necessary access." },
  ],
  Taiga: [
    { name: "C# and .NET", detail: "Implemented the core billing services, claim lifecycle, payer rules, reconciliation, and practice workflows." },
    { name: "Angular and TypeScript", detail: "Delivered practice and billing-team screens for claim review, denial worklists, payment status, and reconciliation." },
    { name: "ASP.NET Core Web API", detail: "Exposed normalized APIs for practices, billing teams, EHR connections, claims, and payment status." },
    { name: "EHR integrations", detail: "Connected multiple EHR systems through provider-specific adapters and a shared revenue-cycle model." },
    { name: "AI and claim validation", detail: "Reviewed clinical notes and claim data before submission, producing explainable correction recommendations." },
    { name: "SQL Server and Entity Framework", detail: "Persisted claims, payer responses, remittance records, denial patterns, and idempotent workflow states." },
    { name: "Azure and background jobs", detail: "Ran asynchronous eligibility, claim, denial, and reconciliation jobs with retries and failure isolation." },
  ],
  Frizzle: [
    { name: "Python", detail: "Powered image processing, grading workflows, mathematical validation, and model orchestration services." },
    { name: "React and TypeScript", detail: "Created the teacher experience for worksheet uploads, review queues, class trends, and grading feedback." },
    { name: "Computer vision", detail: "Analyzed photographed worksheets, detected answer regions, and interpreted written symbols and layouts." },
    { name: "AI and OCR", detail: "Recognized handwriting and math notation while exposing confidence scores for uncertain results." },
    { name: "FastAPI", detail: "Provided lightweight APIs for worksheet uploads, grading status, teacher review, and completed results." },
    { name: "React and TypeScript", detail: "Created the teacher dashboard for class trends, student work, review queues, and grading feedback." },
    { name: "AWS and async processing", detail: "Queued large worksheet batches, processed them asynchronously, and returned results without blocking teachers." },
  ],
  Bloomy: [
    { name: "Next.js, React, and TypeScript", detail: "Delivered the learner experience, adaptive lessons, mastery activities, and teacher-facing workflows." },
    { name: "TypeScript", detail: "Provided strongly typed models for standards, skills, attempts, mastery state, and classroom reporting." },
    { name: "AI tutoring", detail: "Generated Socratic hints and guided questions while keeping responses within the learner's current context." },
    { name: "Mastery engine", detail: "Tracked evidence across attempts and prerequisite skills before advancing a student to the next activity." },
    { name: "Content and RAG", detail: "Grounded AI responses in approved curriculum and standards-aligned learning content." },
    { name: "Cloud database and security", detail: "Protected student records with role-based dashboards, controlled access, and separated classroom data." },
  ],
  ProcIndex: [
    { name: "C# and .NET", detail: "Built the core accounting-agent services and domain workflows for AP, AR, vendor management, and reconciliation." },
    { name: "ASP.NET Core Web API", detail: "Exposed secure APIs for ERP synchronization, invoice workflows, approvals, agent actions, and finance dashboards." },
    { name: "Entity Framework Core", detail: "Mapped accounting entities and workflow state while keeping data access testable and maintainable." },
    { name: "SQL Server", detail: "Stored invoices, purchase orders, project dimensions, approval history, payment records, and reconciliation results." },
    { name: "Azure", detail: "Supported cloud deployment, scheduled accounting jobs, document processing, monitoring, and resilient background workflows." },
    { name: "Angular and TypeScript", detail: "Delivered finance dashboards for invoice review, approval routing, AR follow-up, vendor questions, and reconciliation exceptions." },
    { name: "REST APIs and ERP integrations", detail: "Connected the ASP.NET Core services to existing ERP records through validated, provider-specific integration contracts." },
    { name: "JWT authentication", detail: "Protected accounting workflows with authenticated sessions, role-based permissions, and controlled approval actions." },
    { name: "Docker and CI/CD", detail: "Standardized service environments and automated build, validation, and deployment steps for repeatable releases." },
    { name: "ERP integrations and AI agents", detail: "Connected agent decisions to existing ERP data, preserved audit evidence, and routed uncertain matches for human approval." },
  ],
};

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: projectSlug(project.title) }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => projectSlug(item.title) === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen px-8 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-300">
          <FiArrowLeft aria-hidden="true" /> Back to projects
        </Link>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{project.type}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-purple-400/30 px-3 py-1.5 text-sm text-cyan-200">{tag}</span>
              ))}
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer noopener" className="mt-9 inline-flex items-center gap-2 border border-cyan-300/40 px-5 py-3 text-sm text-cyan-200 transition hover:bg-cyan-300/10">
                Visit live project <FiExternalLink aria-hidden="true" />
              </a>
            ) : (
              <p className="mt-9 inline-flex border border-white/10 px-5 py-3 text-sm text-slate-400">
                Original concept · no live product
              </p>
            )}
          </div>

          <div>
            <ProjectImageSlider
              images={project.images}
              title={project.title}
              imageDescription={"imageCaption" in project ? project.imageCaption : undefined}
            />
            {"imageCaption" in project && (
              <p className="mt-3 text-xs text-slate-500">{project.imageCaption}</p>
            )}
          </div>
        </div>

        <section className="mt-20 max-w-4xl border-t border-purple-400/20 pt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Project overview</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">What this project does</h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">{project.overview}</p>
        </section>

        <section className="mt-20 grid gap-6 border-t border-purple-400/20 pt-8 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Project type</p>
            <p className="mt-2 text-lg text-white">{project.type}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Core technologies</p>
            <p className="mt-2 text-lg text-white">{project.techStack.slice(0, 3).join(" / ")}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Delivery focus</p>
            <p className="mt-2 text-lg text-white">Scalable, useful software</p>
          </div>
        </section>

        <section className="mt-20 border-t border-purple-400/20 pt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Technology stack</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Technologies used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((technology) => (
              <span key={technology} className="border border-cyan-300/25 bg-cyan-300/[0.04] px-4 py-2 text-sm text-cyan-100">
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-purple-400/20 pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Engineering notes</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Difficult issues and solutions</h2>
            </div>
            <p className="text-sm text-gray-500">How the difficult parts were handled</p>
          </div>
          <div className="mt-8 divide-y divide-purple-400/20 border-y border-purple-400/20">
            {project.challenges.map((challenge, index) => (
              <article key={challenge.issue} className="relative grid gap-4 py-7 pl-14 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:pl-16">
                <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center border border-cyan-300/40 text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-500">Issue</p>
                  <p className="mt-2 text-base font-medium leading-7 text-white">{challenge.issue}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">Resolution</p>
                  <p className="mt-2 leading-7 text-gray-300">{challenge.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

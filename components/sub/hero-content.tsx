import Link from "next/link";

import { portfolioData } from "@/data/portfolio";

export const HeroContent = () => (
  <div className="mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-6 pb-16 pt-32 sm:px-8">
    <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
      {portfolioData.hero.tagline}
    </p>
    <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
      Hi, I&apos;m {portfolioData.hero.firstName}.
      <span className="mt-2 block text-slate-400">
        {portfolioData.hero.name}
      </span>
    </h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
      {portfolioData.hero.description}
    </p>
    <p className="mt-4 text-sm text-slate-400">
      {portfolioData.contact.location}
      <span className="mx-2 text-slate-600" aria-hidden="true">/</span>
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="transition hover:text-cyan-300"
      >
        {portfolioData.contact.email}
      </a>
    </p>
    <div className="mt-9 flex flex-wrap items-center gap-4">
      <Link
        href="/#projects"
        className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        View selected work
      </Link>
      <Link
        href="/#about"
        className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        About me <span aria-hidden="true">-&gt;</span>
      </Link>
    </div>
  </div>
);

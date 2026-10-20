import { portfolioData } from "@/data/portfolio";

export const Education = () => (
  <section id="education" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
      Education
    </p>
    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      Academic background
    </h2>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {portfolioData.education.map((item) => (
        <article
          key={item.school}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
        >
          <p className="text-sm text-slate-400">{item.period}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{item.school}</h3>
          <p className="mt-1 text-slate-400">{item.degree}</p>
        </article>
      ))}
    </div>
  </section>
);

"use client";

import { motion } from "framer-motion";

import { portfolioData } from "@/data/portfolio";

export const Experience = () => (
  <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Experience</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Where I&apos;ve worked</h2>
      <div className="relative mt-8 space-y-10 border-l border-white/15 pl-6 md:pl-8">
        {portfolioData.experience.map((role, index) => (
          <motion.article key={`${role.company}-${role.title}`} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} className="relative grid gap-3 before:absolute before:left-[-25px] before:top-3 before:h-px before:w-[25px] before:bg-white/15 md:gap-8 md:before:left-[-33px] md:before:w-[33px]">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-cyan-300 ring-4 ring-slate-950 md:-left-[39px]" />
            <div>
              <h2 className="text-2xl font-semibold text-white">{role.title}</h2>
              <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-cyan-200">{role.company}</p>
                <p className="text-sm text-slate-400">{role.period}</p>
              </div>
              <p className="mt-3 w-full leading-7 text-slate-400">{role.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <h2 className="mt-16 text-2xl font-semibold text-white">Selected systems</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {portfolioData.systems.map((system, index) => (
          <motion.article
            key={system.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="text-xl font-semibold text-white">{system.title}</h3>
            <p className="mt-3 text-slate-400">{system.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {system.technologies.map((technology) => (
                <span key={technology} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300">
                  {technology}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
);
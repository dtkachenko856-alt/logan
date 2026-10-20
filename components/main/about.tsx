"use client";

import { motion } from "framer-motion";

import { portfolioData } from "@/data/portfolio";

export const About = () => (
  <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">About</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{portfolioData.about.title}</h2>
      <div className="mt-6 max-w-3xl space-y-4 leading-7 text-slate-300">
        {portfolioData.about.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="mt-10 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
        {portfolioData.about.stats.map((stat) => (
          <div key={stat.label}>
            <strong className="text-2xl font-semibold text-white">{stat.value}</strong>
            <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);
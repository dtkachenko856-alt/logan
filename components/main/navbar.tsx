"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";
import { portfolioData } from "@/data/portfolio";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 px-6 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between" aria-label="Main navigation">
        <Link
          href="/#home"
          className="flex items-center gap-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/icon.svg"
            alt=""
            width={40}
            height={40}
            draggable={false}
            className="h-9 w-9 object-contain"
          />
          <span className="font-semibold tracking-tight text-white">
            {portfolioData.identityRecord.name}
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="transition hover:text-cyan-300"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
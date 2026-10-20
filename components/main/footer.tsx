import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
      &copy; {portfolioData.identityRecord.name} {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
};

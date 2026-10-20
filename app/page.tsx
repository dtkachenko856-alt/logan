import { About } from "@/components/main/about";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main id="home" className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

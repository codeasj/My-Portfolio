import Projects from "@/components/layout/Projects";
import Hero from "../components/layout/Hero";
import Experience from "../components/layout/Experience";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Hero />
      <Projects />
      <Experience />
      <Navigation />
    </main>
  );
}

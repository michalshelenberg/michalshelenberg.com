import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="p-6 md:p-12 space-y-12">
      <header className="py-16 max-w-[800px] w-full">
        <h1 className="hidden">Michal Shelenberg</h1>
        <p className="md:text-3xl text-2xl">
          Creative developer, specializing in Next.js applications, mobile apps,
          games, and robotics
        </p>
      </header>
      <Projects />
    </main>
  );
}

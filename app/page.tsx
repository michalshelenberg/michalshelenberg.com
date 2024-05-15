import SideProjects from "@/components/side-projects";

export default function Home() {
  return (
    <main className="p-6 md:p-12 space-y-12">
      <h2 className="md:text-3xl py-16 max-w-[800px] w-full text-2xl">
        Creative developer, specializing in Next.js applications, mobile apps,
        games, and robotics
      </h2>
      <SideProjects />
    </main>
  );
}

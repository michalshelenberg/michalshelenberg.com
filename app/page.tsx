import SideProjects from "@/components/side-projects";

export default function Home() {
  return (
    <main className="p-6 md:p-12 space-y-12">
      <h2 className="text-3xl py-12 max-w-[800px] w-full">
        Web developer, specializing in Next.js applications, tools, and games
      </h2>
      <SideProjects />
    </main>
  );
}

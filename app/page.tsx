import Projects from "@/components/projects";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="p-6 md:p-12 space-y-12">
      <header className="py-8 max-w-[800px] w-full">
        <h1 className="hidden">Michal Shelenberg</h1>
        <p className="md:text-3xl text-2xl">
          Web developer, specializing in Next.js, React Native applications,
          games, and robotics
        </p>
        {/* Social badges */}
        <div className="flex flex-row gap-3 mt-6">
          <Link
            href={"https://github.com/msxgg"}
            target="_blank"
            className={`flex flex-row py-1.5 text-white pr-3 pl-1.5 gap-1.5 rounded-full bg-black dark:bg-white dark:text-black hover:scale-105 transition duration-300 items-center justify-center`}
          >
            {<FaGithub size={20} />}
            {"GitHub"}
          </Link>
          <Link
            href={"https://www.linkedin.com/in/msxgg/"}
            target="_blank"
            className={`flex flex-row py-1.5 text-white pr-3 pl-3 gap-1.5 rounded-full bg-[#0A66C2] hover:scale-105 transition duration-300 items-center justify-center`}
          >
            {<FaLinkedinIn size={20} />}
            {"LinkedIn"}
          </Link>
        </div>
      </header>
      <Projects />
    </main>
  );
}

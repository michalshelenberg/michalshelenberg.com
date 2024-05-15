import Image from "next/image";
import Link from "next/link";

const dummy_projects = [
  {
    name: "Simple Counter",
    description: "Simple counter completely free, without any ads ",
    image: "/images/simple-counter.png",
    url: "https://simplecounter.michalshelenberg.com/",
  },
  {
    name: "VŠEM Watchmarker",
    description:
      "Browser extension that adds progress tracking to Videolearning VŠEM",
    image: "/images/vsem-watchmarker.png",
    url: "https://github.com/michalshelenberg/vsem-watchmarker",
  },
  {
    name: "Hahmlet",
    description: "Tvůrce seznamu literatury k maturitě",
    image: "/images/hahmlet.png",
    url: "https://www.hahmlet.com/",
  },
];

export default function SideProjects() {
  return (
    <section className="space-y-6">
      <h3 className="uppercase tracking-widest">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {dummy_projects.map((project) => (
          <div key={project.name} className="space-y-3">
            <Link href={project.url} target="_blank">
              <Image
                width={1024}
                height={768}
                src={project.image}
                alt="Project image"
                className="md:rounded-2xl rounded-lg hover:scale-[1.03] transition duration-300 border"
              />
            </Link>
            <div className="space-y-1.5">
              <Link href={project.url} target="_blank">
                {project.name}
              </Link>
              <p className="text-black/50">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

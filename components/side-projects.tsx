import Image from "next/image";
import Link from "next/link";
import hahmlet_image from "@/public/images/hahmlet.png";
import vsem_watchmarker_image from "@/public/images/vsem-watchmarker.png";
import counterpp_image from "@/public/images/counterpp.png";

const projects = [
  {
    name: "Counter++",
    description:
      "The best counter you will find, with intuitive UI, ability to create multiple counters, and without any ads",
    image: counterpp_image,
    url: "https://counterpp.michalshelenberg.com/",
  },
  {
    name: "VŠEM Watchmarker",
    description:
      "Browser extension that adds progress tracking to Videolearning VŠEM",
    image: vsem_watchmarker_image,
    url: "https://github.com/michalshelenberg/vsem-watchmarker",
  },
  {
    name: "Hahmlet",
    description: "Generátor seznamu literatury k maturitě",
    image: hahmlet_image,
    url: "https://www.hahmlet.com/",
  },
];

export default function SideProjects() {
  return (
    <section className="space-y-6">
      <h3 className="uppercase tracking-widest">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {projects.map((project, index) => (
          <div key={project.name} className="space-y-3">
            <Link href={project.url} target="_blank">
              <Image
                src={project.image}
                width={1024}
                height={768}
                alt="Project image"
                placeholder="blur"
                priority={index < 3}
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

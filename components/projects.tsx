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
      "Rozšíření označuje zhlédnuté lekce na Videolearning VŠEM a automaticky posune video tam, kde jste skončili",
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

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="uppercase tracking-widest">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {projects.map((project, index) => (
          <article key={project.name} className="space-y-3">
            <Link href={project.url} target="_blank" aria-label={project.name}>
              <Image
                src={project.image}
                width={1024}
                height={768}
                alt={project.name}
                placeholder="blur"
                priority={index < 3}
                className="md:rounded-2xl rounded-lg hover:scale-[1.03] transition duration-300 border"
              />
            </Link>
            <div className="space-y-1.5">
              <Link
                href={project.url}
                target="_blank"
                aria-label={project.name}
              >
                {project.name}
              </Link>
              <p className="text-sm">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

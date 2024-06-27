import counterpp_image from "@/public/images/counterpp.png";
import hahmlet_image from "@/public/images/hahmlet.png";
import vsem_watchmarker_image from "@/public/images/vsem-watchmarker.png";
import Image from "next/image";
import Link from "next/link";

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
    url: "https://chromewebstore.google.com/detail/v%C5%A1em-watchmarker/jkccjafmkadkabnfjepicjocjgphidbc",
  },
  {
    name: "Hahmlet.cz",
    description: "Generátor seznamu literatury k maturitě",
    image: hahmlet_image,
    url: "https://www.hahmlet.cz/",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="uppercase tracking-widest">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-12">
        {projects.map((project, index) => (
          <article key={project.name}>
            <Link
              href={project.url}
              target="_blank"
              aria-label={project.name}
              prefetch={false}
            >
              <Image
                src={project.image}
                width={512}
                height={384}
                alt={project.name}
                placeholder="blur"
                priority={index < 3}
                className="w-full mb-4 md:rounded-2xl rounded-lg hover:scale-[1.03] transition duration-300 border border-neutral-300 dark:border-neutral-900"
              />
            </Link>
            <Link
              href={project.url}
              target="_blank"
              aria-label={project.name}
              prefetch={false}
              className="text-lg font-medium text-gray-900 dark:text-white"
            >
              {project.name}
            </Link>
            <p className="mt-1 text-sm text-gray-700 dark:text-neutral-300">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

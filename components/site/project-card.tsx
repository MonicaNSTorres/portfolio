import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Globe } from "lucide-react";
import type { ProjectItem } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-cyan-400/20 hover:bg-white/[0.07]">
      <div className="mb-6 overflow-hidden rounded-3x1 border border-white/10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
        {project.image ? (
          <div className="relative h-65 overflow-hidden rounded-[22px] border border-cyan-400/15 bg-slate-950/80">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="rounded-[22px] border border-cyan-400/15 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between">
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                {project.category}
              </div>
              <Briefcase className="h-5 w-5 text-slate-400" />
            </div>

            <div className="mt-8 space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-white/10" />
              <div className="h-3 w-1/2 rounded-full bg-white/10" />
              <div className="h-24 rounded-2xl bg-linear-to-r from-cyan-500/10 via-sky-500/10 to-violet-500/10" />
            </div>
          </div>
        )}
      </div>

      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

      <p className="mt-4 text-base leading-7 text-slate-300">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={`/projetos/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
        >
          Ver detalhes
          <ArrowRight className="h-4 w-4" />
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
        >
          <Globe className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </div>
  );
}
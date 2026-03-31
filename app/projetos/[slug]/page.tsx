import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { Reveal } from "@/components/site/reveal";
import { projects } from "@/lib/portfolio-data";
import { ProjectGallery } from "@/components/site/project-gallery";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Mônica Torres",
    };
  }

  return {
    title: `${project.title} | Mônica Torres`,
    description: project.seoDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjetoDetalhePage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-105 w-105 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-90 w-90 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
        <Reveal>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para projetos
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                {project.category}
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-cyan-400 to-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Ver projeto
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  <Globe className="h-4 w-4" />
                  GitHub
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="overflow-hidden rounded-3x1 border border-white/10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
                {project.image ? (
                  <div className="relative h-85 overflow-hidden rounded-[22px] border border-cyan-400/15 bg-slate-950/80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="rounded-[22px] border border-cyan-400/15 bg-slate-950/80 p-5">
                    <div className="h-3 w-1/3 rounded-full bg-white/10" />
                    <div className="mt-4 h-3 w-2/3 rounded-full bg-white/10" />
                    <div className="mt-4 h-28 rounded-2xl bg-linear-to-r from-cyan-500/10 via-sky-500/10 to-violet-500/10" />
                    <div className="mt-4 h-3 w-1/2 rounded-full bg-white/10" />
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Problema</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {project.problem}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Solução</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {project.solution}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Impacto</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {project.impact}
              </p>
            </div>
          </Reveal>
        </div>

        {project.gallery?.length ? (
          <div className="mt-16">
            <Reveal>
              <ProjectGallery title={project.title} images={project.gallery} />
            </Reveal>
          </div>
        ) : null}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">
                Principais entregas
              </h2>

              <div className="mt-6 grid gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">
                Esse projeto demonstra
              </h2>

              <div className="mt-6 grid gap-4">
                {[
                  "Capacidade de construir solução completa de ponta a ponta",
                  "Visão de produto e experiência visual premium",
                  "Domínio de arquitetura web moderna",
                  "Uso estratégico de dados, integrações e automação",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
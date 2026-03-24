import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import  ProjectCard  from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionTitle } from "@/components/site/section-title";
import { projects } from "@/lib/portfolio-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Mônica Torres",
  description:
    "Projetos de Mônica Torres envolvendo sistemas web, dashboards, automação, APIs e soluções full stack com foco em produto e valor de negócio.",
};

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-105 w-105 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-90 w-90 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:pt-28">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a home
          </Link>
        </Reveal>

        <div className="mt-8">
          <Reveal delay={0.05}>
            <SectionTitle
              eyebrow="Projetos"
              title="Projetos que reforçam meu posicionamento técnico e visual."
              description="Uma seleção de soluções que envolvem sistemas web, dashboards, integrações, automações e produtos digitais construídos com visão full stack."
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
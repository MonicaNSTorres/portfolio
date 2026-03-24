import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Database,
  Globe,
  MailOpen,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import  ProjectCard  from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionTitle } from "@/components/site/section-title";
import { highlights, projects, services, techGroups } from "@/lib/portfolio-data";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-105 w-105 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-90 w-90 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-[320px] rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <SiteHeader />

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-20 md:grid-cols-2 md:pt-28">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Full Stack Developer • Sistemas, APIs, Dashboards e Automação
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Eu desenvolvo
              <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                sistemas web premium
              </span>{" "}
              com arquitetura sólida, dados e experiência visual forte.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Sou Mônica Torres, desenvolvedora full stack especializada em
              aplicações modernas com Next.js, Node.js, APIs, Oracle e soluções
              orientadas a dados. Crio produtos digitais que unem performance,
              design e valor real para empresas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-cyan-400 to-sky-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,0.25)] transition hover:scale-[1.02]"
              >
                Ver projetos
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contato"
                className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Falar comigo
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              {["Next.js", "Node.js", "React", "Oracle", "APIs", "Dashboards", "Automação"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-4x1 bg-linear-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-4x1 border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Portfólio profissional</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Soluções que geram impacto real
                  </h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  Disponível para oportunidades
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-cyan-300">Projeto em destaque</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        InsightAI
                      </h3>
                    </div>
                    <Bot className="h-5 w-5 text-cyan-300" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    SaaS para transformar datasets em dashboards e insights
                    inteligentes com experiência premium e foco em tomada de
                    decisão.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                    <p className="text-sm text-slate-400">Stack principal</p>
                    <p className="mt-2 text-base font-medium text-white">
                      Next.js • Node.js • Oracle
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                    <p className="text-sm text-slate-400">Foco</p>
                    <p className="mt-2 text-base font-medium text-white">
                      Sistemas, APIs, Dashboards e Automação
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Posicionamento</p>
                  <p className="mt-2 text-base leading-7 text-slate-200">
                    Desenvolvimento soluções modernas para empresas que precisam
                    de performance, organização de dados e arquitetura confiável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.07]">
                  <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Sobre mim"
                title="Tecnologia, dados e produto com visão de negócio."
                description="Sou desenvolvedora full stack com foco em aplicações web escaláveis, integrações entre sistemas, dashboards analíticos e automação de processos. Atuo desde a construção de interfaces modernas até APIs, banco de dados e estruturação de soluções corporativas com valor real para empresas."
              />
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Meu trabalho une arquitetura, performance, experiência visual e
                organização de dados para transformar ideias em produtos digitais
                robustos, com estética premium e capacidade de crescimento.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {[
              "Desenvolvimento full stack de ponta a ponta",
              "Experiência com sistemas corporativos e fluxos internos",
              "Construção de APIs REST e integrações complexas",
              "Dashboards, relatórios e produtos orientados a dados",
              "Arquitetura frontend + backend com foco em escalabilidade",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionTitle
              eyebrow="Projetos em destaque"
              title="Alguns trabalhos que mostram meu nível técnico."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Ver todos os projetos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Stack principal"
            title="Tecnologias que uso para construir soluções reais."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {techGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Serviços"
                title="Soluções que posso desenvolver para empresas e clientes."
                description="Meu foco é construir produtos digitais que resolvam problemas reais com boa arquitetura, visual moderno e alta capacidade de evolução."
              />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {services.map((service, index) => (
              <Reveal key={service} delay={index * 0.05}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-lg text-slate-100">
                  {service}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-cyan-400/15 bg-linear-to-br from-cyan-400/10 via-slate-900 to-violet-500/10 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <SectionTitle
                  eyebrow="Diferencial"
                  title="Mais do que código: solução, produto e percepção de valor."
                  description="Eu não penso apenas na implementação. Penso em arquitetura, experiência, clareza visual, performance e em como a solução será usada no dia a dia para gerar resultado real."
                />
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Visual premium</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Interfaces modernas com estética profissional e sensação de
                        produto de alto nível.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Visão orientada a dados</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Experiência com dashboards, relatórios, integrações e
                        sistemas com forte componente analítico.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Full stack de verdade</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Frontend, backend, APIs, banco de dados e infraestrutura
                        trabalhando juntos para entregar sistemas completos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <Reveal>
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div>
                <SectionTitle
                  eyebrow="Contato"
                  title="Vamos construir algo forte juntos?"
                  description="Se você procura uma desenvolvedora para criar um sistema, dashboard, plataforma ou solução sob medida, vamos conversar."
                />

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:seuemail@exemplo.com"
                    className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-cyan-400 to-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    <Mail className="h-4 w-4" />
                    Enviar e-mail
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                  >
                    <MailOpen className="h-4 w-4" />
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                  >
                    <Globe className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                <p className="text-lg font-semibold text-white">Ideal para:</p>

                <div className="mt-6 grid gap-4">
                  {[
                    "Empresas que precisam de sistemas internos ou plataformas sob medida",
                    "Projetos com dashboards, indicadores e automação de processos",
                    "Produtos digitais modernos com Next.js, APIs e banco de dados",
                    "Clientes que buscam solução premium e visão full stack completa",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mônica Torres. Todos os direitos reservados.</p>

          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <a href="mailto:seuemail@exemplo.com" className="transition hover:text-white">
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
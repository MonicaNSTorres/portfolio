import Link from "next/link";
import { ArrowLeft, Globe, MailOpen, Mail, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { Reveal } from "@/components/site/reveal";
import { SectionTitle } from "@/components/site/section-title";
import { ContactForm } from "@/components/site/contact-form";

export default function ContatoPage() {
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
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a home
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <Reveal delay={0.05}>
            <div>
              <SectionTitle
                eyebrow="Contato"
                title="Vamos tirar sua ideia do papel com nível premium."
                description="Se você precisa de uma desenvolvedora para construir sistema, dashboard, plataforma interna, automação ou API, este é o lugar certo para começar a conversa."
              />

              <div className="mt-8 grid gap-4">
                <a
                  href="mailto:SEUEMAIL@EMAIL.COM"
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                >
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">E-mail</p>
                    <p className="text-sm text-slate-300">SEUEMAIL@EMAIL.COM</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/5512982805148"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                >
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p className="text-sm text-slate-300">Fale comigo diretamente</p>
                  </div>
                </a>

                <a
                  href="SEU_LINK_LINKEDIN"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                >
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <MailOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">LinkedIn</p>
                    <p className="text-sm text-slate-300">Perfil profissional</p>
                  </div>
                </a>

                <a
                  href="SEU_LINK_GITHUB"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                >
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">GitHub</p>
                    <p className="text-sm text-slate-300">Projetos e repositórios</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
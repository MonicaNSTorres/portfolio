import Link from "next/link";
import { MobileMenu } from "@/components/site/mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          Mônica Torres
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/#sobre" className="transition hover:text-white">
            Sobre
          </Link>
          <Link href="/projetos" className="transition hover:text-white">
            Projetos
          </Link>
          <Link href="/#stack" className="transition hover:text-white">
            Stack
          </Link>
          <Link href="/#servicos" className="transition hover:text-white">
            Serviços
          </Link>
          <Link href="/contato" className="transition hover:text-white">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300/50 hover:bg-cyan-400/15 md:inline-flex"
          >
            Vamos conversar
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
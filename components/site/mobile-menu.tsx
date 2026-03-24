"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#stack", label: "Stack" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-60 bg-slate-950/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="text-lg font-semibold text-white">
                Mônica Torres
              </span>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4 px-6 py-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-medium text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-cyan-400 to-sky-500 px-5 py-4 font-semibold text-slate-950"
              >
                Vamos conversar
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5512982805148?text=Olá%20Mônica,%20vim%20pelo%20seu%20portfólio%20e%20quero%20falar%20sobre%20um%20projeto."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.35)] transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
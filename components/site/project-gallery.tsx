"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images?.length) return null;

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              Galeria
            </span>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Visão do projeto
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
              Algumas telas selecionadas do {title} para mostrar interface,
              estrutura e experiência visual do produto.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => openImage(index)}
              className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-slate-950 text-left transition hover:border-cyan-400/30"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={image}
                  alt={`${title} - imagem ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md">
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Fechar imagem"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-2xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images[selectedIndex]}
                alt={`${title} ampliado`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
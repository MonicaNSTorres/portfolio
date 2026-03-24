"use client";

import { useRef, useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setMessage("");

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Não foi possível enviar a mensagem.");
      }

      setMessage("Mensagem enviada com sucesso.");
      formRef.current?.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar sua mensagem."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="rounded-4x1 border border-white/10 bg-white/5 p-8"
    >
      <h3 className="text-2xl font-semibold text-white">
        Envie uma mensagem
      </h3>

      <div className="mt-6 grid gap-4">
        <input
          name="name"
          placeholder="Seu nome"
          required
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
        />

        <input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          required
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
        />

        <input
          name="subject"
          placeholder="Assunto"
          required
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
        />

        <textarea
          name="message"
          placeholder="Conte um pouco sobre o projeto, vaga ou necessidade da sua empresa"
          required
          rows={6}
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-linear-to-r from-cyan-400 to-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Enviando..." : "Enviar mensagem"}
        </button>

        {message ? (
          <p className="text-sm text-slate-300">{message}</p>
        ) : null}
      </div>
    </form>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mônica Torres | Desenvolvedora Full Stack Next.js",
  description:
    "Portfólio de Mônica Torres, desenvolvedora full stack especializada em Next.js, React, APIs, dashboards e sistemas web corporativos.",
  keywords: [
    "Next.js developer",
    "React developer",
    "Full stack developer",
    "Node.js developer",
    "desenvolvedor Next.js",
    "desenvolvedor React",
    "desenvolvedor full stack",
  ],
  authors: [{ name: "Mônica Torres" }],
  openGraph: {
    title: "Mônica Torres | Full Stack Developer",
    description:
      "Portfólio com projetos de sistemas web, dashboards, automações e SaaS.",
    url: "https://seudominio.com",
    siteName: "Mônica Torres Portfolio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FactoryAI — Agentes de IA para o seu negócio",
  description:
    "Automatize processos de marketing, financeiro e desenvolvimento com agentes inteligentes construídos para o seu negócio.",
  openGraph: {
    title: "FactoryAI — Agentes de IA para o seu negócio",
    description:
      "Automatize processos de marketing, financeiro e desenvolvimento com agentes inteligentes construídos para o seu negócio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}

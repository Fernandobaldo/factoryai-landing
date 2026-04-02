"use client";

import SectionWrapper from "./SectionWrapper";

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tarefas repetitivas consomem capacidade tecnica",
    description:
      "Equipes qualificadas gastam horas em processos manuais que podem ser abstraidos: triagem de dados, geracao de relatorios, respostas padronizadas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Integracoes frageis custam caro",
    description:
      "Automacoes baseadas em regras quebram com mudancas de API, novos formatos ou edge cases. Agentes LLM lidam com variacao sem reconfiguracao.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Escalar operacoes nao deveria exigir escalar headcount",
    description:
      "A curva de crescimento de um negocio nao precisa ser linear com contratacoes. Agentes operam em paralelo, 24/7, sem onboarding.",
  },
];

export default function Problem() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Onde o crescimento{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              trava
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Padroes recorrentes que limitam a capacidade operacional de empresas em crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-lava/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lava/10 flex items-center justify-center text-lava mb-6 group-hover:bg-lava/20 transition-colors">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

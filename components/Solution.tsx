"use client";

import SectionWrapper from "./SectionWrapper";

const solutions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Agentes customizados, nao templates",
    description:
      "Cada agente e projetado para o seu workflow especifico. Arquitetura de prompts, ferramentas e memoria ajustados ao dominio do problema.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Deploy em semanas, nao meses",
    description:
      "Do mapeamento de processos ao agente rodando em producao. Iteracoes rapidas com validacao em ambiente real a cada sprint.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Operacao continua, sem dependencia",
    description:
      "Agentes em producao com monitoramento, logging e fallback. Escalam horizontalmente sem adicionar complexidade organizacional.",
  },
];

export default function Solution() {
  return (
    <SectionWrapper id="solucoes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Como construimos agentes que funcionam{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              em producao
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Engenharia de agentes com foco em confiabilidade, observabilidade e integracao real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-lava/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,69,0,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-lava/10 flex items-center justify-center text-lava mb-6 group-hover:bg-lava/20 transition-colors">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{sol.title}</h3>
                <p className="text-muted leading-relaxed">{sol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

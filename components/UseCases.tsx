"use client";

import SectionWrapper from "./SectionWrapper";

/**
 * UseCases — Cards by business area showing where AI agents deliver value.
 */
const useCases = [
  {
    area: "Marketing",
    emoji: "📈",
    description:
      "Agentes que criam conteúdo, agendam posts, analisam métricas e otimizam campanhas automaticamente.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    area: "Financeiro",
    emoji: "💰",
    description:
      "Reconciliação automática, relatórios financeiros em tempo real e alertas de anomalias sem intervenção humana.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    area: "Desenvolvimento",
    emoji: "⚡",
    description:
      "Code review automatizado, testes, deploys e monitoramento — seu time foca no que importa.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    area: "Operações",
    emoji: "⚙️",
    description:
      "Processos internos automatizados, documentação atualizada e workflows que rodam sozinhos.",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    area: "Atendimento",
    emoji: "💬",
    description:
      "Agentes que respondem, qualificam leads e resolvem chamados — 24/7, com contexto completo.",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export default function UseCases() {
  return (
    <SectionWrapper id="casos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Onde nossos agentes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              entregam valor
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            De marketing a operações — agentes especializados para cada área do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="text-3xl mb-4">{uc.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{uc.area}</h3>
              <p className="text-muted leading-relaxed text-sm">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

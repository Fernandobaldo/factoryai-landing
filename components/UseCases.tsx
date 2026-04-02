"use client";

import SectionWrapper from "./SectionWrapper";

const useCases = [
  {
    area: "Marketing",
    description:
      "Geracao de conteudo, agendamento, analise de metricas e otimizacao de campanhas via agentes com acesso a APIs de plataformas.",
  },
  {
    area: "Financeiro",
    description:
      "Reconciliacao automatica, geracao de relatorios, deteccao de anomalias e classificacao de transacoes sem intervencao manual.",
  },
  {
    area: "Desenvolvimento",
    description:
      "Code review, execucao de testes, deploy pipelines e monitoramento de incidentes com agentes integrados ao CI/CD.",
  },
  {
    area: "Operacoes",
    description:
      "Automacao de workflows internos, atualizacao de documentacao, orquestracao de processos cross-team.",
  },
  {
    area: "Atendimento",
    description:
      "Triagem de tickets, respostas contextuais, qualificacao de leads e escalacao inteligente — 24/7.",
  },
];

export default function UseCases() {
  return (
    <SectionWrapper id="casos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Dominios de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              aplicacao
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Agentes especializados para dominios com alta densidade de tarefas repetitivas e integracoes.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="min-w-[240px] md:min-w-0 group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-lava/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{uc.area}</h3>
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

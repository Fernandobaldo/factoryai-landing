"use client";

import SectionWrapper from "./SectionWrapper";

/**
 * HowItWorks — 3-step horizontal timeline showing the process.
 */
const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Entendemos seu negócio, seus processos e onde a IA pode gerar mais impacto. Sem compromisso.",
  },
  {
    number: "02",
    title: "Agente Construído",
    description:
      "Construímos o agente sob medida, integramos com suas ferramentas e testamos até funcionar perfeitamente.",
  },
  {
    number: "03",
    title: "Resultado Entregue",
    description:
      "Seu agente entra em produção, rodando 24/7. Monitoramos, otimizamos e garantimos o resultado.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              funciona
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Do primeiro contato ao agente rodando — simples e direto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-lava/40 via-lava/20 to-lava/40" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-lava/40 bg-dark text-lava font-bold text-sm mb-6 z-10">
                {step.number}
              </div>

              {/* Arrow between steps (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-2">
                  <svg className="w-4 h-4 text-lava/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

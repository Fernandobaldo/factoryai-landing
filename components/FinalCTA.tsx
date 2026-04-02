"use client";

import SectionWrapper from "./SectionWrapper";

/**
 * FinalCTA — Strong closing section with CTA and contact email.
 */
export default function FinalCTA() {
  return (
    <SectionWrapper id="contato" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Pronto para automatizar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              seu negócio?
            </span>
          </h2>

          <p className="mt-6 text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Agende uma conversa sem compromisso. Vamos entender seus processos e
            mostrar como agentes de IA podem transformar sua operação.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="mailto:contato@factoryai.com.br"
              className="group px-10 py-4 bg-lava hover:bg-lava-light text-white font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,69,0,0.4)] flex items-center gap-2"
            >
              Fale com a gente
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className="text-sm text-muted">
              ou envie um email para{" "}
              <a
                href="mailto:contato@factoryai.com.br"
                className="text-lava hover:text-lava-light transition-colors"
              >
                contato@factoryai.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

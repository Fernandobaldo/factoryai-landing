"use client";

import SectionWrapper from "./SectionWrapper";

/**
 * SocialProof — 3 placeholder testimonial cards ready for real content.
 */
const testimonials = [
  {
    quote:
      "Em 2 semanas, nosso processo de relatórios financeiros que levava 3 dias passou a ser feito em 15 minutos. O ROI foi absurdo.",
    name: "Maria S.",
    role: "CFO, Empresa de Tecnologia",
    initials: "MS",
  },
  {
    quote:
      "O agente de atendimento resolveu 70% dos tickets sem intervenção humana. Nossa equipe finalmente pode focar no que importa.",
    name: "Carlos R.",
    role: "Head de Operações, SaaS B2B",
    initials: "CR",
  },
  {
    quote:
      "Automatizamos toda a geração de conteúdo e agendamento de posts. O que levava 20 horas por semana agora roda sozinho.",
    name: "Ana L.",
    role: "Diretora de Marketing, E-commerce",
    initials: "AL",
  },
];

export default function SocialProof() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            O que dizem sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              nossos agentes
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 text-lava mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lava/10 flex items-center justify-center text-lava text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

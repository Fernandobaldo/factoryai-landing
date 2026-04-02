"use client";

import SectionWrapper from "./SectionWrapper";

/**
 * LogoStrip — Horizontal scrolling marquee showing AI platform logos.
 * CSS-only infinite scroll animation for performance.
 */
const logos = [
  "OpenAI",
  "Anthropic",
  "Google Gemini",
  "Meta AI",
  "Mistral",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-8 text-muted/40 text-lg font-medium whitespace-nowrap select-none">
      <div className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-xs font-bold text-white/20">
        {name.charAt(0)}
      </div>
      {name}
    </div>
  );
}

export default function LogoStrip() {
  return (
    <SectionWrapper className="py-16 border-y border-white/5">
      <p className="text-center text-sm text-muted/60 uppercase tracking-widest mb-8">
        Powered by
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="flex">
          <div className="flex animate-marquee">
            {logos.map((logo) => (
              <LogoItem key={logo} name={logo} />
            ))}
            {logos.map((logo) => (
              <LogoItem key={`dup-${logo}`} name={logo} />
            ))}
          </div>
          <div className="flex animate-marquee2">
            {logos.map((logo) => (
              <LogoItem key={`dup2-${logo}`} name={logo} />
            ))}
            {logos.map((logo) => (
              <LogoItem key={`dup3-${logo}`} name={logo} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

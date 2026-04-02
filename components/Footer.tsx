"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-lava to-lava-light flex items-center justify-center">
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <span className="text-white font-semibold">
              Factory<span className="text-lava">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted">
            <a href="#solucoes" className="hover:text-white transition-colors">
              Solucoes
            </a>
            <a href="#casos" className="hover:text-white transition-colors">
              Dominios
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Processo
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            &copy; 2025 FactoryAI — Todos os direitos reservados
          </p>
          <p className="text-xs text-muted/60">
            <a
              href="mailto:contact@ftrproduction.com"
              className="hover:text-muted transition-colors"
            >
              contact@ftrproduction.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

/**
 * Footer — Minimal footer with FactoryAI branding and links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-lava to-lava-light flex items-center justify-center">
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <span className="text-white font-semibold">
              Factory<span className="text-lava">AI</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted">
            <a href="#solucoes" className="hover:text-white transition-colors">
              Soluções
            </a>
            <a href="#casos" className="hover:text-white transition-colors">
              Casos de uso
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Como funciona
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            © {currentYear} FactoryAI. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted/60">
            <a href="#" className="hover:text-muted transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-muted transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

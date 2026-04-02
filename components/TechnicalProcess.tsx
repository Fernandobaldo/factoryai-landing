"use client";

import SectionWrapper from "./SectionWrapper";

export default function TechnicalProcess() {
  return (
    <SectionWrapper id="como-funciona" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Processo de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              engenharia
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Arquitetura tecnica e integracao em detalhe.
          </p>
        </div>

        {/* Part A — Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-semibold mb-4 text-lava">Stack de execucao</h3>
            <p className="text-muted leading-relaxed">
              Agentes sao construidos sobre camadas de orquestracao LLM (LangChain, LlamaIndex
              ou custom), conectados a ferramentas via function calling. Memoria de curto prazo
              (contexto de sessao) e longo prazo (vector store) garantem continuidade. Loops de
              planejamento — ReAct, Chain-of-Thought — definem a estrategia de execucao, e
              camadas de validacao de output asseguram conformidade antes de qualquer acao.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-semibold mb-4 text-lava">Integracao com seu ambiente</h3>
            <p className="text-muted leading-relaxed">
              Agentes se conectam via REST APIs, webhooks ou integracao direta por SDK. Podem
              ler e escrever em bancos de dados, chamar servicos externos, enviar mensagens e
              disparar workflows — tudo dentro de escopos de permissao definidos. A integracao
              e desenhada para operar no seu ambiente existente, sem exigir migracoes.
            </p>
          </div>
        </div>

        {/* Part B — Animated SVG Pipeline */}
        <div className="relative rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 overflow-hidden">
          <style>{`
            @keyframes pulseDot {
              0% { offset-distance: 0%; opacity: 0; }
              5% { opacity: 1; }
              95% { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            @keyframes nodeGlow {
              0%, 100% { filter: drop-shadow(0 0 0px rgba(255,69,0,0)); }
              50% { filter: drop-shadow(0 0 12px rgba(255,69,0,0.6)); }
            }
            .pipeline-dot {
              offset-path: path('M 80 50 L 920 50');
              animation: pulseDot 4s linear infinite;
            }
            .node-0 { animation: nodeGlow 4s ease-in-out infinite; animation-delay: 0s; }
            .node-1 { animation: nodeGlow 4s ease-in-out infinite; animation-delay: 0.65s; }
            .node-2 { animation: nodeGlow 4s ease-in-out infinite; animation-delay: 1.3s; }
            .node-3 { animation: nodeGlow 4s ease-in-out infinite; animation-delay: 1.95s; }
            .node-4 { animation: nodeGlow 4s ease-in-out infinite; animation-delay: 2.6s; }
            .node-5 { animation: nodeGlow 4s ease-in-out infinite; animation-delay: 3.25s; }
          `}</style>
          <svg
            viewBox="0 0 1000 100"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#444" />
              </marker>
            </defs>

            {/* Connecting lines */}
            <line x1="130" y1="50" x2="175" y2="50" stroke="#333" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="295" y1="50" x2="340" y2="50" stroke="#333" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="460" y1="50" x2="505" y2="50" stroke="#333" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="595" y1="50" x2="640" y2="50" stroke="#333" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="790" y1="50" x2="835" y2="50" stroke="#333" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Nodes */}
            {[
              { x: 15, label: "Input" },
              { x: 180, label: "LLM Core" },
              { x: 345, label: "Tool Calls" },
              { x: 510, label: "Memory" },
              { x: 645, label: "Validator" },
              { x: 840, label: "Action" },
            ].map((node, i) => (
              <g key={i} className={`node-${i}`}>
                <rect
                  x={node.x}
                  y="25"
                  width="110"
                  height="50"
                  rx="10"
                  fill="#141414"
                  stroke="#333"
                  strokeWidth="1"
                />
                <text
                  x={node.x + 55}
                  y="55"
                  textAnchor="middle"
                  fill="#aaa"
                  fontSize="13"
                  fontFamily="system-ui, sans-serif"
                >
                  {node.label}
                </text>
              </g>
            ))}

            {/* Animated pulse dot */}
            <circle r="5" fill="#ff4500" className="pipeline-dot" />
          </svg>
        </div>
      </div>
    </SectionWrapper>
  );
}

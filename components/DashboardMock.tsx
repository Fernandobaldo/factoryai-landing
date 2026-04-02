"use client";

import SectionWrapper from "./SectionWrapper";

function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-[#0a0a0a] shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#1a1a1a] rounded-md px-3 py-1 text-xs text-muted/60 text-center max-w-md mx-auto">
            {url}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

function Sparkline() {
  const bars = [3, 5, 4, 7, 6, 8, 5, 9, 7, 6];
  return (
    <div className="flex items-end gap-[2px] h-4">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-sm bg-lava/40"
          style={{ height: `${(h / 9) * 100}%` }}
        />
      ))}
    </div>
  );
}

function AgentCard({ name, status, lastRun, tasks }: { name: string; status: "running" | "idle"; lastRun: string; tasks: number }) {
  return (
    <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-white/90">{name}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${status === "running" ? "bg-green-500/10 text-green-400" : "bg-white/5 text-muted/60"}`}>
          {status === "running" ? "Running" : "Idle"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-muted/50">Last run: {lastRun}</p>
          <p className="text-[10px] text-muted/50">{tasks} tasks completed</p>
        </div>
        <Sparkline />
      </div>
    </div>
  );
}

function DashboardOverview() {
  const sidebarItems = ["Agents", "Tasks", "Logs", "Integrations", "Settings"];
  const agents = [
    { name: "Marketing Analyzer", status: "running" as const, lastRun: "2 min ago", tasks: 1247 },
    { name: "Invoice Processor", status: "running" as const, lastRun: "14 min ago", tasks: 892 },
    { name: "Support Triage", status: "idle" as const, lastRun: "1h ago", tasks: 3401 },
    { name: "Data Pipeline", status: "running" as const, lastRun: "< 1 min", tasks: 5620 },
    { name: "Report Generator", status: "idle" as const, lastRun: "3h ago", tasks: 418 },
    { name: "Lead Qualifier", status: "running" as const, lastRun: "6 min ago", tasks: 2150 },
  ];

  return (
    <BrowserChrome url="app.factoryai.com/dashboard">
      <div className="flex min-h-[340px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-white/5 bg-[#0d0d0d] p-3 hidden sm:block">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-lava to-lava-light flex items-center justify-center">
              <span className="text-white font-bold text-[8px]">F</span>
            </div>
            <span className="text-xs font-semibold text-white/80">FactoryAI</span>
          </div>
          {sidebarItems.map((item, i) => (
            <div
              key={i}
              className={`px-2 py-1.5 rounded text-xs mb-1 cursor-default ${i === 0 ? "bg-white/5 text-white" : "text-muted/50 hover:text-muted/80"}`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white/80">Active Agents</h3>
            <span className="text-[10px] text-muted/40">6 agents / 4 running</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {agents.map((agent, i) => (
              <AgentCard key={i} {...agent} />
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function TaskView() {
  const steps = [
    { label: "Fetch data from CRM", status: "done" },
    { label: "Normalize records", status: "done" },
    { label: "Analyzing patterns", status: "progress" },
    { label: "Generate report", status: "pending" },
    { label: "Send to Slack", status: "pending" },
  ];

  const logLines = [
    "[12:04:01] Connecting to CRM API...",
    "[12:04:02] Fetched 1,847 records from salesforce.orders",
    "[12:04:03] Normalizing date formats (ISO 8601)...",
    "[12:04:04] Deduplicating entries... 23 duplicates removed",
    "[12:04:05] Running pattern analysis on Q1 revenue data...",
    "[12:04:06] Identified 3 anomalies in region LATAM",
    "[12:04:07] Processing segment breakdown...",
  ];

  return (
    <BrowserChrome url="app.factoryai.com/agents/invoice-processor/task/q1-report">
      <div className="p-4 min-h-[300px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-white/80">Processar relatorio de vendas Q1</h3>
          <span className="text-[10px] px-2 py-0.5 rounded bg-lava/10 text-lava">In Progress</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Steps */}
          <div>
            <p className="text-[10px] text-muted/40 uppercase tracking-wider mb-2">Pipeline Steps</p>
            <div className="space-y-2">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  {step.status === "done" && (
                    <span className="text-green-400 w-4 text-center">&#10003;</span>
                  )}
                  {step.status === "progress" && (
                    <span className="text-lava w-4 text-center animate-spin text-[10px]">&#10227;</span>
                  )}
                  {step.status === "pending" && (
                    <span className="text-muted/30 w-4 text-center">&#9675;</span>
                  )}
                  <span className={step.status === "done" ? "text-muted/60" : step.status === "progress" ? "text-white" : "text-muted/30"}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <p className="text-[10px] text-muted/40 uppercase tracking-wider mb-1">Token Usage</p>
              <div className="flex items-center gap-4 text-xs text-muted/50">
                <span>Input: 12,480</span>
                <span>Output: 3,210</span>
                <span>Total: 15,690</span>
              </div>
            </div>
          </div>

          {/* Log output */}
          <div>
            <p className="text-[10px] text-muted/40 uppercase tracking-wider mb-2">Live Output</p>
            <div className="bg-[#080808] rounded-lg p-3 font-mono text-[10px] text-green-400/70 space-y-1 h-[180px] overflow-hidden">
              {logLines.map((line, i) => (
                <div key={i} className={i === logLines.length - 1 ? "text-lava/80" : ""}>
                  {line}
                </div>
              ))}
              <div className="text-lava/60 animate-pulse">_</div>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export default function DashboardMock() {
  return (
    <SectionWrapper className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Plataforma de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lava to-lava-light">
              gerenciamento
            </span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Visibilidade completa sobre cada agente, tarefa e execucao.
          </p>
        </div>

        <div className="space-y-12">
          {/* Mock 1 — Dashboard Overview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.06)_0%,transparent_60%)] pointer-events-none rounded-3xl" />
            <div className="relative" style={{ transform: "perspective(1200px) rotateX(2deg) rotateY(-1deg)" }}>
              <DashboardOverview />
            </div>
          </div>

          {/* Mock 2 — Task View */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.06)_0%,transparent_60%)] pointer-events-none rounded-3xl" />
            <div className="relative" style={{ transform: "perspective(1200px) rotateX(2deg) rotateY(1deg)" }}>
              <TaskView />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

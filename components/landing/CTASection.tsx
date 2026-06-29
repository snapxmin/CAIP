export function CTASection() {
  return (
    <section id="contact" className="px-6 pb-10 pt-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 text-center md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Early Access
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          一起建设 Coding Agent 时代的基础设施门户
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          如果你正在评估 Agent 选型、沉淀团队工作流，或希望量化 AI Coding ROI，CAIP 将从这些真实问题出发构建产品。
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@caip.dev?subject=CAIP%20Early%20Access"
            className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            申请早期访问
          </a>
          <a
            href="#benchmark"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-200 hover:bg-white/10"
          >
            回到核心模块
          </a>
        </div>
      </div>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-2 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>CAIP - Coding Agent Intelligence Platform</p>
        <p>Benchmark, Workflow, Governance, ROI.</p>
      </footer>
    </section>
  );
}

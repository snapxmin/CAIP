import { hero, navItems } from "@/content/landing";

export function Hero() {
  return (
    <section className="relative px-6 py-6 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
        <a href="#" className="flex items-center gap-3" aria-label="CAIP home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
            C
          </span>
          <span className="font-semibold tracking-wide text-white">CAIP</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Request Access
        </a>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 pb-24 pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-32 lg:pt-32">
        <div>
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            {hero.eyebrow}
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#benchmark"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-200 hover:bg-white/10"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {hero.proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/30">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">CAIP Intelligence Layer</p>
                <p className="mt-1 font-semibold text-white">Agent Operating System</p>
              </div>
              <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                Live MVP
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {[
                ["Benchmark", "Cursor vs Claude Code vs Copilot"],
                ["Workflow", "Java microservice debugging playbook"],
                ["ROI", "Contribution, cycle time, governance cost"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

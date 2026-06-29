import { coreModules } from "@/content/landing";
import { SectionHeading } from "./SectionHeading";

const moduleIds = ["benchmark", "workflows", "enterprise"];

export function CoreModules() {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="MVP Focus"
          title="先做三个最能形成壁垒的模块"
          description="避开新闻聚合和产品导航红海，优先建设可评测、可复用、可治理、可衡量的 Agent Operating System 基础能力。"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {coreModules.map((module, index) => (
            <article
              id={moduleIds[index]}
              key={module.name}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-lg font-black text-slate-950">
                {index + 1}
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">{module.name}</h3>
              <p className="mt-3 text-lg font-medium text-cyan-200">{module.question}</p>
              <p className="mt-5 leading-7 text-slate-300">{module.description}</p>
              <div className="mt-7 space-y-3">
                {module.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

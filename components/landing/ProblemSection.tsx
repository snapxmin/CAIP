import { painPoints } from "@/content/landing";
import { SectionHeading } from "./SectionHeading";

export function ProblemSection() {
  return (
    <section id="insights" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industry Pain"
          title="不同角色看到的是完全不同的问题"
          description="Coding Agent 生态不缺产品，缺少帮助不同角色理解、评估、治理、落地和协作使用 Agent 的基础设施。"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {painPoints.map((point) => (
            <article
              key={point.audience}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold text-cyan-300">{point.audience}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{point.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{point.description}</p>
              <ul className="mt-6 space-y-3">
                {point.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

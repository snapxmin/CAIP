import { roadmap } from "@/content/landing";
import { SectionHeading } from "./SectionHeading";

export function RoadmapSection() {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Build Order"
          title="从可信数据开始，走向组织级飞轮"
          description="首版门户先建立行业认知入口，再逐步把评测数据、工作流资产和企业治理指标连接起来。"
        />

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70">
          {roadmap.map((item, index) => (
            <div
              key={item.phase}
              className="grid gap-5 border-white/10 p-7 md:grid-cols-[8rem_1fr] md:p-9 [&:not(:last-child)]:border-b"
            >
              <div className="text-4xl font-black text-cyan-300">{item.phase}</div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
                {index === 0 ? (
                  <p className="mt-4 text-sm text-slate-400">
                    第一阶段会直接支撑首页的 Benchmark 内容和后续榜单页。
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

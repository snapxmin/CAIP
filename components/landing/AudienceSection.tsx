import { audiences } from "@/content/landing";
import { SectionHeading } from "./SectionHeading";

export function AudienceSection() {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who It Serves"
          title="从个人效率到组织治理"
          description="CAIP 的核心不是替某一个 Agent 做广告，而是为不同角色提供跨工具、跨流程、跨组织的判断框架。"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.role}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-sm font-semibold text-cyan-300">{audience.role}</p>
              <p className="mt-4 leading-7 text-slate-200">{audience.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { positioning } from "@/content/landing";

export function PositioningSection() {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Positioning
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {positioning.headline}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-200">{positioning.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {positioning.pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-sm font-semibold text-white"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

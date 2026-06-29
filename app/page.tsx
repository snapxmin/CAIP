import { AudienceSection } from "@/components/landing/AudienceSection";
import { CoreModules } from "@/components/landing/CoreModules";
import { CTASection } from "@/components/landing/CTASection";
import { Hero } from "@/components/landing/Hero";
import { PositioningSection } from "@/components/landing/PositioningSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { RoadmapSection } from "@/components/landing/RoadmapSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ProblemSection />
      <CoreModules />
      <PositioningSection />
      <AudienceSection />
      <RoadmapSection />
      <CTASection />
    </main>
  );
}

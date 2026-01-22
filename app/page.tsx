import { TenantLayout } from "@/components/layouts/TenantLayout";
import { Hero } from "@/components/sections/Hero";
import { ThesisSection } from "@/components/sections/ThesisSection";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {
  return (
    <TenantLayout>
      <Hero />
      <ThesisSection />
      <Timeline />
    </TenantLayout>
  );
}

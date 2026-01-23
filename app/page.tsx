import { TenantLayout } from "@/components/layouts/TenantLayout";
import { Hero } from "@/components/sections/Hero";
import { ThesisSection } from "@/components/sections/rocks/ThesisSection";
import { Timeline } from "@/components/sections/engineer/Timeline";

// Force dynamic rendering to ensure middleware runs
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <TenantLayout>
      <Hero />
      <ThesisSection />
      <Timeline />
    </TenantLayout>
  );
}

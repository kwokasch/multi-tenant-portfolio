import { TenantLayout } from "@/components/layouts/TenantLayout";
import { AboutSection } from "@/components/sections/About";

// Force dynamic rendering to ensure middleware runs
export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <TenantLayout>
      <AboutSection />
    </TenantLayout>
  );
}

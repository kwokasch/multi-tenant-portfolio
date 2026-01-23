import { TenantLayout } from "@/components/layouts/TenantLayout";
import { ProjectsSection } from "@/components/sections/rocks/Projects";

// Force dynamic rendering to ensure middleware runs
export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return (
    <TenantLayout>
      <ProjectsSection />
    </TenantLayout>
  );
}

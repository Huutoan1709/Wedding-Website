import { FAQSection } from "@/features/home/components/FAQSection";
import { FloatingContactButtons } from "@/features/home/components/FloatingContactButtons";
import { HeroSection } from "@/features/home/components/HeroSection";
import { SiteFooter } from "@/features/home/components/SiteFooter";
import { SiteHeader } from "@/features/home/components/SiteHeader";
import { TemplateGallery } from "@/features/home/components/TemplateGallery";
import { VoucherModal } from "@/features/home/components/VoucherModal";
import { WhyChooseSection } from "@/features/home/components/WhyChooseSection";
import { WorkflowSection } from "@/features/home/components/WorkflowSection";
import { couplePreview, templates } from "@/features/home/data/templates";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection couple={couplePreview} />
        <TemplateGallery templates={templates} />
        <WorkflowSection />
        <WhyChooseSection />
        <FAQSection />
      </main>
      <SiteFooter />
      <FloatingContactButtons />
      <VoucherModal />
    </>
  );
}

import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import GuideSection from "@/components/landing/GuideSection";
import PlanSection from "@/components/landing/PlanSection";
import TransformationSection from "@/components/landing/TransformationSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <TransformationSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;

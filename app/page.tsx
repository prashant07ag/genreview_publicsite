import Hero from "@/components/here_section";
import FeaturesSection from "@/components/feature_section";
import TestimonialsSection from "@/components/testimonial_section";
import ReputationBoostSection from "@/components/reputation_section";
import ReadyToStandOutSection from "@/components/standout_section";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <ReputationBoostSection />
      <ReadyToStandOutSection />
    </div>
  );
}

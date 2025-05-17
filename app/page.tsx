import Hero from "@/components/here_section";
import FeaturesSection from "@/components/feature_section";
import TestimonialsSection from "@/components/testimonial_section";
import ReputationBoostSection from "@/components/reputation_section";
import ReadyToStandOutSection from "@/components/standout_section";
import NPSFilterSection from "@/components/nps_section";
import AnalyticsDashboardSection from "@/components/analytics_section";
import GoogleAnalyticsSection from "@/components/googleanalytics_section";
import ReviewsSection  from "@/components/reviews_section";
import ClientsSection from "@/components/clients";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ClientsSection />
      <FeaturesSection />
      <ReviewsSection />
      <TestimonialsSection />
      <AnalyticsDashboardSection />
      <GoogleAnalyticsSection />
      <NPSFilterSection />
      <ReputationBoostSection />
      <ReadyToStandOutSection />
    </div>
  );
}

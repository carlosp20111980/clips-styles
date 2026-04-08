import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <InfoSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;

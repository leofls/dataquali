import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ClientsSection from "@/components/ClientsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import BreathingBanner from "@/components/BreathingBanner";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import StatsSection from "@/components/StatsSection";
import CustomerPortalSection from "@/components/CustomerPortalSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <BreathingBanner />
      <ClientsSection />
      <ProfessionalsSection />
      <BlogPreviewSection />
      <CustomerPortalSection />
      <CTASection />
      <Footer />
    </div>
  );
}

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TreatmentSection from "./TreatmentSection";
import TeamSection from "./TeamSection";
import AppointmentSection from "./AppointmentSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TreatmentSection />
      <TeamSection />
      <AppointmentSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}

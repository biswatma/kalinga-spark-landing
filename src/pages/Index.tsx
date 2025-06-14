
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PricingPlans } from "@/components/PricingPlans";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      <ThemeToggle />
      <Hero />
      <Features />
      <PricingPlans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

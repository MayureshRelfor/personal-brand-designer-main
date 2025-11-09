import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ThemeSwitcher />
      <main>
        <Hero />
        <Stats />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

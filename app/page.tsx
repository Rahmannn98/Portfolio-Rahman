import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Header from "@/components/ui/Header";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <section id="home">
        <HeroGeometric
          badge="Saifulloh Rahman — Portfolio"
          title1="Creative"
          title2="Developer"
        />
      </section>
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="projects" className="scroll-mt-24">
        <StackFeatureSection />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
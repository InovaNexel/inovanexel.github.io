import { Audience } from "@/components/Audience";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HashScrollHandler } from "@/components/HashScrollHandler";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { NoticiasSection } from "@/components/NoticiasSection";
import { Partners } from "@/components/Partners";
import { Solutions } from "@/components/Solutions";
import { SystemsShowcase } from "@/components/SystemsShowcase";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <SystemsShowcase />
        <Solutions />
        <Audience />
        <NoticiasSection />
        <Partners />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

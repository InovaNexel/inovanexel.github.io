import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HashScrollHandler } from "@/components/HashScrollHandler";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NoticiasSection } from "@/components/NoticiasSection";
import { Partners } from "@/components/Partners";
import { Projects } from "@/components/Projects";
import { Solutions } from "@/components/Solutions";
//import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Header />
      <main className="bg-[#F8FAFC]">
        <Hero />
        <Solutions />
        {/*<Stats />*/}
        <Projects />
        <Partners />
        <NoticiasSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

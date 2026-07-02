import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutBanner } from "@/components/quem-somos/AboutBanner";
import { AboutHero } from "@/components/quem-somos/AboutHero";
import { DifferentiatorsSection } from "@/components/quem-somos/DifferentiatorsSection";
import { MvvSection } from "@/components/quem-somos/MvvSection";
import { TeamSection } from "@/components/quem-somos/TeamSection";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
 title: "Quem Somos | Inova Nexel",
 description:
    "Conheça a Inova Nexel, empresa especializada em inovação, transformação digital, tecnologia e soluções estratégicas para gerar impacto positivo na sociedade.",
};

export default function QuemSomosPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8FAFC]">
        <AboutHero />
        <MvvSection />
        <TeamSection />
        <DifferentiatorsSection />
        <AboutBanner />
      </main>
      <Footer />
    </>
  );
}  
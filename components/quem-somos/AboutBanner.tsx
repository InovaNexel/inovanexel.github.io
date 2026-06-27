import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutBanner() {
  return (
    <section className="bg-[#F8FAFC] pb-16 pt-4 sm:pb-20">
      <div className="container-site">
        <ScrollReveal>
          <div className="relative h-[220px] overflow-hidden rounded-[20px] sm:h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
              alt="Cidade inteligente com áreas verdes"
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#03152F]/30 to-transparent"
              aria-hidden
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

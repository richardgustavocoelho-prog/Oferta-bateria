"use client";

import { Button } from '@/components/ui/button';
import Image from "next/image";
import { PlayCircle } from "lucide-react";

type HeroSectionProps = {
  onCTAClick: () => void;
};

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center pt-20 pb-12 md:pt-28"
      style={{ 
        background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--background)), transparent), radial-gradient(ellipse 80% 50% at 50% 120%, hsl(var(--secondary)), transparent), hsl(var(--background))"
      }}
    >
      <div className="container px-4 md:px-6 text-center flex flex-col items-center">
        
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline uppercase">
            Pack com <span className="text-accent">50 AULAS</span> para Tocar Bateria na Igreja Ainda Este <span className="text-accent">MÊS</span>
          </h1>

          <div className="my-8 flex flex-col items-center">
            <div className="relative w-full max-w-xs aspect-[9/16] bg-background/50 rounded-xl overflow-hidden">
                <iframe 
                  src="https://player.vimeo.com/video/1143638883?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                  className="absolute top-0 left-0 w-full h-full"
                  title="PACK 50 AULAS DE BATERIA"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como tocar bateria na igreja com um método passo a passo, toque seus primeiros louvores em poucas semanas.
          </p>
          
          <div className="mt-8 flex flex-col items-center w-full gap-4">
            <Button
              size="lg"
              onClick={onCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg rounded-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md relative overflow-hidden cta-shine animate-pulse-cta"
            >
              ✅ QUERO MEU PACK
            </Button>
            <div className="mt-2">
              <Image
                src="https://i.imgur.com/NvmTGMd.png"
                alt="Formas de pagamento"
                width={250}
                height={45}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

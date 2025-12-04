"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonialImages = [
  {
    src: "https://i.imgur.com/e40bwPu.png",
    alt: "Depoimento do Instagram 1",
    imageHint: "instagram testimonial"
  },
  {
    src: "https://i.imgur.com/DTcJbP5.png",
    alt: "Depoimento do Instagram 2",
    imageHint: "instagram testimonial"
  },
  {
    src: "https://i.imgur.com/8F6C1Q1.png",
    alt: "Depoimento do Instagram 3",
    imageHint: "instagram testimonial"
  },
  {
    src: "https://i.imgur.com/2RhVqwa.png",
    alt: "Depoimento do Instagram 4",
    imageHint: "instagram testimonial"
  },
  {
    src: "https://i.imgur.com/bIRIjku.png",
    alt: "Depoimento do Instagram 5",
    imageHint: "instagram testimonial"
  },
  {
    src: "https://i.imgur.com/VpsVF39.png",
    alt: "Depoimento do Instagram 6",
    imageHint: "instagram testimonial"
  },
];


export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-foreground tracking-wide">
            O Que Dizem Nossos <span className="text-primary">Alunos</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Veja como esse material tem acelerado o aprendizado de quem deseja tocar na igreja.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center">
            <div className="relative w-full max-w-xs aspect-[9/16] bg-background/50 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(249,178,51,0.3)] border border-accent/50">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://player.vimeo.com/video/1143643791?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="Depoimento Aluna Leticia Freitas"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; web-share" 
                  allowFullScreen
                  loading="lazy"
                ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">Depoimento enviado por <strong>Letricia F.</strong></p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <p className="text-sm font-bold text-foreground">
                  <span className="text-accent">4.9 de 5</span> – baseado em +1.200 alunos
                </p>
              </div>
            </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonialImages.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-background/50 border-border rounded-xl overflow-hidden">
                    <CardContent className="p-0 flex items-center justify-center">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={400}
                        height={600}
                        className="object-contain rounded-lg"
                        data-ai-hint={testimonial.imageHint}
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

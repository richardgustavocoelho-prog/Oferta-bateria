"use client";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const cardData = [
  {
    title: "Um cronograma pronto e organizado",
    description: "Um plano detalhado com 50 aulas organizadas passo a passo, do zero até você tocar nos cultos com segurança.",
  },
  {
    title: "ECONOMIA DE TEMPO",
    description: "Chega de perder horas tentando descobrir por onde começar. O cronograma já vem pronto para seguir e aplicar direto no seu ritmo.",
  },
  {
    title: "DIDÁTICA ORGANIZADA E EFICIENTE",
    description: "Aulas progressivas que te dão segurança, clareza e mostram resultados reais a cada semana.",
  },
  {
    title: "FLEXIBILIDADE PARA DIFERENTES NÍVEIS E IDADES",
    description: "Conteúdo adaptável desde crianças até adultos, mesmo quem está começando do zero ou já toca um pouco.",
  },
];

type MaterialSectionProps = {
  onCTAClick: () => void;
};


export function MaterialSection({ onCTAClick }: MaterialSectionProps) {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase text-foreground mb-12 tracking-wide">
          Vantagens do material
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group rounded-xl p-6 text-center flex flex-col items-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-secondary border border-border hover:border-primary/50"
            >
              <div className="mb-4 text-accent transition-colors duration-300">
                  <Star className="h-8 w-8" />
              </div>
              <h3 className="text-base font-bold uppercase mb-3 text-foreground tracking-wider">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
           <Button
            size="lg"
            onClick={onCTAClick}
            className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg rounded-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 relative overflow-hidden cta-shine animate-pulse-cta"
          >
            QUERO O MATERIAL COMPLETO
          </Button>
        </div>
      </div>
    </section>
  );
}

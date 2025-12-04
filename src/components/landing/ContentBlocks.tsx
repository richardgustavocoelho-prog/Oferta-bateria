
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import data from '@/lib/placeholder-images.json';
import { CheckCircle2 } from "lucide-react";
import { type ImagePlaceholder } from "@/lib/placeholder-images";

const cardData = [
  {
    id: "vocal-technique",
    title: "TORNE-SE UM BATERISTA COMPLETO PARA TOCAR NA IGREJA",
    benefits: [
      "Aulas divididas em 5 blocos que acompanham sua evolução de verdade",
      "Comece do zero absoluto até tocar seus primeiros grooves e viradas",
      "Você segue um caminho pronto, sem precisar adivinhar o que treinar",
    ],
  },
  {
    id: "study-plan",
    title: "SIGA UM PLANO DE AULAS CLARO E SEM CONFUSÃO",
    benefits: [
      "Cada aula já vem com objetivo, treino, desafio e tarefa",
      "Fica mais fácil saber o que estudar toda semana",
      "Foco no que importa: treinar com confiança e ver sua evolução",
    ],
  },
  {
    id: "training-tools",
    title: "APRENDA TÉCNICA E MUSICALIDADE DE VERDADE (MESMO SEM EXPERIÊNCIA)",
    benefits: [
      "Linguagem simples e acessível pra você entender rápido",
      "Treinos testados com iniciantes reais que aprenderam do zero",
      "Menos frustração, mais progresso: você sente a evolução a cada aula",
    ],
  },
  {
    id: "repertoire",
    title: "COMECE CERTO: PRIMEIRO CONTATO COM A BATERIA SEM ERROS",
    benefits: [
      "Aulas com postura e posição pensadas pra evitar vícios desde o início",
      "Pegada leve e segura pra ter controle já nas primeiras batidas",
      "Treinos de ritmo pra você desenvolver musicalidade mesmo sem bateria",
    ],
  },
  {
    id: "rudiments",
    title: "DOMINE SEU PRIMEIRO GROOVE COMPLETO EM POUCAS AULAS",
    benefits: [
      "Aprenda bumbo, caixa e chimbal em um passo a passo fácil",
      "Treine a coordenação entre mãos e pés sem travar",
      "Toque sua primeira levada de louvor em poucas semanas",
    ],
  },
  {
    id: "grooves",
    title: "DESENVOLVA COORDENAÇÃO TOTAL: MÃOS E PÉS EM HARMONIA",
    benefits: [
      "Exercícios pensados pra destravar mãos e pés",
      "Treinos combinados de bumbo, chimbal, caixa e mãos",
      "Método que traz fluidez sem confundir sua cabeça",
    ],
  },
];

const getImage = (id: string) => {
  const images = (data as any).placeholderImages || [];
  return images.find((img: ImagePlaceholder) => img.id === id);
}

type ContentBlocksProps = {
  onCTAClick: () => void;
};


export function ContentBlocks({ onCTAClick }: ContentBlocksProps) {
  return (
    <section id="acesso" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase text-foreground mb-12 tracking-wide">
          O que você recebe:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cardData.map((card) => {
            const image = getImage(card.id);

            return (
              <Card 
                key={card.id} 
                className="group bg-secondary border-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-2xl flex flex-col"
              >
                {image && (
                  <div className="relative w-full aspect-square overflow-hidden bg-black/20">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold uppercase mb-4 text-primary text-center">{card.title}</h3>
                  <ul className="space-y-3 flex-grow text-white/80">
                    {card.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={onCTAClick}
            className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg rounded-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 relative overflow-hidden cta-shine animate-pulse-cta"
          >
            GARANTIR MEU ACESSO
          </Button>
        </div>
      </div>
    </section>
  );
}

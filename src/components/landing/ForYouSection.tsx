
import { Check } from "lucide-react";

const cardData = [
  "PARA QUEM SEMPRE QUIS TOCAR NA IGREJA",
  "QUEM NÃO TEM BATERIA, MAS TEM VONTADE DE APRENDER",
  "QUER APRENDER DE VERDADE, SEM PULAR ETAPAS",
  "JÁ TENTOU APRENDER SOZINHO, MAS NÃO CONSEGUIU",
];

export function ForYouSection() {
  return (
    <section className="py-12 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase text-foreground mb-12 tracking-wide">
          PARA QUEM É ESSE PRODUTO?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cardData.map((text, index) => (
            <div
              key={index}
              className="bg-secondary border border-border rounded-lg p-6 flex items-center gap-4 min-h-[100px] transition-all duration-300 hover:border-primary/50 hover:bg-secondary/80"
            >
              <Check className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-white/90 font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

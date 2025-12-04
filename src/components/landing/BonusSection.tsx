
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function BonusSection() {
  return (
    <section id="bonus" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline uppercase mb-12 text-accent">
            BÔNUS ESPECIAIS PARA GARANTIR HOJE!
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="bg-secondary border-border overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-accent/20 hover:shadow-2xl">
            <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://i.imgur.com/sOyccGB.png"
                  alt="Ilustração de um manual de cifras musicais"
                  fill
                  className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint="chords manual"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-bold uppercase text-foreground tracking-wider">
                10 Playbacks de Louvor para Treinar
              </h3>
              <p className="text-5xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary border-border overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-accent/20 hover:shadow-2xl">
            <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
               <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://i.imgur.com/yVMT4Ad.png"
                  alt="Ilustração de batidas de violão"
                  fill
                  className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint="guitar strumming"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-bold uppercase text-foreground tracking-wider">
                Guia de Prática Sem Bateria (Travesseiro e Baquetas)
              </h3>
              <p className="text-5xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-border overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-accent/20 hover:shadow-2xl md:col-span-2 lg:col-span-1 lg:max-w-md mx-auto w-full">
            <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
               <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://i.imgur.com/uKD2xWP.png"
                  alt="Ilustração de um diagrama de acordes"
                  fill
                  className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint="chord diagram"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-bold uppercase text-foreground tracking-wider">
                MANUAL DE CIFRAS
              </h3>
              <p className="text-5xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}

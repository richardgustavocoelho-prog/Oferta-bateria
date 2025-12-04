
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Gift, CreditCard, Lock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UpsellPopup } from "./UpsellPopup";
import { FinalOfferPopup } from "./FinalOfferPopup";
import Link from "next/link";
import Image from "next/image";

const firstCardFeatures = [
    "50 AULAS PRONTAS DE BATERIA",
    "GARANTIA DE 7 DIAS",
];

const features = [
  "50 AULAS PRONTAS DE BATERIA",
  "ACESSO À NOVAS AULAS FUTURAS",
  "SUPORTE RÁPIDO POR WHATSAPP",
  "ACESSE DE QUALQUER DISPOSITIVO",
  "ATUALIZAÇÕES GRÁTIS",
  "ACESSO VITALÍCIO",
  "GARANTIA DE 30 DIAS",
];

const bonuses = [
  "BONÛS: 10 PLAYBACKS DE LOUVOR",
  "BONÛS: GUIA DE PRÁTICA SEM BATERIA",
  "BONÛS: MANUAL DE CIFRAS",
];

export function PricingSection() {
  const [isUpsellPopupOpen, setIsUpsellPopupOpen] = useState(false);
  const [isFinalOfferPopupOpen, setIsFinalOfferPopupOpen] = useState(false);

  const handleDeclineUpsell = () => {
    setIsUpsellPopupOpen(false);
    setIsFinalOfferPopupOpen(true);
  };

  return (
    <>
      <section id="pricing" className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-foreground mb-2 tracking-wide">
              <span className="text-accent">OFERTA ESPECIAL</span> SOMENTE HOJE!
            </h2>
            <p className="text-muted-foreground text-lg">
              Acesso imediato com valor promocional por tempo limitado.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 w-full max-w-5xl items-start md:justify-center">
            {/* First Card */}
            <div id="oferta-1" className="w-full max-w-md mx-auto bg-secondary rounded-xl border border-border p-6 md:p-8 flex flex-col text-foreground transition-all duration-300 hover:border-primary/50">
              <div className="text-center">
                <p className="text-base uppercase font-semibold tracking-wider text-muted-foreground mb-2">ACESSO BÁSICO</p>
                <p className="text-6xl md:text-7xl font-black text-primary my-2">
                  R$ 9,90
                </p>
                <p className="font-bold uppercase text-muted-foreground">PAGAMENTO ÚNICO</p>
              </div>

              <div className="my-8 space-y-4 flex-grow">
                {firstCardFeatures.map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm uppercase font-medium">{feature}</span>
                    </div>
                    {index < firstCardFeatures.length -1 && <Separator className="bg-border mt-4" />}
                  </div>
                ))}
              </div>

              <a
                href="https://pay.kirvano.com/4e821cd5-fbe8-4b4c-a483-e9412cdfd385"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full font-bold text-lg px-10 py-7 rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  COMEÇAR AGORA
                </Button>
              </a>
               <div className="flex items-center justify-center gap-4 mt-4">
                <Image
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pix.svg"
                    alt="Pix"
                    width={20}
                    height={20}
                    className="h-5 w-5 filter invert"
                  />
                <CreditCard className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Lock className="h-3 w-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Pagamento Seguro</p>
              </div>
            </div>

            {/* Second Card (Premium) */}
            <div className="relative w-full max-w-md mx-auto bg-secondary rounded-xl p-1 border-2 border-accent/80 shadow-2xl shadow-accent/10">
               <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-fit bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                MAIS ESCOLHIDO
              </div>
              <div className="bg-secondary rounded-[0.65rem] p-0 flex flex-col text-foreground h-full">
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6 mt-4">
                    <p className="text-base uppercase font-semibold tracking-wider text-muted-foreground mb-2">ACESSO PREMIUM</p>
                    <p className="text-2xl line-through text-red-500/80 decoration-red-500">De R$ 147,90</p>
                    <p className="text-7xl md:text-8xl font-black my-2 text-primary">
                      R$ 27,90
                    </p>
                    <p className="font-bold uppercase text-muted-foreground">PAGAMENTO ÚNICO</p>
                  </div>

                  <div className="my-8 space-y-4 flex-grow">
                    {features.map((feature, index) => (
                      <div key={index}>
                        <div className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-white/90">{feature}</span>
                        </div>
                        {index < features.length -1 && <Separator className="bg-border mt-4" />}
                      </div>
                    ))}
                    <Separator className="bg-border mt-4" />
                    <div className="text-center pt-4">
                        <h4 className="text-lg font-extrabold uppercase text-accent">
                            + BÔNUS EXCLUSIVOS
                        </h4>
                    </div>
                    {bonuses.map((bonus, index) => (
                      <div key={index}>
                         <div className="flex items-start gap-3">
                           <Gift className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"/>
                           <span className="text-sm font-bold text-accent/90">{bonus}</span>
                       </div>
                       {index < bonuses.length -1 && <Separator className="bg-border mt-4" />}
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://pay.kirvano.com/f3c09fbe-beaf-4922-9534-409c02ac6410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full font-bold text-lg px-10 py-7 rounded-xl bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden cta-shine animate-pulse-cta"
                    >
                      QUERO O ACESSO PREMIUM
                    </Button>
                  </a>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pix.svg"
                        alt="Pix"
                        width={20}
                        height={20}
                        className="h-5 w-5 filter invert"
                      />
                    <CreditCard className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Lock className="h-3 w-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Pagamento Seguro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UpsellPopup 
        isOpen={isUpsellPopupOpen} 
        onOpenChange={setIsUpsellPopupOpen} 
        onDecline={handleDeclineUpsell}
      />
      <FinalOfferPopup 
        isOpen={isFinalOfferPopupOpen}
        onOpenChange={setIsFinalOfferPopupOpen}
      />
    </>
  );
}

    

"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const benefits = [
  "25 aulas prontas e estruturadas em PDF",
  "Plano de estudo completo de 12 meses",
  "Exercícios práticos com repertório e microfone",
  "Didática moderna validada por professores",
  "Bônus exclusivos liberados",
];

type FinalOfferPopupProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function FinalOfferPopup({ isOpen, onOpenChange }: FinalOfferPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="p-0 border-0 max-w-sm w-full bg-[#141414] rounded-3xl shadow-[0_0_40px_rgba(249,178,51,0.3)] flex flex-col max-h-[90vh]"
        onInteractOutside={(e) => e.preventDefault()}
        hideCloseButton={true}
      >
        <DialogTitle className="sr-only">Última Oferta</DialogTitle>
        
        <div className="bg-[#FF4D4D] text-center p-2 flex-shrink-0">
          <p className="font-bold text-xs uppercase text-white">⏰ Última chance — Oferta expira em 2 minutos!</p>
        </div>

        <div className="overflow-y-auto px-6 pt-4 pb-6">
            <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-center text-white" style={{ textShadow: '0 0 10px rgba(249, 178, 51, 0.5)' }}>
              Você ainda pode garantir o acesso completo – mas é agora ou nunca.
            </h2>

            <div className="bg-black/40 rounded-2xl p-4 my-6 border border-gray-700 text-center">
              <p className="text-lg line-through text-gray-400 decoration-[#FF4D4D]">DE R$ 147,90</p>
              <p className="text-5xl font-black my-1" style={{ color: '#28FF7A', textShadow: '0 0 15px rgba(40, 255, 122, 0.6)' }}>
                R$ 6,90
              </p>
              <p className="text-sm text-gray-400">acesso imediato</p>
            </div>

            <div className="text-left my-6 space-y-3 text-white">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span style={{ color: '#28A745' }}>✅</span>
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
        </div>

        <div className="px-6 pb-6 pt-0 flex flex-col gap-3 flex-shrink-0">
            <a
                href="https://pay.kirvano.com/2594c236-5cd0-4bec-b901-d8aeb7bdc342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
              <Button
                className="w-full font-bold text-lg uppercase tracking-wider h-auto min-h-[3.5rem] rounded-xl transition-all duration-300
                           bg-gradient-to-b from-[#30C04E] to-[#1F8E3E] text-white
                           border-2 border-[#10742D]
                           shadow-[0_4px_15px_rgba(0,0,0,0.6)]
                           hover:from-[#39D95C] hover:to-[#28A745] hover:shadow-[0_6px_20px_rgba(40,167,69,0.4)]
                           relative overflow-hidden group py-3 px-4"
                style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.4)' }}
              >
                <span 
                  className="absolute top-0 left-0 w-full h-full opacity-20"
                  style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)'}}
                ></span>
                 <span 
                  className="absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-px opacity-80"
                  style={{ background: 'linear-gradient(to right, transparent, #52FF8B, transparent)'}}
                ></span>
                <span className="relative flex flex-col items-center justify-center">
                  <span>PEGAR MINHA ÚLTIMA CHANCE</span>
                  <span>AGORA</span>
                </span>
              </Button>
            </a>
            
            <p className="text-gray-400 text-xs italic mt-2 text-center">
              ⚠️ Essa é a última janela antes do conteúdo sair do ar.
            </p>

            <p className="text-gray-600 text-xs mt-2 text-center">
              🔒 Pagamento 100% seguro – acesso imediato após confirmação.
            </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

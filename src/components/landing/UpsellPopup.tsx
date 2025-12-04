
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

type UpsellPopupProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onDecline: () => void;
};

export function UpsellPopup({ isOpen, onOpenChange, onDecline }: UpsellPopupProps) {
  const handleDecline = () => {
    onOpenChange(false);
    onDecline();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="p-0 border-0 max-w-sm w-full bg-[#141414] rounded-3xl shadow-[0_0_40px_rgba(249,178,51,0.3)] flex flex-col max-h-[90vh]"
        onInteractOutside={(e) => e.preventDefault()}
        hideCloseButton={true}
      >
        <DialogTitle className="sr-only">Oferta Especial</DialogTitle>
        
        <div className="bg-[#FF4D4D] text-center p-2 flex-shrink-0">
          <p className="font-bold text-sm">⏰ Oferta expira em 2 minutos!</p>
        </div>

        <div className="overflow-y-auto px-6 pt-4 pb-6">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold mb-2" style={{ textShadow: '0 0 10px rgba(249, 178, 51, 0.5)' }}>
              Ops! A oferta de R$ 3,90 esgotou há 2 minutos…
            </h2>

            <p className="text-lg mb-6 text-white">
              Mas você pode aproveitar um <span className="font-bold" style={{ color: '#28A745' }}>SUPER DESCONTO</span> no acesso completo!
            </p>

            <div className="bg-black/40 rounded-2xl p-4 my-6 border border-gray-700">
              <p className="text-lg line-through text-gray-400 decoration-[#FF4D4D]">De R$ 147,90</p>
              <p className="text-5xl font-black my-1" style={{ color: '#28FF7A', textShadow: '0 0 15px rgba(40, 255, 122, 0.6)' }}>
                R$ 9,90
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
        </div>

        <div className="px-6 pb-6 pt-0 flex flex-col gap-3 flex-shrink-0">
          <a
            href="https://pay.kirvano.com/ea3102c8-9e0d-45f4-a209-0b188d5c29db"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              className="w-full font-bold text-lg h-14 rounded-xl border-2 border-transparent hover:border-[#F9B233]"
              style={{ 
                backgroundColor: '#28A745', 
                color: 'white', 
                boxShadow: '0 0 15px rgba(40, 167, 69, 0.5)',
                transition: 'background-color 0.3s, box-shadow 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1F8E3E';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#28A745';
              }}
            >
              QUERO ESSA OFERTA ESPECIAL!
            </Button>
          </a>

          <button 
            onClick={handleDecline}
            className="text-gray-500 text-xs underline hover:text-gray-400 transition-colors"
          >
            Não, obrigado. Prefiro perder essa chance.
          </button>
          
          <p className="text-gray-600 text-xs mt-2 text-center">
            🔒 Pagamento 100% seguro — acesso imediato após confirmação.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

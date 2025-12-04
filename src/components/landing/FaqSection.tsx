"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "Nunca toquei bateria. Esse Pack funciona para mim?",
    answer: "Sim! Esse pack foi criado para quem está começando do zero. Mesmo que você nunca tenha encostado numa bateria, vai conseguir seguir as aulas passo a passo.",
  },
  {
    question: "Preciso ter uma bateria para começar?",
    answer: "Não! Você pode começar com baquetas e um travesseiro. Um dos bônus te ensina exatamente isso.",
  },
  {
    question: "Em quanto tempo recebo o acesso após a compra?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um link para acessar todo o conteúdo incluindo os bônus diretamente no seu dispositivo.",
  },
  {
    question: "O material é físico ou digital?",
    answer: "100% digital. Você receberá o link de acesso no e-mail que cadastrar na pagina de pagamento, podendo salvar, consultar no celular, tablet ou computador quando e onde quiser.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem 30 dias de garantia. Se não gostar, devolvemos 100% do valor, sem perguntas.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-accent" >
            AINDA COM DÚVIDAS?
          </h2>
           <p className="mt-4 text-lg text-muted-foreground">
            Encontre aqui as respostas para as perguntas mais comuns.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/50">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-accent p-6 transition-colors [&[data-state=open]>svg]:text-accent [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

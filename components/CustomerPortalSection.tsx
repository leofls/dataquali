"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Ticket, MessageCircle, HelpCircle } from "lucide-react";

const CustomerPortalSection = () => {
  const faqs = [
    {
      question: "Como abro um chamado de suporte?",
      answer:
        "Você pode abrir um chamado através do botão 'Abrir Ticket' acima ou enviando um email para suporte@empresa.com com os detalhes do seu problema.",
    },
    {
      question: "Qual o prazo de resposta?",
      answer:
        "Nosso time responde chamados em até 24 horas úteis. Para casos urgentes, entre em contato via WhatsApp.",
    },
    {
      question: "Como acompanho meus tickets?",
      answer:
        "Após abrir um ticket, você receberá um número de protocolo por email para acompanhamento do status.",
    },
    {
      question: "Posso agendar uma reunião?",
      answer:
        "Sim! Entre em contato via WhatsApp ou abra um ticket solicitando uma reunião e nossa equipe entrará em contato.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Área do <span className="gradient-text">Cliente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suporte rápido e eficiente quando você precisar
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ticket */}
          <Card className="hover:border-primary smooth-transition">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Ticket className="h-16 w-16 text-primary" />
              </div>
              <CardTitle className="text-2xl">Abertura de Tickets</CardTitle>
              <CardDescription className="text-base">
                Registre seu chamado e acompanhe o atendimento
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-accent glow-effect"
                onClick={() =>
                  window.open("https://itsm.dataquali.com.br:9443/glpi/", "_blank")
                }
              >
                <Ticket className="mr-2 h-5 w-5" />
                Abrir Ticket
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="hover:border-primary smooth-transition">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <MessageCircle className="h-16 w-16 text-primary" />
              </div>
              <CardTitle className="text-2xl">Contato Direto</CardTitle>
              <CardDescription className="text-base">
                Fale conosco pelo WhatsApp para atendimento rápido
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white smooth-transition"
                onClick={() =>
                  window.open(
                    "https://wa.me/5511999999999?text=Olá, preciso de suporte",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold">Perguntas Frequentes</h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary smooth-transition"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CustomerPortalSection;

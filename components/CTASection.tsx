"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Pronto para transformar seu negócio?
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Fale com nossos especialistas e descubra o poder dos dados inteligentes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Botão 1 */}
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-lg px-8 glow-effect"
            onClick={() => window.open("https://sua-url.com/proposta", "_blank")}
          >
            Solicitar Proposta
            <ArrowRight className="ml-2" />
          </Button>

          {/* Botão 2 */}
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() =>
              window.open("https://calendly.com/agendar-reuniao", "_blank")
            }
          >
            Agendar Reunião
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

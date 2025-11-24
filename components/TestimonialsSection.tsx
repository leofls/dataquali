"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useClientInView } from "@/lib/useClientInView";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CTO, TechCorp",
      content:
        "A Dataquali transformou nossa infraestrutura de dados. A equipe é altamente qualificada e o suporte é excepcional. Reduzimos custos em 40% e aumentamos nossa capacidade analítica.",
    },
    {
      name: "Mariana Silva",
      role: "Diretora de TI, RetailMax",
      content:
        "A migração para cloud foi impecável. Zero downtime e uma equipe que entende profundamente de negócio. Hoje operamos com muito mais agilidade e segurança.",
    },
    {
      name: "Ricardo Alves",
      role: "CEO, FinanceHub",
      content:
        "O CTO as a Service da Dataquali nos deu a liderança tecnológica que precisávamos sem os custos de uma contratação full-time. Excelente investimento.",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            // create a ref per item and drive animation with useInView for more reliable production behavior
            const ref = useRef<HTMLDivElement | null>(null);
            const inView = useClientInView(ref, { once: true, amount: 0.2 });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-background border-border hover:border-primary hover:shadow-lg hover:-translate-y-1 smooth-transition">
                  <CardContent className="p-6 space-y-6 relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.content}
                    </p>

                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

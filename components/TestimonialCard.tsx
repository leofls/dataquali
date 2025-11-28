// Arquivo: components/TestimonialCard.tsx (ou onde você organiza seus componentes)
'use client'; // MANTENHA A DIRETIVA

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useClientInView } from "@/lib/useClientInView"; // Certifique-se de que o caminho está correto

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number; // Para escalonar o atraso
}

const TestimonialCard = ({ testimonial, delay }: TestimonialCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useClientInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay: delay }} // Use o delay passado
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
};

export default TestimonialCard;
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProfessionalsSection = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Vagas Abertas",
      description: "Oportunidades em diversas áreas de tecnologia",
    },
    {
      icon: Users,
      title: "Time Colaborativo",
      description: "Trabalhe com profissionais talentosos",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Desenvolva sua carreira conosco",
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">

        {/* Cabeçalho */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Para <span className="gradient-text">Profissionais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se ao nosso time e construa o futuro da tecnologia
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center space-y-4 p-8 bg-card border border-border rounded-xl
                           hover:border-primary hover:shadow-lg hover:-translate-y-1
                           smooth-transition cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Estamos sempre em busca de talentos apaixonados por tecnologia e inovação.
            Se você quer fazer parte de projetos desafiadores e trabalhar em um ambiente
            colaborativo, confira nossas vagas abertas.
          </p>

          <Link href="/profissionais">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-lg px-8 smooth-transition glow-effect"
            >
              Ver Vagas Abertas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ProfessionalsSection;

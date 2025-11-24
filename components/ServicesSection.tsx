"use client";

import ServiceCard from "./ServiceCard";
import {
  Database,
  Cloud,
  Code,
  TrendingUp,
  Users,
  Briefcase,
  Lightbulb,
  FolderKanban,
  Server,
  Brain
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "CTO as a Service / Squads",
      description:
        "Liderança tecnológica estratégica e times completos para acelerar sua transformação digital com governança.",
      slug: "cto-as-service",
    },
    {
      icon: Lightbulb,
      title: "Transformação Digital",
      description:
        "Modernização de processos e sistemas, preparando sua empresa para os desafios do mercado digital.",
      slug: "transformacao-digital",
    },
    {
      icon: Database,
      title: "Administração de Bancos de Dados",
      description:
        "Gestão completa e otimização de bancos de dados, garantindo performance, segurança e disponibilidade para suas operações.",
      slug: "administracao-bancos-dados",
    },
    {
      icon: Cloud,
      title: "Consultoria em Cloud Computing",
      description:
        "Estratégias personalizadas para migração e otimização de recursos na nuvem, reduzindo custos e aumentando escalabilidade.",
      slug: "consultoria-cloud",
    },
    {
      icon: Server,
      title: "Migração para Nuvem",
      description:
        "Processo seguro e eficiente de migração de infraestrutura para ambientes cloud, minimizando riscos e tempo de inatividade.",
      slug: "migracao-nuvem",
    },
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description:
        "Soluções sob medida com tecnologias modernas, entregando sistemas robustos, escaláveis e alinhados ao seu negócio.",
      slug: "desenvolvimento-software",
    },
    {
      icon: TrendingUp,
      title: "Engenharia e Ciência de Dados (Big Data)",
      description:
        "Transforme dados em insights estratégicos com pipelines inteligentes, análises avançadas e machine learning.",
      slug: "engenharia-dados",
    },
    {
      icon: Brain,
      title: "Engenharia de IA",
      description:
        "Desenvolvemos e integramos soluções de Inteligência Artificial sob medida — como assistentes virtuais, automações inteligentes e modelos preditivos — para otimizar processos, apoiar decisões e gerar novos produtos digitais baseados em dados.",
      slug: "engenharia-ia",
    },
    {
      icon: FolderKanban,
      title: "Consultor de  BPM",
      description:
        "Mapeamos, modelamos e otimizamos processos de negócio com BPM, eliminando gargalos e garantindo eficiência, padronização e visão de ponta a ponta.",
      slug: "consultor-bpm",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em tecnologia para impulsionar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

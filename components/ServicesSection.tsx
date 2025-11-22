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
  Server
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
      title: "Engenharia e Ciência de Dados",
      description:
        "Transforme dados em insights estratégicos com pipelines inteligentes, análises avançadas e machine learning.",
      slug: "engenharia-dados",
    },
    // {
    //   icon: Users,
    //   title: "Alocação de Profissionais",
    //   description:
    //     "Profissionais qualificados e experientes para compor seu time, com agilidade e expertise técnica comprovada.",
    //   slug: "alocacao-profissionais",
    // },
    
    // {
    //   icon: FolderKanban,
    //   title: "Gerência de Projetos de TI",
    //   description:
    //     "Gestão ágil e eficiente de projetos tecnológicos, garantindo entregas no prazo com qualidade e transparência.",
    //   slug: "gerencia-projetos",
    // },
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

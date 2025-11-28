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
        "Atuamos como ponte entre gestão e times técnicos, traduzindo objetivos de negócio em planos claros de arquitetura, projetos, integrações e priorização de investimentos.",
      slug: "cto-as-service",
    },
    {
      icon: Lightbulb,
      title: "Transformação Digital",
      description:
        "Ajudamos sua empresa a sair do modelo operacional manual e fragmentado para um ambiente digital integrado, automatizado e orientado a dados. Atuamos desde o diagnóstico da maturidade digital até a implementação do plano de ação",
      slug: "transformacao-digital",
    },
    {
      icon: Database,
      title: "Administração de Bancos de Dados",
      description:
        "Fazemos a gestão completa e a otimização de bancos de dados, garantindo performance, segurança e alta disponibilidade para suas operações críticas. Atuamos de forma preventiva para evitar paradas e incidentes.",
      slug: "administracao-bancos-dados",
    },
    {
      icon: Cloud,
      title: "Consultoria em Cloud Computing",
      description:
        "Ajudamos a tomar decisões estratégicas em nuvem, escolhendo arquiteturas, serviços e provedores que façam sentido para o seu negócio. Trabalhamos de forma vendor-neutral, sempre em defesa dos seus interesses.",
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
        "Desenvolvemos soluções sob medida, alinhadas às estratégias do negócio, utilizando tecnologias modernas, APIs e integrações. O foco é entregar software que resolva problemas reais e possa evoluir com a empresa.",
      slug: "desenvolvimento-software",
    },
    {
      icon: TrendingUp,
      title: "Engenharia e Ciência de Dados (Big Data)",
      description:
        "Transformamos dados em  insights para decisões estratégicas, operacionais e táticas. Construímos a base técnica para analytics, relatórios e modelos preditivos de forma consistente e escalável.",
      slug: "engenharia-dados",
    },
    {
      icon: Brain,
      title: "Engenharia de IA",
      description:
        " Desenhamos e implementamos soluções de Inteligência Artificial que geram valor real, desde automações com modelos de linguagem até sistemas preditivos e assistentes inteligentes integrados aos seus canais e sistemas.",
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

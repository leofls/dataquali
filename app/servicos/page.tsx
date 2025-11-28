import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Database, Cloud, Code, TrendingUp, Users, Briefcase, Lightbulb, FolderKanban, Server, Brain } from "lucide-react";


const Services = () => {
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
        "Ajudamos sua empresa a sair do modelo operacional manual e fragmentado para um ambiente digital integrado, automatizado e orientado a dados. Atuamos desde o diagnóstico da maturidade digital até a implementação do plano de ação.",
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
        "Ajudamos sua empresa a sair do modelo operacional manual e fragmentado para um ambiente digital integrado, automatizado e orientado a dados. Atuamos desde o diagnóstico da maturidade digital até a implementação do plano de ação.",
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
        "Transformamos dados em insights para decisões estratégicas, operacionais e táticas. Construímos a base técnica para analytics, relatórios e modelos preditivos de forma consistente e escalável.",
      slug: "engenharia-dados",
    },
    {
      icon: Brain,
      title: "Engenharia de IA",
      description:
        "Desenhamos e implementamos soluções de Inteligência Artificial que geram valor real, desde automações com modelos de linguagem até sistemas preditivos e assistentes inteligentes integrados aos seus canais e sistemas.",
      slug: "engenharia-ia",
    },
    {
      icon: FolderKanban,
      title: "Consultor de  BPM",
      description:
        "Mapeamos, modelamos e otimizamos processos de negócio com foco em eficiência, padronização e clareza de responsabilidades. Conectamos processos, sistemas e pessoas para reduzir retrabalho e aumentar a previsibilidade das entregas.",
      slug: "consultor-bpm",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/services-bg.jpg"
            alt="Serviços Dataquali"
            className="w-full h-full object-cover opacity-[25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Nossos <span className="gradient-text">Serviços</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em tecnologia para impulsionar sua transformação digital
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada empresa tem necessidades únicas. Vamos conversar sobre seu desafio específico.
          </p>
          <button className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg smooth-transition glow-effect">
            Falar com um Especialista
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

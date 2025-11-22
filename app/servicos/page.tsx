import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Database, Cloud, Code, TrendingUp, Users, Briefcase, Lightbulb, FolderKanban, Server } from "lucide-react";


const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Administração de Bancos de Dados",
      description: "Gestão completa e otimização de bancos de dados relacionais e NoSQL. Performance tuning, backup, recuperação de desastres e monitoramento 24/7. Garantimos disponibilidade, segurança e performance máxima para suas operações críticas.",
      slug: "administracao-bancos-dados"
    },
    {
      icon: Cloud,
      title: "Consultoria em Cloud Computing",
      description: "Estratégias personalizadas para aproveitamento máximo da nuvem. Análise de custos, arquitetura de soluções, governança e otimização de recursos em AWS, Azure e GCP. Reduza custos enquanto aumenta escalabilidade e confiabilidade.",
      slug: "consultoria-cloud"
    },
    {
      icon: Server,
      title: "Migração para Nuvem",
      description: "Migração segura e eficiente de infraestrutura on-premise para ambientes cloud. Planejamento detalhado, execução sem downtime, validação de integridade e treinamento de equipes. Sua transformação digital começa aqui.",
      slug: "migracao-nuvem"
    },
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Soluções sob medida com tecnologias modernas: React, Node.js, Python, .NET e mais. Arquitetura escalável, código limpo, testes automatizados e entrega contínua. Do MVP ao produto consolidado, transformamos ideias em realidade.",
      slug: "desenvolvimento-software"
    },
    {
      icon: TrendingUp,
      title: "Engenharia e Ciência de Dados",
      description: "Pipelines robustos de dados, data lakes, data warehouses e análises avançadas. Machine learning, IA e visualização de dados para insights estratégicos. Transforme dados brutos em vantagem competitiva real.",
      slug: "engenharia-dados"
    },
    {
      icon: Users,
      title: "Alocação de Profissionais",
      description: "Profissionais seniores e especializados para seu time: engenheiros de dados, desenvolvedores, arquitetos de solução e DBAs. Agilidade na contratação, expertise comprovada e fit cultural garantido.",
      slug: "alocacao-profissionais"
    },
    {
      icon: Briefcase,
      title: "CTO as a Service / Squads",
      description: "Liderança tecnológica estratégica sob demanda. Definição de roadmap, gestão de arquitetura, governança de TI e formação de times ágeis. Ou squads completos para acelerar seus projetos com autonomia e qualidade.",
      slug: "cto-as-service"
    },
    {
      icon: Lightbulb,
      title: "Transformação Digital",
      description: "Modernização completa de processos e sistemas legados. Automação, digitalização de workflows, integração de sistemas e mudança cultural. Preparamos sua empresa para os desafios do mercado digital com segurança.",
      slug: "transformacao-digital"
    },
    {
      icon: FolderKanban,
      title: "Gerência de Projetos de TI",
      description: "Gestão ágil com metodologias Scrum e Kanban. PMO estruturado, acompanhamento de métricas, gestão de riscos e comunicação transparente. Entregas no prazo, dentro do orçamento e com a qualidade que seu negócio merece.",
      slug: "gerencia-projetos"
    }
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

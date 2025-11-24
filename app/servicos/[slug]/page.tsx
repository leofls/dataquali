import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
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
  CheckCircle2,
  Brain
} from "lucide-react";

type Params = { slug: string };

const services: Record<string, any> = {
  "administracao-bancos-dados": {
    icon: Database,
    title: "Administração de Bancos de Dados",
    description:
      "Gestão completa e otimização de bancos de dados, garantindo performance, segurança e disponibilidade para suas operações.",
    longDescription:
      `Fazemos a gestão completa e a otimização de bancos de dados, garantindo performance, segurança e alta disponibilidade para suas operações críticas. Atuamos de forma preventiva para evitar paradas e incidentes.
      Nossa equipe especializada oferece administração de ponta a ponta, desde instalação e configuração até monitoramento contínuo e tuning de performance. Trabalhamos para que seus dados estejam sempre disponíveis, protegidos e operando com máxima eficiência e menor custo possível.
      `,
    benefits: [
      "Monitoramento 24/7 de performance, disponibilidade e alertas proativos",
      "Backup automatizado e planos de recuperação de desastres testados periodicamente",
      "Implementação de políticas de segurança, governança e compliance regulatório",
      "Otimização de queries, índices e estrutura de dados para máxima velocidade",
      "Tuning de banco de dados para redução de custos de infraestrutura e licenciamento",
      "Relatórios periódicos de saúde do ambiente e recomendações de melhoria contínua",
    ],
    examples: [
      {
        title: "ERP Corporativo",
        description:
          "Reestruturamos e otimizamos o banco de dados Oracle de um ERP que sofria de lentidão em horários de pico, reduzindo o tempo médio de resposta em 55% e eliminando janelas de indisponibilidade durante o fechamento do mês."
      },
      {
        title: "Instituição de Saúde",
        description:
          "Assumimos a administração completa do banco de dados com plano de backup e testes de recuperação, garantindo 99,98% de disponibilidade anual e zero perda de dados em incidentes."
      }
    ],
    clients: ["Banco XYZ", "Varejo Online SA", "Fintech Brasil"]
  },
  "consultoria-cloud": {
    icon: Cloud,
    title: "Consultoria em Cloud Computing",
    description:
      "Estratégias personalizadas para migração e otimização de recursos na nuvem, reduzindo custos e aumentando escalabilidade.",
    longDescription:
      `Ajudamos sua empresa a tomar decisões estratégicas em nuvem, escolhendo arquiteturas, serviços e provedores que façam sentido para o seu negócio. Trabalhamos de forma vendor-neutral, sempre em defesa dos seus interesses.
      Realizamos diagnósticos, desenhamos arquiteturas e definimos padrões de segurança, operação e governança em cloud. Nosso objetivo é garantir ambientes escaláveis, seguros e financeiramente otimizados, com um roadmap claro de evolução.
      `,
    benefits: [
      "Desenho de arquitetura de nuvem sob medida (single, multi ou hybrid cloud)",
      "Análise de custos, dimensionamento correto de recursos e plano de otimização financeira",
      "Definição de padrões de segurança, identidade, acesso e compliance em cloud",
      "Roadmap de adoção de serviços gerenciados (bancos, filas, storages, observabilidade etc.)",
      "Implementação de boas práticas de monitoramento, logging e observabilidade fim a fim",
      "Governança de ambientes: padrões, políticas, landing zone e modelo operacional claro",
    ],
    examples: [
      {
        title: "Empresa de Serviço B2B",
        description:
          "Realizamos diagnóstico de ambiente on-premises, desenhando arquitetura em nuvem híbrida e otimizando custos. A empresa reduziu em 35% o gasto mensal com infraestrutura e ganhou elasticidade para campanhas sazonais."
      },
      {
        title: "Empresa de Serviço de Saúde",
        description:
          "Redesenhamos a arquitetura em nuvem focando em segurança, observabilidade e automação de deploy, reduzindo o tempo de release de novas funcionalidades de semanas para horas e aumentando a confiabilidade dos serviços."
      }
    ],
    clients: ["TechStart Inc", "FarmaCorp", "LogísticaPro"]
  },
  "migracao-nuvem": {
    icon: Server,
    title: "Migração para Nuvem",
    description:
      "Processo seguro e eficiente de migração de infraestrutura para ambientes cloud, minimizando riscos e tempo de inatividade.",
    longDescription:
      `Planejamos e executamos migrações de ambientes on-premises ou entre provedores de nuvem com foco em previsibilidade, segurança e mínimo impacto ao negócio. Cada etapa é desenhada para reduzir riscos e evitar surpresas.
      Realizamos assessments, definimos estratégias de migração por ondas e executamos provas de conceito antes do corte definitivo. Acompanhamos o pós-go-live para estabilizar o ambiente, ajustar performance e transferir conhecimento à sua equipe.
      `,
    benefits: [
      "Assessment completo dos sistemas atuais, riscos e dependências antes da migração",
      "Desenho de estratégia por ondas/fases, priorizando serviços críticos e “quick wins”",
      "Plano detalhado de migração de dados com mínimo downtime e rollback definido",
      "Testes de performance, segurança e carga antes do corte definitivo para a nuvem",
      "Automação da infraestrutura com IaC (Terraform, CloudFormation, etc.) para repetibilidade",
      "Suporte pós-go-live com ajustes finos, estabilização e transferência de conhecimento"
    ],
    examples: [
      {
        title: "Sistema Legado Crítico",
        description:
          "Migramos um sistema monolítico de missão crítica para a nuvem com estratégia “lift and improve”, modernizando banco de dados e camadas de aplicação, sem downtime relevante para os usuários e com redução de 30% em custos de infraestrutura."
      },
      {
        title: "Ambiente de BI e Analytics",
        description:
          "Conduzimos a migração de todo o ambiente de BI para a nuvem, incluindo ETL, data warehouse e relatórios, aumentando a velocidade de processamento em 4x e permitindo que os gestores tivessem acesso a dados em tempo quase real."
      }
    ],
    clients: ["Varejo Nacional", "StreamBR", "Educação Online"]
  },
  "desenvolvimento-software": {
    icon: Code,
    title: "Desenvolvimento de Software",
    description:
      "Soluções sob medida com tecnologias modernas, entregando sistemas robustos, escaláveis e alinhados ao seu negócio.",
    longDescription:
      `Desenvolvemos soluções sob medida, alinhadas às estratégias do negócio, utilizando tecnologias modernas, APIs e integrações. O foco é entregar software que resolva problemas reais e possa evoluir com a empresa.
      Atuamos desde a concepção e arquitetura até a implantação e suporte evolutivo, com ciclos ágeis de entrega e comunicação transparente. Criamos aplicações robustas, escaláveis e preparadas para integrações futuras e automações.
      `,
    benefits: [
      "Levantamento de requisitos com foco em jornadas, processos e objetivos de negócio",
      "Arquitetura de software escalável, segura e preparada para integrações futuras",
      "Desenvolvimento ágil, com entregas incrementais e comunicação transparente",
      "Criação de APIs bem estruturadas e documentadas, facilitando integrações e automações",
      "Testes automatizados, pipelines CI/CD e práticas DevOps para reduzir falhas em produção",
      "Acompanhamento pós-implantação com monitoramento, melhoria contínua e suporte evolutivo",
    ],
    examples: [
      {
        title: "Plataforma de Gestão",
        description:
          "Desenvolvemos ERP customizado para indústria, integrando produção, estoque e financeiro em plataforma única."
      },
      {
        title: "App de Marketplace",
        description:
          "Criamos marketplace mobile conectando prestadores de serviços a clientes, com 50k+ usuários ativos."
      }
    ],
    clients: ["Indústria Tech", "ServiçosApp", "GestãoPro"]
  },
  "engenharia-dados": {
    icon: TrendingUp,
    title: "Engenharia e Ciência de Dados",
    description:
      "Transforme dados em insights estratégicos com pipelines inteligentes, análises avançadas e machine learning.",
    longDescription:
      `Transformamos grandes volumes de dados em informação útil para decisões estratégicas, operacionais e táticas. Construímos a base técnica para analytics, relatórios e modelos preditivos de forma consistente e escalável.
      Nossa atuação cobre todo o ciclo de dados: ingestão, tratamento, armazenamento, modelagem, visualização e governança. Entregamos pipelines confiáveis, modelos analíticos e indicadores que suportam uma gestão verdadeiramente orientada a dados.
      `,
    benefits: [
      "Arquitetura de dados moderna (data lake, lakehouse ou data warehouse) alinhada ao negócio",
      "Pipelines de ingestão e tratamento de dados em escala, com monitoramento e versionamento",
      "Modelagem de dados unificada para relatórios, dashboards e integrações analíticas",
      "Implementação de indicadores, painéis gerenciais e analíticos para diferentes áreas",
      "Desenvolvimento de modelos preditivos e análises avançadas para casos de uso específicos",
      "Governança e qualidade de dados: catálogo, linhagem, controles de acesso e confiabilidade"
    ],
    examples: [
      {
        title: "Varejo Multicanal",
        description:
          "Implementamos um data lake e modelos analíticos para unificar dados de loja física, e-commerce e marketplace, permitindo análises diárias de margem e mix. O cliente aumentou em 18% a rentabilidade das campanhas com segmentação baseada em dados."
      },
      {
        title: "Instituição de Ensino",
        description:
          "Criamos modelos preditivos de evasão estudantil e painéis de acompanhamento, permitindo ações proativas da equipe pedagógica e reduzindo a evasão em 22% no primeiro ano de uso."
      }
    ],
    clients: ["VarejoMax", "HealthData", "FinAnalytics"]
  },
  "engenharia-ia": {
    icon: Brain,
    title: "Engenharia de IA",
    description:
      "Profissionais qualificados e experientes para compor seu time, com agilidade e expertise técnica comprovada.",
    longDescription:
      `Desenhamos e implementamos soluções de Inteligência Artificial que geram valor real, desde automações com modelos de linguagem até sistemas preditivos e assistentes inteligentes integrados aos seus canais e sistemas.
      Trabalhamos desde a definição dos casos de uso até a implementação, monitoramento e governança dos modelos. Integramos IA aos seus dados e aplicações, garantindo segurança, contexto adequado e alinhamento às diretrizes do negócio.
      `,
    benefits: [
      "Identificação e priorização de casos de uso de IA com retorno concreto para o negócio",
      "Seleção de modelos, plataformas e arquitetura de IA alinhadas à sua realidade técnica",
      "Desenvolvimento de assistentes, automações e pipelines de IA integrados às aplicações",
      "Integração da IA com dados corporativos, garantindo contexto e segurança da informação",
      "Monitoramento contínuo de desempenho dos modelos e ajuste baseado em feedback real",
      "Governança de IA: políticas de uso, ética, segurança, privacidade e mitigação de riscos",
    ],
    examples: [
      {
        title: "Atendimento Automatizado ao Cliente",
        description:
          "Implementamos um assistente virtual com IA para suporte de primeiro nível, reduzindo em 55% o volume de chamados repetitivos para o time humano e aumentando o índice de resolução no primeiro contato em 35%."
      },
      {
        title: "Escritório Contábil Inteligente",
        description:
          "Desenvolvemos motores de IA para leitura automática de notas fiscais e classificação contábil, reduzindo o tempo de processamento mensal de documentos em 70% e eliminando  erros manuais críticos."
      }
    ],
    clients: ["StartupXYZ", "Serviços Corp", "TechCompany"]
  },
  "cto-as-service": {
    icon: Briefcase,
    title: "CTO as a Service / Squads",
    description:
      "Liderança tecnológica estratégica e times completos para acelerar sua transformação digital com governança.",
    longDescription:
      `Assumimos a direção técnica do seu negócio como um “CTO sob demanda”, alinhando tecnologia à estratégia da empresa sem conflito de interesses. Atuamos como ponte entre gestão e times técnicos, traduzindo objetivos de negócio em planos claros de arquitetura, projetos, integrações e priorização de investimentos.
      Nossa atuação é contínua e consultiva: desenhamos o roadmap de tecnologia, orquestramos fornecedores e squads, reduzimos riscos e garantimos que cada decisão tecnológica gere retorno concreto, não apenas mais sistemas para manter.`,
    benefits: [
      "Visão estratégica de tecnologia alinhada ao plano de negócios e aos objetivos de crescimento da empresa",
      "Orquestração de fornecedores, times internos e parceiros, com visão independente e vendor-neutral",
      "Definição de roadmap de tecnologia (priorização de projetos, integrações e modernizações) com foco em resultado",
      "Governança de arquitetura, segurança, dados e custos em nuvem, evitando desperdícios e soluções duplicadas",
      "Apoio em decisões críticas (comprar vs. desenvolver, trocar sistemas, migrar para nuvem, etc.) com análise técnica e de ROI",
      "Relatórios executivos periódicos com status dos projetos, riscos, indicadores e recomendações de próxima ação"
    ],
    examples: [
      {
        title: "Indústria de Médio Porte",
        description:
          "Assumimos a função de CTO em uma indústria com TI descentralizada, estruturando o roadmap de tecnologia, organizando fornecedores e priorizando projetos - reduzindo em 30% o custo de TI e eliminando 70% dos retrabalhos em 6 meses."
      },
      {
        title: "Escritório de Advocacia",
        description:
          "Atuamos com CTO sob demanda para um escritório em expansão, definindo arquitetura, segurança e integração entre sistemas jurídicos e financeiro, o que reduziu o tempo de abertura de novos casos em 40% e dobrou a capacidade de atendimento sem aumentar o time."
      }
    ],
    clients: ["Ecommerce Plus", "PayTech", "Digital Bank"]
  },
  "transformacao-digital": {
    icon: Lightbulb,
    title: "Transformação Digital",
    description:
      "Modernização de processos e sistemas, preparando sua empresa para os desafios do mercado digital.",
    longDescription:
      "Conduzimos processos completos de transformação digital, da estratégia à execução. Modernizamos processos, sistemas e cultura, preparando sua empresa para o futuro.",
    benefits: [
      "Diagnóstico completo da maturidade digital",
      "Roadmap de transformação personalizado",
      "Modernização de processos e sistemas",
      "Change management e cultura digital",
      "Métricas e KPIs de transformação"
    ],
    examples: [
      {
        title: "Indústria Tradicional",
        description:
          "Digitalizamos processos de chão de fábrica, implementando IoT e analytics, reduzindo custos em 25%."
      },
      {
        title: "Rede de Franquias",
        description:
          "Transformação digital completa com novo ERP, e-commerce e app mobile, unificando operações de 50+ unidades."
      }
    ],
    clients: ["Indústria Brasil", "Franquia Nacional", "Logística SA"]
  },
  "consultor-bpm": {
    icon: FolderKanban,
    title: "Consultor de BPM (Análise de Processos)",
    description:
      "Gestão ágil e eficiente de projetos tecnológicos, garantindo entregas no prazo com qualidade e transparência.",
    longDescription:
      `Mapeamos, modelamos e otimizamos processos de negócio com foco em eficiência, padronização e clareza de responsabilidades. Conectamos processos, sistemas e pessoas para reduzir retrabalho e aumentar a previsibilidade das entregas.
      Além dos desenhos em BPMN, criamos e implementamos os fluxos e telas em plataformas BPMS, traduzindo o modelo em processos executáveis. Ajudamos sua organização a sair do papel e operar seus processos de forma digital, medida e auditável.
      `,
    benefits: [
      "Mapeamento “as is” dos processos atuais, identificando gargalos, riscos e retrabalhos",
      "Desenho do modelo “to be” com fluxos otimizados, papéis claros e pontos de controle",
      "Definição de indicadores de processo (KPIs) e SLAs para gestão orientada a resultados",
      "Padronização de procedimentos, políticas e documentação em notações como BPMN",
      "Implementação prática dos processos em BPMS, com criação de formulários, telas e regras de negócio",
      "Capacitação das equipes para manter, revisar e evoluir os processos e fluxos no BPMS de forma contínua",
    ],
    examples: [
      {
        title: "Backoffice Financeiro",
        description:
          "Mapeamos e redesenhamos processos de contas a pagar e receber, eliminando gargalos e automatizando etapas repetitivas, o que reduziu o tempo de fechamento financeiro de 10 para 3 dias e diminuiu erros em lançamentos em 80%."
      },
      {
        title: "Operação de Atendimento",
        description:
          "Modelamos toda a jornada de atendimento ao cliente, definimos indicadores e redesenhamos fluxos em BPMN, resultando em queda de 40% no tempo médio de atendimento e aumento de 25% na satisfação dos clientes."
      }
    ],
    clients: ["Grupo Empresarial", "Multinacional BR", "Cooperativa Nacional"]
  }
};

// Necessário quando `output: 'export'` está habilitado — gera os caminhos estáticos
export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetail({ params }: { params: Params | Promise<Params> }) {
  const { slug } = (await params) as Params;
  const slugValue = slug ?? "";
  const service = services[slugValue];

  if (!service) {
    // redireciona para a lista de serviços se slug inválido
    redirect("/servicos");
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Benefícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Casos de Sucesso</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.examples.map((example: any, index: number) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">{example.title}</h3>
                    <p className="text-muted-foreground">{example.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Alguns Clientes</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {service.clients.map((client: string, index: number) => (
                <div key={index} className="px-6 py-3 bg-background rounded-lg border border-border">
                  <span className="font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

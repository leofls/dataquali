export type Responsibility = string | { title: string; items: string[] };

export type Job = {
  title: string;
  location: string;
  type: string;
  date: string;
  shortDescription?: string;
  description: string;
  responsibilities: Responsibility[];
  requirements: string[];
  diferenciais?: string[];
  benefits: string[];
  howToApply: {
    email: string;
    note: string;
  };
};

export const jobs: Record<string, Job> = {
  "dba-oracle-pleno": {
    title: "DBA Oracle Pleno – Atuação Sob Demanda (Freelancer/Consultor)",
    location: "Remoto",
    type: "Sob demanda, por chamado ou por hora/projeto",
    date: "Aberto desde: 01 de Outubro, 2025",
    shortDescription:
      "Atuação como DBA Oracle para suporte, tuning e resolução de incidentes em ambientes críticos.",
    description: `Buscamos um DBA Oracle Pleno para atuar sob demanda, prestando suporte especializado 
    em ambientes Oracle de clientes, com foco em estabilidade, performance e alta disponibilidade. 
    A atuação será por chamado/projeto, com necessidade de autonomia técnica e boa comunicação 
    com time e clientes.`,
    responsibilities: [
      "Administrar e dar suporte a bancos de dados Oracle das versões 11g até 19c.",
      {
        title: "Realizar atividades de rotina de DBA",
        items: [
          "Monitoramento de performance e disponibilidade.",
          "Análise e tratamento de alertas e incidentes.",
          "Gestão de tablespaces, usuários, permissões e objetos.",
          "Gestão de backup e restore (RMAN).",
        ],
      },
      "Implementar, manter e validar ambientes de alta disponibilidade com Oracle Data Guard (físico e/ou lógico, conforme o cenário).",
      {
        title: "Atuar em tuning de banco de dados e aplicações",
        items: [
          "Análise de planos de execução.",
          "Otimização de queries e índices.",
          "Ajustes de parâmetros de instância.",
        ],
      },
      "Administrar bancos de dados Oracle em sistemas operacionais Linux (instalação, patching, troubleshooting de integração SO/BD).",
      {
        title: "Atuar em ambientes de Oracle Cloud Infrastructure (OCI)",
        items: [
          "Criação e configuração de bancos (DB System / Autonomous, conforme experiência).",
          "Ajustes de recursos, segurança e conectividade.",
        ],
      },
      {
        title: "Participar de atendimentos sob demanda",
        items: [
          "Resolução de incidentes em produção.",
          "Execução de mudanças planejadas (change requests).",
          "Apoio em migrações, upgrades e projetos pontuais.",
        ],
      },
      "Registrar atividades, evidências e recomendações em relatórios técnicos e comunicados claros para o cliente.",

    ],
    requirements: [
      "Experiência comprovada de no mínimo 3 anos como DBA Oracle.",
      "Vivência prática com Oracle Database 11g, 12c, 18c e/ou 19c.",
      "Sólida experiência em ambiente Linux (administração básica voltada para banco de dados).",
      "Experiência com Oracle Data Guard (instalação, configuração, monitoração e failover/switchover).",
      "Atuação consistente em tuning de banco de dados e de queries (identificação de gargalos, análise de AWR/ASH, otimização de índices, etc.).",
      "Conhecimento em backup e recuperação com RMAN.",
      "Experiência com Oracle em nuvem, preferencialmente Oracle Cloud Infrastructure (OCI).",
      "Capacidade de atuar de forma autônoma, organizada e orientada a resultado.",
      "Boa comunicação escrita e verbal para interação com times técnicos e de negócio.",

    ],
    benefits: [
      "Trabalho remoto e horário flexível",
      "Remuneração competitiva por projeto/hora",
      "Oportunidade de atuação em projetos de grande porte",
    ],
    diferenciais: [
      "Certificações Oracle (OCA, OCP, OCI, etc.).",
      "Experiência com outras nuvens (AWS, Azure, GCP).",
      "Conhecimento em outras bases de dados (PostgreSQL, SQL Server, MySQL).",
      "Experiência prévia em modelo sob demanda / consultoria / plantão.",
      "Vivência com ferramentas de monitoração (OEM, Zabbix, Grafana, etc.).",

    ],
    howToApply: {
      email: "rh@dataquali.com.br",
      note: "Envie CV e portfólio de consultorias anteriores com a referência do título da vaga.",
    },
  },
};

export const getAllJobs = () => Object.entries(jobs).map(([slug, job]) => ({ slug, ...job }));
export const getJob = (slug: string) => jobs[slug];

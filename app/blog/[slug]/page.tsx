import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts: Record<string, any> = {
  "ia-engenharia-dados": {
    title: "Como a IA está transformando a Engenharia de Dados",
    image: "/assets/blog-1.jpg",
    category: "IA",
    date: "15 de Janeiro, 2024",
    readTime: "7 min",
    content: [
      { type: "paragraph", text: "A inteligência artificial está remodelando a engenharia de dados ao automatizar tarefas repetitivas, melhorar a qualidade dos dados e acelerar a construção de pipelines robustos. Neste artigo exploramos como IA e técnicas relacionadas estão impactando cada etapa do ciclo de vida dos dados." },
      { type: "heading", text: "Automação de pipelines" },
      { type: "paragraph", text: "Ferramentas habilitadas por IA identificam e sugerem transformações, mapeamentos e ajustes em pipelines de ETL/ELT, reduzindo o tempo necessário para entregar fluxos de dados confiáveis. Isso libera engenheiros para focar em arquitetura e otimização." },
      { type: "heading", text: "Qualidade de dados e detecção de anomalias" },
      { type: "paragraph", text: "Modelos de detecção de anomalias e padrões inconsistentes ajudam a identificar problemas de qualidade antes que eles afetem relatórios ou modelos analíticos. Técnicas de ML permitem criar validações dinâmicas que se adaptam às características dos datasets." },
      { type: "heading", text: "Modelos, MLOps e integração" },
      { type: "paragraph", text: "A integração entre engenharia de dados e MLOps está cada vez mais próxima: pipelines de dados bem projetados são fundamentais para treinar, validar e implantar modelos de IA de maneira reprodutível. Isso inclui monitoramento contínuo de deriva de dados e re-treinamento automatizado." },
      { type: "paragraph", text: "Em resumo, a IA não substitui engenheiros de dados — ela potencia sua produtividade, automatiza tarefas repetitivas e eleva a qualidade das entregas. A combinação de boas práticas de engenharia com ferramentas inteligentes é o caminho para pipelines mais resilientes e valiosos para negócios." }
    ]
  },
  "futuro-cloud-computing": {
    title: "O Futuro do Cloud Computing em 2024",
    image: "/assets/blog-1.jpg",
    category: "Cloud",
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    content: [
      { type: "paragraph", text: "A computação em nuvem continua evoluindo rapidamente, trazendo novas oportunidades e desafios para empresas de todos os portes. Em 2024, observamos tendências que estão moldando o futuro desta tecnologia." },
      { type: "heading", text: "Multi-Cloud e Hybrid Cloud" },
      { type: "paragraph", text: "Empresas estão cada vez mais adotando estratégias multi-cloud para evitar vendor lock-in e otimizar custos. A combinação de múltiplos provedores permite escolher o melhor serviço de cada plataforma, maximizando eficiência e reduzindo riscos." },
      { type: "paragraph", text: "O modelo hybrid cloud também ganha força, permitindo que organizações mantenham dados sensíveis on-premise enquanto aproveitam a escalabilidade da nuvem pública para outras cargas de trabalho." },
      { type: "heading", text: "Serverless e Edge Computing" },
      { type: "paragraph", text: "A arquitetura serverless elimina a necessidade de gerenciar infraestrutura, permitindo que desenvolvedores foquem exclusivamente no código. Combinado com edge computing, que processa dados mais próximos dos usuários finais, observamos melhorias significativas em latência e experiência do usuário." },
      { type: "heading", text: "IA e Automação em Cloud" },
      { type: "paragraph", text: "Inteligência artificial está sendo integrada diretamente aos serviços cloud, desde otimização automática de recursos até detecção de anomalias e segurança. Ferramentas de AIOps (Artificial Intelligence for IT Operations) estão revolucionando a forma como gerenciamos infraestrutura cloud." },
      { type: "paragraph", text: "A tendência é que cada vez mais decisões operacionais sejam tomadas automaticamente por sistemas inteligentes, reduzindo custos operacionais e aumentando confiabilidade." }
    ]
  },
  "analise-dados-power-bi": {
    title: "Análise de Dados com Power BI: Guia Completo",
    image: "/assets/blog-2.jpg",
    category: "Dados",
    date: "10 de Janeiro, 2024",
    readTime: "10 min",
    content: [
      { type: "paragraph", text: "O Power BI se consolidou como uma das ferramentas mais poderosas para análise e visualização de dados no mercado. Neste guia, exploramos como extrair o máximo valor desta plataforma." },
      { type: "heading", text: "Por que Power BI?" },
      { type: "paragraph", text: "O Power BI oferece uma combinação única de facilidade de uso e poder analítico. Sua integração nativa com o ecossistema Microsoft, aliada à capacidade de conectar-se a centenas de fontes de dados diferentes, o torna uma escolha natural para empresas de todos os portes." },
      { type: "heading", text: "Modelagem de Dados Eficiente" },
      { type: "paragraph", text: "Uma modelagem de dados bem estruturada é fundamental para dashboards performáticos. O conceito de star schema, com tabelas de fatos e dimensões claramente definidas, permite queries rápidas e análises flexíveis." },
      { type: "paragraph", text: "Utilize DAX (Data Analysis Expressions) para criar medidas calculadas poderosas. Embora a linguagem tenha uma curva de aprendizado, dominar DAX permite análises sofisticadas e cálculos complexos de forma eficiente." },
      { type: "heading", text: "Melhores Práticas de Visualização" },
      { type: "paragraph", text: "Visualizações efetivas contam histórias. Evite sobrecarregar dashboards com muitos gráficos. Cada elemento visual deve ter um propósito claro e contribuir para a narrativa dos dados." },
      { type: "paragraph", text: "Considere o contexto do usuário: dashboards executivos devem ser diferentes de dashboards operacionais. Use hierarquias de drill-down para permitir que usuários explorem dados em diferentes níveis de detalhe." },
      { type: "heading", text: "Governança e Segurança" },
      { type: "paragraph", text: "Implemente Row-Level Security (RLS) para controlar o acesso aos dados. Estabeleça processos claros de certificação de datasets e relatórios. Documente transformações e cálculos para garantir auditabilidade." }
    ]
  },
  "melhores-praticas-devops": {
    title: "Melhores Práticas de DevOps para 2024",
    image: "/assets/blog-3.jpg",
    category: "DevOps",
    date: "5 de Janeiro, 2024",
    readTime: "12 min",
    content: [
      { type: "paragraph", text: "DevOps transformou a forma como desenvolvemos e entregamos software. À medida que entramos em 2024, novas práticas e ferramentas continuam emergindo, refinando ainda mais esta cultura." },
      { type: "heading", text: "CI/CD Moderno" },
      { type: "paragraph", text: "Pipelines de CI/CD robustos são a espinha dorsal de qualquer operação DevOps eficiente. Automatize desde testes unitários até deployment em produção, garantindo que cada mudança de código passe por validações rigorosas." },
      { type: "paragraph", text: "Ferramentas como GitHub Actions, GitLab CI, e Azure DevOps oferecem capacidades poderosas para orquestrar pipelines complexos. Implemente estratégias de deployment progressivo, como blue-green ou canary deployments, para minimizar riscos." },
      { type: "heading", text: "Infrastructure as Code (IaC)" },
      { type: "paragraph", text: "Gerenciar infraestrutura através de código versionado traz benefícios imensos: reprodutibilidade, versionamento, e capacidade de review. Terraform e AWS CloudFormation são escolhas populares, cada uma com suas vantagens." },
      { type: "paragraph", text: "Mantenha seus módulos de IaC modulares e reutilizáveis. Implemente testes para sua infraestrutura assim como faria para código de aplicação." },
      { type: "heading", text: "Observabilidade Completa" },
      { type: "paragraph", text: "Logs, métricas e traces formam os três pilares da observabilidade. Ferramentas como Prometheus, Grafana, e OpenTelemetry permitem visibilidade profunda do comportamento de sistemas em produção." },
      { type: "paragraph", text: "Não basta coletar dados - implemente alertas inteligentes que notifiquem problemas reais, não apenas sintomas. Use SLOs (Service Level Objectives) para definir e medir confiabilidade de forma objetiva." },
      { type: "heading", text: "Segurança Integrada (DevSecOps)" },
      { type: "paragraph", text: "Segurança não pode ser um afterthought. Integre scanning de vulnerabilidades em seus pipelines CI/CD. Ferramentas como Snyk, Trivy, e OWASP ZAP ajudam identificar problemas antes que cheguem em produção." },
      { type: "paragraph", text: "Implemente práticas de secrets management adequadas - nunca commit credentials em código. Use ferramentas como HashiCorp Vault ou cloud-native secrets managers." }
    ]
  },

  /* novos posts de exemplo (usados como "relacionados") */
  "ia-analise-dados": {
    title: "Como a IA está transformando a análise de dados empresariais",
    image: "/assets/blog-1.jpg",
    category: "IA",
    date: "15 Mar 2024",
    readTime: "5 min",
    content: [
      { type: "paragraph", text: "IA aplicada à análise permite descobrir padrões ocultos, automatizar preparação de dados e gerar insights acionáveis mais rapidamente." },
      { type: "paragraph", text: "Modelos preditivos, NLP e automação de feature engineering aceleram decisões de negócio e reduzem custos operacionais." }
    ]
  },
  "migracao-cloud-guia": {
    title: "Migração para Cloud: Um guia completo para empresas",
    image: "/assets/blog-2.jpg",
    category: "Cloud",
    date: "10 Mar 2024",
    readTime: "8 min",
    content: [
      { type: "paragraph", text: "Planejamento, escolha de provedores e estratégias de migração são cruciais para uma transição bem-sucedida para a nuvem." },
      { type: "paragraph", text: "Inclui recomendações sobre levantamentos, testes e cutover com mínima interrupção." }
    ]
  },
  "case-reducao-custos": {
    title: "Case de Sucesso: Redução de 60% em custos de infraestrutura",
    image: "/assets/blog-3.jpg",
    category: "Cases",
    date: "5 Mar 2024",
    readTime: "6 min",
    content: [
      { type: "paragraph", text: "Estudo de caso mostrando como re-arquitetura cloud e otimização de recursos geraram economia significativa para um e-commerce." },
      { type: "paragraph", text: "Adoção de autoscaling, rightsizing e revisão de storage foram pontos chave." }
    ]
  },
  "desenvolvimento-agil": {
    title: "Desenvolvimento Ágil: Melhores práticas para times distribuídos",
    category: "Software",
    date: "1 Mar 2024",
    readTime: "7 min",
    content: [
      { type: "paragraph", text: "Metodologias ágeis e ferramentas de colaboração permitem manter ritmo e qualidade em equipes remotas." },
      { type: "paragraph", text: "Dicas práticas sobre cerimônias, comunicação assíncrona e automação de pipelines." }
    ]
  },
  "cto-as-a-service": {
    title: "O papel estratégico do CTO as a Service na transformação digital",
    image: "/assets/blog-8.jpg",
    category: "Insights",
    date: "25 Fev 2024",
    readTime: "4 min",
    content: [
      { type: "paragraph", text: "CTO as a Service ajuda empresas a acelerar decisões técnicas sem aumentar headcount." },
      { type: "paragraph", text: "Cobertura de governança tecnológica, arquitetura e priorização de produtos." }
    ]
  },
  "data-lake-vs-data-warehouse": {
    title: "Data Lake vs Data Warehouse: Qual escolher?",
    image: "/assets/blog-9.jpg",
    category: "Cloud",
    date: "20 Fev 2024",
    readTime: "6 min",
    content: [
      { type: "paragraph", text: "Comparação prática entre abordagens, custos e casos de uso para cada arquitetura." },
      { type: "paragraph", text: "Inclui recomendações para times de dados e arquitetos." }
    ]
  }
  ,
  "optimizar-custos-cloud": {
    title: "Otimização de Custos em Cloud: Estratégias Práticas",
    image: "/assets/blog-10.jpg",
    category: "Cloud",
    date: "18 Mar 2024",
    readTime: "7 min",
    content: [
      { type: "paragraph", text: "Reduzir custos em cloud exige monitoramento, rightsizing e automação. Este artigo apresenta estratégias práticas e ferramentas para identificar desperdício e otimizar gastos sem sacrificar performance." },
      { type: "paragraph", text: "Inclui exemplos de rightsizing, uso de instâncias spot, políticas de lifecycle para storage e automações para desligar recursos ociosos." }
    ]
  },
  "governanca-dados-praticas": {
    title: "Governança de Dados: Práticas Essenciais para Times Modernos",
    image: "/assets/blog-11.jpg",
    category: "Dados",
    date: "22 Mar 2024",
    readTime: "6 min",
    content: [
      { type: "paragraph", text: "Governança de dados garante qualidade, conformidade e confiança nas decisões. Abordamos políticas de acesso, catalogação, lineage e práticas de observabilidade de dados." },
      { type: "paragraph", text: "Recomendações práticas para implementar RACI, data contracts e automação de testes de qualidade de dados em pipelines." }
    ]
  }
};

// gera os params estáticos para export
export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    redirect("/blog");
  }

  const related: Record<string, any> = {
    "ia-analise-dados": {
    title: "Como a IA está transformando a análise de dados empresariais",
    image: "/assets/blog-1.jpg",
    category: "IA",
    date: "15 Mar 2024",
    readTime: "5 min",
    content: [
      { type: "paragraph", text: "IA aplicada à análise permite descobrir padrões ocultos, automatizar preparação de dados e gerar insights acionáveis mais rapidamente." },
      { type: "paragraph", text: "Modelos preditivos, NLP e automação de feature engineering aceleram decisões de negócio e reduzem custos operacionais." }
    ]
    },
    "migracao-cloud-guia": {
      title: "Migração para Cloud: Um guia completo para empresas",
      image: "/assets/blog-2.jpg",
      category: "Cloud",
      date: "10 Mar 2024",
      readTime: "8 min",
      content: [
        { type: "paragraph", text: "Planejamento, escolha de provedores e estratégias de migração são cruciais para uma transição bem-sucedida para a nuvem." },
        { type: "paragraph", text: "Inclui recomendações sobre levantamentos, testes e cutover com mínima interrupção." }
      ]
    },
    "case-reducao-custos": {
      title: "Case de Sucesso: Redução de 60% em custos de infraestrutura",
      image: "/assets/blog-3.jpg",
      category: "Cases",
      date: "5 Mar 2024",
      readTime: "6 min",
      content: [
        { type: "paragraph", text: "Estudo de caso mostrando como re-arquitetura cloud e otimização de recursos geraram economia significativa para um e-commerce." },
        { type: "paragraph", text: "Adoção de autoscaling, rightsizing e revisão de storage foram pontos chave." }
      ]
    },
  };

  // converte o objeto `related` em um array de objetos { slug, ...post }
  const relatedList = Object.entries(related).map(([s, p]) => ({ slug: s, ...p }));

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Link href="/blog">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar para o Blog
              </Button>
            </Link>

            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          {/* grid: conteúdo principal (2/3) + sidebar (1/3) */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="max-w-3xl space-y-6">
                {post.content.map((block: any, index: number) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold mt-8 mb-4">
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </div>

            <aside className="md:col-span-1">
              <div className="sticky top-28 space-y-4">
                <h3 className="text-xl font-semibold">Posts relacionados</h3>
                <div className="space-y-4">
                  {relatedList.length > 0 ? (
                    relatedList.map((r: any) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="flex items-center gap-3 hover:opacity-90">
                        <img src={r.image} alt={r.title} className="w-16 h-12 object-cover rounded" />
                        <div className="text-sm">
                          <div className="font-medium">{r.title}</div>
                          <div className="text-muted-foreground text-xs">{r.date} • {r.readTime}</div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">Nenhum post relacionado.</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
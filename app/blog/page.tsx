import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const categories = ["Todos", "IA", "Cloud", "Software", "Cases", "Insights"];
  
  const posts = [
    {
      slug: "ia-analise-dados",
      title: "Como a IA está transformando a análise de dados empresariais",
      excerpt: "Descubra as últimas tendências em inteligência artificial aplicada a dados corporativos e como sua empresa pode se beneficiar.",
      category: "IA",
      date: "15 Mar 2024",
      readTime: "5 min"
    },
    {
      slug: "migracao-cloud-guia",
      title: "Migração para Cloud: Um guia completo para empresas",
      excerpt: "Tudo o que você precisa saber antes de migrar sua infraestrutura para a nuvem, desde planejamento até execução.",
      category: "Cloud",
      date: "10 Mar 2024",
      readTime: "8 min"
    },
    {
      slug: "case-reducao-custos",
      title: "Case de Sucesso: Redução de 60% em custos de infraestrutura",
      excerpt: "Como ajudamos uma empresa de e-commerce a otimizar sua arquitetura cloud e reduzir drasticamente custos operacionais.",
      category: "Cases",
      date: "5 Mar 2024",
      readTime: "6 min"
    },
    {
      slug: "desenvolvimento-agil",
      title: "Desenvolvimento Ágil: Melhores práticas para times distribuídos",
      excerpt: "Metodologias e ferramentas essenciais para manter a produtividade e qualidade com equipes remotas.",
      category: "Software",
      date: "1 Mar 2024",
      readTime: "7 min"
    },
    {
      slug: "cto-as-a-service",
      title: "O papel estratégico do CTO as a Service na transformação digital",
      excerpt: "Entenda como a liderança tecnológica sob demanda pode acelerar a inovação sem comprometer o orçamento.",
      category: "Insights",
      date: "25 Fev 2024",
      readTime: "4 min"
    },
    {
      slug: "data-lake-vs-data-warehouse",
      title: "Data Lake vs Data Warehouse: Qual escolher?",
      excerpt: "Análise comparativa das duas principais arquiteturas de armazenamento de dados e quando usar cada uma.",
      category: "Cloud",
      date: "20 Fev 2024",
      readTime: "6 min"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card min-h-[50vh] flex items-center relative"
      >
        <img src="/blog-hero-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-[25]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"></div>
        <div className="container mx-auto px-4 text-center space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Blog</span> & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conteúdos sobre tecnologia, dados, cloud e transformação digital
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full smooth-transition ${
                  index === 0 
                    ? "bg-primary text-white" 
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary smooth-transition group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary smooth-transition">
                    <Link href={`/blog/${post.slug}`} className="block">{post.title}</Link>
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{post.readTime} de leitura</span>
                    <Link href={`/blog/${post.slug}`} className="text-primary p-0 hover:bg-transparent group inline-flex items-center">
                      Ler mais
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 smooth-transition" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Carregar mais artigos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

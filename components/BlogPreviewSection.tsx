// components/BlogPreviewSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const BlogPreviewSection = () => {
  const posts = [
    {
      title: "Como a IA está transformando a Engenharia de Dados",
      excerpt: "Descubra as principais tendências e ferramentas de inteligência artificial aplicadas ao processamento e análise de dados.",
      date: "15 Jan 2024",
      category: "IA",
      slug: "ia-engenharia-dados",
      image: "/assets/blog-1.jpg"
    },
    {
      title: "Migração para Cloud: Por onde começar?",
      excerpt: "Um guia completo sobre estratégias de migração para nuvem, desde o planejamento até a execução.",
      date: "10 Jan 2024",
      category: "Cloud",
      slug: "migracao-cloud-guia",
      image: "/assets/blog-2.jpg"
    },
    {
      title: "CTO as a Service: Quando sua empresa precisa?",
      excerpt: "Entenda como a liderança tecnológica sob demanda pode acelerar a transformação digital do seu negócio.",
      date: "05 Jan 2024",
      category: "Insights",
      slug: "migracao-cloud-guia",
      image: "/assets/blog-3.jpg"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Últimas <span className="gradient-text">do Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tendências e cases de sucesso em tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:border-primary smooth-transition group">
              <div className="relative h-48 w-full overflow-hidden">
                {/* Usamos next/image com layout 'fill' para cobrir o container */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 smooth-transition"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-primary smooth-transition">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`} className="inline-flex items-center">
                  <Button variant="ghost" className="group/button p-0 h-auto text-primary hover:bg-transparent">
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 smooth-transition" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Ver todos os artigos
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

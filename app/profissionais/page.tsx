"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";
import { jobs, getAllJobs } from "@/lib/jobs";

const Professionals = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Crescimento Profissional",
      description: "Projetos desafiadores com tecnologias de ponta e oportunidades reais de evolução na carreira."
    },
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Time multidisciplinar, cultura de aprendizado contínuo e troca de conhecimento constante."
    },
    {
      icon: Heart,
      title: "Equilíbrio Vida-Trabalho",
      description: "Flexibilidade de horários, trabalho remoto e respeito ao seu tempo pessoal."
    },
    {
      icon: Briefcase,
      title: "Remuneração Competitiva",
      description: "Pacote de benefícios atrativo, bônus por performance e reconhecimento do seu valor."
    }
  ];

  const jobPositions = getAllJobs().map((j) => ({
    id: j.slug,
    title: j.title,
    location: j.location,
    type: j.type,
    url: `/profissionais/${j.slug}`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log("Formulário enviado");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card min-h-[50vh] flex items-center relative"
      >
        <img src="/professionals-hero-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-[25]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"></div>
        <div className="container mx-auto px-4 text-center space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            Faça Parte do <span className="gradient-text">Time</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Junte-se a uma equipe apaixonada por tecnologia e transformação digital
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">
              Por que trabalhar na <span className="gradient-text">Dataquali?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary smooth-transition">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Vagas Abertas</h2>
            <p className="text-xl text-muted-foreground">
              Confira as oportunidades disponíveis
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobPositions.map((job, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary smooth-transition">
                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {job.location} • {job.type}
                    </p>
                  </div>
                  <Link href={job.url}>
                    <Button className="bg-primary hover:bg-accent">
                      Ver Detalhes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">Envie seu Currículo</h2>
              <p className="text-xl text-muted-foreground">
                Não encontrou a vaga ideal? Cadastre-se mesmo assim!
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome Completo</label>
                      <Input placeholder="Seu nome" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="seu@email.com" className="bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">LinkedIn</label>
                    <Input placeholder="linkedin.com/in/seuperfil" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Área de Interesse</label>
                    <Input placeholder="Ex: Engenharia de Dados, Desenvolvimento..." className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem</label>
                    <Textarea 
                      placeholder="Conte-nos sobre sua experiência e objetivos profissionais..." 
                      className="bg-background min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-accent">
                    Enviar Candidatura
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Professionals;

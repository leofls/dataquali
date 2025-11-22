"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@dataquali.com",
      action: "mailto:contato@dataquali.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Fale conosco agora",
      action: "https://wa.me/5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card min-h-[50vh] flex items-center relative"
      >
        <img src="/contact-hero-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-[25]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"></div>
        <div className="container mx-auto px-4 text-center space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            Entre em <span className="gradient-text">Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fale com nossos especialistas e descubra como podemos ajudar seu negócio
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary smooth-transition group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 smooth-transition">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                  <a 
                    href={info.action}
                    className="text-muted-foreground hover:text-primary smooth-transition block"
                  >
                    {info.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center space-y-4 mb-8">
                  <h2 className="text-3xl font-bold">Envie uma Mensagem</h2>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entraremos em contato em até 24 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome Completo *</label>
                      <Input placeholder="Seu nome" className="bg-background" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input type="email" placeholder="seu@email.com" className="bg-background" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefone</label>
                      <Input placeholder="(11) 99999-9999" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Empresa</label>
                      <Input placeholder="Nome da empresa" className="bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assunto *</label>
                    <Input placeholder="Como podemos ajudar?" className="bg-background" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem *</label>
                    <Textarea 
                      placeholder="Descreva seu projeto ou necessidade..." 
                      className="bg-background min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-accent glow-effect" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Qual o prazo médio para início de um projeto?",
                  a: "Dependendo da complexidade e disponibilidade, podemos iniciar em até 2 semanas após o alinhamento inicial."
                },
                {
                  q: "Vocês trabalham com contratos flexíveis?",
                  a: "Sim! Oferecemos modelos de contratação por projeto, squad dedicado ou CTO as a Service com contratos flexíveis."
                },
                {
                  q: "Atendem empresas de qualquer porte?",
                  a: "Sim, trabalhamos desde startups até grandes corporações, adaptando nossas soluções para cada realidade."
                },
                {
                  q: "Como funciona o suporte pós-projeto?",
                  a: "Oferecemos SLA personalizado com suporte técnico, manutenções evolutivas e monitoramento contínuo."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

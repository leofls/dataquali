import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import CTASection from "@/components/CTASection";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Entregar soluções tecnológicas inteligentes que transformam dados em valor real para nossos clientes, com excelência técnica e relacionamento próximo.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência em soluções de dados e cloud no Brasil, reconhecida pela qualidade técnica, inovação e pelo impacto positivo nos negócios dos clientes.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Excelência técnica, transparência, comprometimento com resultados, inovação constante e respeito às pessoas.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-gradient-to-b from-background to-card min-h-[50vh] flex items-center relative">
        <img
          src="/about-hero-bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-[25]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

        <div className="container mx-auto px-4 text-center space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold">
            Quem <span className="gradient-text">Somos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de uma década construindo soluções tecnológicas que fazem a diferença
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Nossa História</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Fundada há mais de 10 anos, a Dataquali nasceu da visão de unir expertise técnica
                    com um relacionamento próximo e humano. Desde o início, acreditamos que a melhor
                    tecnologia é aquela feita por pessoas, para pessoas.
                  </p>
                  <p>
                    Ao longo de nossa jornada, ajudamos dezenas de empresas a transformarem seus
                    processos através de soluções inteligentes em dados, cloud e software. Cada projeto
                    é uma oportunidade de entregar não apenas código, mas valor real para o negócio.
                  </p>
                  <p>
                    Hoje, somos reconhecidos pela qualidade técnica, agilidade e comprometimento com
                    os resultados de nossos clientes. Nossa equipe multidisciplinar está pronta para
                    enfrentar os desafios mais complexos da transformação digital.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/assets/equipe.jpg"
                  alt="Nossa equipe trabalhando juntos"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">
              Nossos <span className="gradient-text">Números</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">10+</div>
              <div className="text-xl text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">150+</div>
              <div className="text-xl text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">80+</div>
              <div className="text-xl text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">50+</div>
              <div className="text-xl text-muted-foreground">Especialistas Certificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">
              Nossos <span className="gradient-text">Pilares</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-background border-border hover:border-primary smooth-transition">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Nossa Cultura</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Acreditamos em um ambiente de trabalho colaborativo, onde a inovação é incentivada
              e o crescimento profissional é constante. Valorizamos a diversidade, a transparência
              e o equilíbrio entre vida pessoal e profissional.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nossa equipe é formada por profissionais apaixonados por tecnologia, sempre em busca
              de aprendizado e evolução. Aqui, cada pessoa tem voz e contribui ativamente para o
              sucesso coletivo.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutPage;
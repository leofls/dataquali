"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroSlide1 from "@/public/hero/hero-slide-1.jpg";
import heroSlide2 from "@/public/hero/hero-slide-2.jpg";
import heroSlide3 from "@/public/hero/hero-slide-3.jpg";
import Image from "next/image";

const Hero = () => {
  const slides = [
    { src: heroSlide1.src, alt: "Equipe Dataquali colaborando" },
    { src: heroSlide2.src, alt: "Infraestrutura Cloud" },
    { src: heroSlide3.src, alt: "Análise de Dados" },
  ];

  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen">
                <div
                  className="h-full bg-cover bg-no-repeat bg-bottom"
                  style={{ backgroundImage: `url(${slide.src})` }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-10" />
          <CarouselNext className="right-4 z-10" />
        </Carousel>
        <div className="lente absolute z-8 inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center space-y-8 py-32">
        <Image 
          src="/DQ-COR.png"
          alt="Dataquali Logo"
          width={200}
          height={80}
          className="mx-auto mb-4 animate-fade-in filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
        />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
          Tecnologia feita por pessoas,<br />
          <span className="gradient-text">para transformar negócios</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in leading-relaxed">
          Há mais de 10 anos impulsionando empresas com soluções sob medida em software, dados e cloud — com inovação, proximidade e resultados reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-accent text-lg px-8 smooth-transition glow-effect">
            Solicitar Proposta
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white smooth-transition">
            Falar com um Especialista
          </Button>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold gradient-text">10+</p>
            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold gradient-text">150+</p>
            <p className="text-sm text-muted-foreground">Projetos Entregues</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold gradient-text">80+</p>
            <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold gradient-text">50+</p>
            <p className="text-sm text-muted-foreground">Especialistas Certificados</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

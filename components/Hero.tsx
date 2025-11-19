"use client";

import Image from "next/image";
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

const Hero = () => {
  const slides = [
    { src: "/hero/hero-slide-1.jpg", alt: "Equipe Dataquali colaborando" },
    { src: "/hero/hero-slide-2.jpg", alt: "Infraestrutura Cloud" },
    { src: "/hero/hero-slide-3.jpg", alt: "Análise de Dados" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover opacity-60"
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-8"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center space-y-8 py-32">
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
      </div>
    </section>
  );
};

export default Hero;

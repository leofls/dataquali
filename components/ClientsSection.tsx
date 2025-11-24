"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { url } from "inspector";

const ClientsSection = () => {
  const clients = [
    { 
      name: "Carajas", 
      logo: "/clients/carajas-logo.png",
      url: "https://www.carajas.com.br/"
    },
    { 
      name: "Hospital Veredas", 
      logo: "/clients/hospital-veredas-logo.png",
      url: "https://www.hospitalveredas.com.br/web/"

    },
    { 
      name: "Usina Impacto", 
      logo: "/clients/usina-impacto-logo.png",
      url: "https://ibea.com.br/"
    },
    { 
      name: "Hospital Sanatório", 
      logo: "/clients/hospital-sanatorio-logo.png", 
      url: ""
    },
    { 
      name: "4QEgenharia", 
      logo: "/clients/4qengenharia-logo.png", 
      url: "https://4qengenharia.com.br/" 
    },
    { 
      name: "Itp Soluções", 
      logo: "/clients/itp-solucoes-logo.png",
      url: "https://itpsolucoes.com.br/"
    },
    { 
      name: "Lunio", 
      logo: "/clients/lunio-logo.png", 
      url: "https://luniobr.com/"
    },
    { 
      name: "ATM", 
      logo: "/clients/atm-logo.png",
      url: "https://www.atmit.com.br/"
    },
    
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">

        {/* Cabeçalho */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Empresas que <span className="gradient-text">confiam</span> em nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Parceiros de sucesso em diversos setores
          </p>
        </motion.div>

        {/* Grid de clientes */}
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-card border border-border rounded-lg 
              hover:border-primary hover:scale-105 group smooth-transition cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              onClick={() => {
                if (client.url) {
                  window.open(client.url, "_blank");
                }
              }}  
            >
              <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {typeof client.logo === "string" && client.logo.startsWith("/") ? (
                  <Image src={client.logo} alt={client.name} width={80} height={40} />
                ) : (
                  client.logo
                )}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-lg px-8 smooth-transition glow-effect"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Quer se tornar um parceiro?
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white smooth-transition"
          >
            Conheça nosso Plano de Parceria
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;

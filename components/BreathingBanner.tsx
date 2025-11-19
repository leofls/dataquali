"use client";

import { motion } from "framer-motion";

const BreathingBanner = () => {
  return (
    <section
      className="relative min-h-[55vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(/assets/breathing-banner-bg.jpg)`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >

      {/* Overlay escuro + suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80" />

      {/* Glow breathing */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.15), rgba(0,0,0,0.6))",
        }}
      />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Transformamos{" "}
            <span className="gradient-text">desafios complexos</span>  
            em soluções simples
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Com uma abordagem centrada em pessoas e resultados, construímos tecnologia  
            que realmente faz a diferença.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default BreathingBanner;

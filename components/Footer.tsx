"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5511999999999"; // Substituir com número real

  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const updateThemeFromDoc = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };

    updateThemeFromDoc();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes") updateThemeFromDoc();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") updateThemeFromDoc();
    };

    window.addEventListener("storage", onStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const logoSrc =
    theme === "light"
      ? "/DATA QUALI.png"
      : "/DATA QUALI.png"

  return (
    <footer className="bg-card border-t border-border relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              <Image
                className="w-1/2 filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                src={logoSrc}
                width={200}
                height={80}
                alt="Logo Dataquali"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.src =
                    theme === "light"
                      ? "/DATA QUALI.png"
                      : "/DATA QUALI.png"
                }}
              />
            </h3>

            <p className="text-sm text-muted-foreground">
              Tecnologia feita por pessoas, <br />
              para transformar negócios.
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Linkedin size={20} />
              </Link>

              <Link
                href="#"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Instagram size={20} />
              </Link>

              <Link
                href="mailto:contato@dataquali.com.br"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Quem Somos
                </Link>
              </li>

              <li>
                <Link
                  href="/servicos"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Serviços
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contato"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Administração de Bancos de Dados</li>
              <li className="text-sm text-muted-foreground">Consultoria em Cloud Computing</li>
              <li className="text-sm text-muted-foreground">Migração para Nuvem</li>
              <li className="text-sm text-muted-foreground">Desenvolvimento de Software</li>
              <li className="text-sm text-muted-foreground">Engenharia e Ciência de Dados</li>
              <li className="text-sm text-muted-foreground">Alocação de Profissionais</li>
              <li className="text-sm text-muted-foreground">CTO as a Service</li>
              <li className="text-sm text-muted-foreground">Transformação Digital</li>
              <li className="text-sm text-muted-foreground">Gerência de Projetos de TI</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>(11) 9999-9999</span>
              </li>

              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>contato@dataquali.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dataquali Soluções Inteligentes. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg smooth-transition animate-glow z-50"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;

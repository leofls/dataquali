"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sincroniza o tema igual seu React Router
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

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Quem Somos" },
    { path: "/servicos", label: "Serviços" },
    { path: "/profissionais", label: "Profissionais" },
    { path: "/blog", label: "Blog" },
    { path: "/contato", label: "Contato" },
  ];

  // Função pra marcar link ativo (como era no Router)
  const normalize = (p?: string) => {
    if (!p) return "/";
    if (p.endsWith("/") && p !== "/") return p.slice(0, -1);
    return p;
  };

  const currentPath = normalize(pathname);

  const isActive = (route: string) => {
    const r = normalize(route);
    if (r === "/") return currentPath === "/";
    return currentPath === r || currentPath.startsWith(r + "/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={
                theme === "light"
                  ? "/Dataquali_preto_Azul_sem_slogan.png"
                  : "/Dataquali_BRANCO_Azul_sem_slogan.png"
              }
              alt="Dataquali"
              width={150}
              height={40}
              className="h-12 w-auto"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.src =
                  theme === "light"
                    ? "/Dataquali - Logo.png"
                    : "/Dataquali_BRANCO_Tom_Azul.png";
              }}
            />
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium smooth-transition hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle />

            <Button className="bg-primary hover:bg-accent smooth-transition">
              Fale com um Especialista
            </Button>
          </div>

          {/* BOTÃO DO MENU MOBILE */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block text-sm font-medium py-2 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button className="w-full bg-primary hover:bg-accent">
              Fale com um Especialista
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

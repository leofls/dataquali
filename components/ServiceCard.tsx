"use client";

import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard = ({ icon: Icon, title, description, slug }: ServiceCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary smooth-transition group">
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        <Link href={`/servicos/${slug}`} className="inline-block">
          <Button
            variant="ghost"
            className="text-primary p-0 hover:bg-transparent group"
          >
            Saiba mais
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 smooth-transition" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

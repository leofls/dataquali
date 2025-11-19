import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Award,
      value: "10+",
      label: "Anos de Experiência",
    },
    {
      icon: Briefcase,
      value: "150+",
      label: "Projetos Entregues",
    },
    {
      icon: Users,
      value: "80+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: TrendingUp,
      value: "50+",
      label: "Especialistas Certificados",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg hover:bg-card smooth-transition"
              >
                <div className="flex justify-center">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

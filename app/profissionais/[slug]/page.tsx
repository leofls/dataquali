import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { jobs, getJob } from "@/lib/jobs";

type Params = { slug: string };

export async function generateStaticParams() {
  return Object.keys(jobs).map((slug) => ({ slug }));
}

export default async function JobDetail({ params }: { params: Params | Promise<Params> }) {
  const { slug } = (await params) as Params;
  const job = getJob(slug);

  if (!job) {
    redirect("/profissionais");
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Link href="/profissionais">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para Vagas
              </Button>
            </Link>

            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Vaga
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">{job.title}</h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> <span>{job.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{job.description}</p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Responsabilidades</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {job.responsibilities.map((r: any, i: number) => {
                    // r can be a string or an object { title, items }
                    if (typeof r === "string") {
                      return <li key={i}>{r}</li>;
                    }

                    return (
                      <li key={i}>
                        <span className="">{r.title}</span>
                        <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                          {r.items.map((it: string, j: number) => (
                            <li key={j} className="text-muted-foreground">{it}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Requisitos</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {job.requirements.map((r: string, i: number) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {job.diferenciais && job.diferenciais.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Diferenciais</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {job.diferenciais.map((d: string, i: number) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Benefícios</h3>
                  <ul className="text-muted-foreground list-disc list-inside space-y-2">
                    {job.benefits.map((b: string, i: number) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Como se Candidatar</h3>
                  <p className="text-muted-foreground">{job.howToApply.note}</p>
                  <a href={`mailto:${job.howToApply.email}`} className="block mt-2">
                    <Button className="w-full bg-primary">Enviar por Email</Button>
                  </a>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

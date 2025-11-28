import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade do site",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>

        <p className="mb-4 text-lg">Esta é uma política de privacidade de exemplo. Aqui explicamos de forma clara quais dados coletamos, por que coletamos e como você pode controlar suas informações.</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Dados coletados</h2>
          <p>Coletamos informações básicas como cookies, dados de navegação, e informações que você fornece voluntariamente (por exemplo, via formulários de contato).</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Finalidade</h2>
          <p>Usamos os dados para melhorar a experiência do usuário, fornecer e manter nossos serviços, e para comunicações relacionadas ao serviço.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
          <p>Utilizamos cookies para lembrar preferências e consentimentos. Você pode remover o consentimento a qualquer momento através das configurações do navegador ou removendo o cookie <code>privacyAcceptedAt</code>.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Seus direitos</h2>
          <p>Você tem direito de acessar, corrigir, ou solicitar a exclusão de seus dados. Para solicitações, entre em contato através do email: <a href="mailto:contato@example.com" className="underline">contato@example.com</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Contato</h2>
          <p>Se tiver dúvidas sobre esta política, entre em contato conosco.</p>
        </section>

        <div className="flex gap-3">
          <Link href="/" className="inline-block rounded-md bg-slate-100 px-4 py-2 text-black hover:bg-primary hover:text-white smooth-transition">
            Voltar
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

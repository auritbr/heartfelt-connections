import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/site-data";
import { Mail, MapPin, MessageCircle, Phone, Clock, Instagram, Facebook, Youtube, Linkedin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Instituto Raízes do Futuro" },
      { name: "description", content: "Fale conosco para conhecer projetos, propor parcerias ou participar das atividades." },
      { property: "og:title", content: "Contato" },
      { property: "og:description", content: "Fale com o Instituto Raízes do Futuro." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const motivos = ["Participar de atividades", "Parcerias", "Imprensa", "Visita institucional", "Voluntariado", "Doação", "Transparência", "Outros"];

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(f.get("nome") ?? "").trim()) errs.nome = "Informe seu nome";
    const email = String(f.get("email") ?? "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "E-mail inválido";
    if (!String(f.get("mensagem") ?? "").trim()) errs.mensagem = "Escreva sua mensagem";
    if (!f.get("consent")) errs.consent = "É necessário autorizar";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      (e.currentTarget as HTMLFormElement).reset();
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Entre em contato"
        description="Fale conosco para conhecer os projetos, propor parcerias, participar das atividades ou solicitar informações."
        image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: "Contato" }]}
      />

      <section className="section-y">
        <div className="container-narrow">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: MapPin, title: "Endereço", value: site.address },
              { icon: Phone, title: "Telefone", value: site.phone },
              { icon: MessageCircle, title: "WhatsApp", value: `+${site.whatsapp}` },
              { icon: Mail, title: "E-mail", value: site.email },
              { icon: Clock, title: "Atendimento", value: site.hours },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border bg-card p-5">
                <c.icon className="h-5 w-5 text-[color:var(--moss)]" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.title}</p>
                <p className="mt-0.5 text-sm text-[color:var(--forest)]">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[color:var(--paper)]">
        <div className="container-narrow grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">Envie uma mensagem</h2>
            <p className="mt-2 text-sm text-muted-foreground">Retornamos em até 3 dias úteis.</p>
            {sent && (
              <div className="mt-4 flex items-start gap-2 rounded-lg border border-[color:var(--moss)] bg-[color:var(--leaf)]/60 p-3 text-sm text-[color:var(--forest)]">
                <CheckCircle2 className="h-4 w-4 mt-0.5" /> Mensagem enviada. Obrigado pelo contato!
              </div>
            )}
            <form noValidate onSubmit={onSubmit} className="mt-6 grid gap-4">
              {[
                ["nome", "Nome completo", "text"],
                ["email", "E-mail", "email"],
                ["telefone", "Telefone", "tel"],
                ["assunto", "Assunto", "text"],
              ].map(([name, label, type]) => (
                <label key={name} className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
                  <input name={name} type={type} className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm" />
                  {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
                </label>
              ))}
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Motivo do contato</span>
                <select name="motivo" className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm">
                  {motivos.map((m) => <option key={m}>{m}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mensagem</span>
                <textarea name="mensagem" rows={5} className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm" />
                {errors.mensagem && <span className="mt-1 block text-xs text-destructive">{errors.mensagem}</span>}
              </label>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input name="consent" type="checkbox" className="mt-0.5 h-4 w-4 accent-[color:var(--forest)]" />
                <span>Autorizo o tratamento dos dados enviados, conforme a Política de Privacidade.</span>
              </label>
              {errors.consent && <span className="text-xs text-destructive">{errors.consent}</span>}
              <button type="submit" className="w-fit rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]">Enviar mensagem</button>
            </form>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">Onde estamos</h2>
            <p className="mt-2 text-sm text-muted-foreground">{site.address}</p>
            <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-card">
              <iframe
                title="Localização"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.65%2C-23.56%2C-46.62%2C-23.54&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-[color:var(--forest)]">Redes sociais</h3>
              <div className="mt-3 flex gap-3">
                <a href={site.social.instagram} aria-label="Instagram" className="rounded-full border p-2.5 hover:bg-secondary"><Instagram className="h-4 w-4" /></a>
                <a href={site.social.facebook} aria-label="Facebook" className="rounded-full border p-2.5 hover:bg-secondary"><Facebook className="h-4 w-4" /></a>
                <a href={site.social.youtube} aria-label="YouTube" className="rounded-full border p-2.5 hover:bg-secondary"><Youtube className="h-4 w-4" /></a>
                <a href={site.social.linkedin} aria-label="LinkedIn" className="rounded-full border p-2.5 hover:bg-secondary"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

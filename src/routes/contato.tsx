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

      {/* Seção principal — Informações à esquerda, Formulário à direita */}
      <section className="section-y">
        <div className="container-narrow grid gap-8 lg:gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Coluna esquerda: informações */}
          <aside className="relative overflow-hidden rounded-3xl bg-[color:var(--forest)] text-[color:var(--paper)] p-6 md:p-10">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1600&q=80&auto=format&fit=crop"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--forest)]/90 via-[color:var(--forest)]/75 to-[color:var(--forest)]/90" />
            <svg viewBox="0 0 200 60" aria-hidden className="relative h-6 w-32 text-[color:var(--ochre)] mb-4">
              <path d="M2 30 C 40 5 80 55 120 30 C 160 5 195 40 198 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">Fale conosco</p>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
                Informações de contato
              </h2>
              <p className="mt-3 text-sm text-[color:var(--paper)]/85 max-w-md">
                Estamos disponíveis para receber sugestões, propostas de parceria e convites para atividades no território.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  { icon: MapPin, label: "Endereço", value: site.address },
                  { icon: Phone, label: "Telefone", value: site.phone },
                  { icon: MessageCircle, label: "WhatsApp", value: `+${site.whatsapp}` },
                  { icon: Mail, label: "E-mail", value: site.email },
                  { icon: Clock, label: "Atendimento", value: site.hours },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur">
                      <c.icon className="h-4 w-4 text-[color:var(--leaf)]" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">{c.label}</p>
                      <p className="mt-0.5 text-[color:var(--paper)] break-words">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">Redes sociais</p>
                <div className="mt-3 flex gap-2">
                  <a href={site.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
                  <a href={site.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
                  <a href={site.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
                  <a href={site.social.linkedin} aria-label="LinkedIn" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </aside>

          {/* Coluna direita: formulário */}
          <div className="rounded-3xl border bg-card p-6 md:p-10 shadow-sm">
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
        </div>
      </section>

      {/* Mapa — card refinado e moderado */}
      <section className="pb-16 md:pb-20">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl border bg-[color:var(--paper)]/60 p-4 md:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-3">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--leaf)]/60 text-[color:var(--forest)]">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--moss)]">Onde estamos</p>
                  <p className="text-sm font-medium text-[color:var(--forest)]">{site.address}</p>
                </div>
              </div>
            </div>
            <div className="aspect-[16/8] w-full overflow-hidden rounded-2xl border bg-card">
              <iframe
                title="Localização"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.65%2C-23.56%2C-46.62%2C-23.54&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

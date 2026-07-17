import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/lib/site-data";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Instituto Raízes do Futuro" },
      { name: "description", content: "Fale conosco para conhecer projetos, propor parcerias ou participar das atividades." },
      { property: "og:title", content: "Contato — Instituto Raízes do Futuro" },
      { property: "og:description", content: "Fale com o Instituto Raízes do Futuro." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const motivos = [
  "Participar de atividades",
  "Parcerias",
  "Imprensa",
  "Visita institucional",
  "Voluntariado",
  "Doação",
  "Transparência",
  "Outros",
];

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

  const mapEmbed =
    "https://www.openstreetmap.org/export/embed.html?bbox=-46.65%2C-23.56%2C-46.62%2C-23.54&layer=mapnik";
  const mapExternal = "https://www.openstreetmap.org/?mlat=-23.55&mlon=-46.633#map=15/-23.55/-46.633";

  return (
    <>
      {/* Hero moderado */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--forest)]/90 via-[color:var(--forest)]/70 to-[color:var(--forest)]/85" />
        </div>
        <div className="container-narrow relative pt-24 md:pt-28 pb-32 md:pb-44 text-[color:var(--paper)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">
            <Leaf className="inline h-3.5 w-3.5 mr-1" aria-hidden /> Contato
          </p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight">
            Vamos cultivar novas conexões
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[color:var(--paper)]/90">
            Entre em contato para conhecer nossas ações, participar das atividades, propor parcerias ou solicitar
            informações.
          </p>
        </div>
      </section>

      {/* Bloco principal — sobreposto ao hero */}
      <section className="relative -mt-24 md:-mt-32 pb-16 md:pb-20">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--moss)]/20 bg-card shadow-[0_30px_80px_-30px_rgba(20,50,30,0.35)]">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.15fr]">
              {/* Coluna esquerda — informações */}
              <aside className="relative overflow-hidden bg-[color:var(--forest)] text-[color:var(--paper)] p-8 md:p-10">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1600&q=80&auto=format&fit=crop"
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--forest)]/95 via-[color:var(--forest)]/85 to-[color:var(--forest)]/95" />
                <svg
                  aria-hidden
                  viewBox="0 0 300 40"
                  className="relative h-4 w-40 text-[color:var(--ochre)] mb-3"
                >
                  <path
                    d="M2 20 C 60 2 120 38 180 20 C 240 2 285 30 298 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--leaf)]">
                    Fale conosco
                  </p>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">Informações de contato</h2>
                  <p className="mt-3 text-sm text-[color:var(--paper)]/85 max-w-md">
                    Estamos disponíveis para receber sugestões, propostas de parceria e convites para atividades no
                    território.
                  </p>

                  <ul className="mt-8 divide-y divide-white/10">
                    {[
                      { icon: MapPin, label: "Endereço", value: site.address },
                      { icon: Phone, label: "Telefone", value: site.phone },
                      { icon: MessageCircle, label: "WhatsApp", value: `+${site.whatsapp}` },
                      { icon: Mail, label: "E-mail", value: site.email },
                      { icon: Clock, label: "Atendimento", value: site.hours },
                    ].map((c) => (
                      <li key={c.label} className="flex items-start gap-3 py-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15">
                          <c.icon className="h-4 w-4 text-[color:var(--leaf)]" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">
                            {c.label}
                          </p>
                          <p className="mt-0.5 text-sm text-[color:var(--paper)] break-words">{c.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--leaf)]">
                      Redes sociais
                    </p>
                    <div className="mt-3 flex gap-2">
                      <a
                        href={site.social.instagram}
                        aria-label="Instagram"
                        className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a
                        href={site.social.facebook}
                        aria-label="Facebook"
                        className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href={site.social.youtube}
                        aria-label="YouTube"
                        className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"
                      >
                        <Youtube className="h-4 w-4" />
                      </a>
                      <a
                        href={site.social.linkedin}
                        aria-label="LinkedIn"
                        className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Textura botânica no rodapé */}
                  <svg
                    aria-hidden
                    viewBox="0 0 400 80"
                    className="mt-8 h-10 w-full text-[color:var(--leaf)]/40"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M 0 60 C 60 40 120 70 200 50 C 280 30 340 65 400 45" />
                      <path d="M 0 70 C 80 55 160 78 240 60 C 320 45 370 70 400 60" opacity="0.7" />
                    </g>
                  </svg>
                </div>
              </aside>

              {/* Coluna direita — formulário */}
              <div className="p-8 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
                  Envie uma mensagem
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Preencha o formulário e nossa equipe entrará em contato.
                </p>

                {sent && (
                  <div className="mt-5 flex items-start gap-2 rounded-lg border border-[color:var(--moss)] bg-[color:var(--leaf)]/60 p-3 text-sm text-[color:var(--forest)]">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" /> Mensagem enviada. Obrigado pelo contato!
                  </div>
                )}

                <form noValidate onSubmit={onSubmit} className="mt-6 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Nome completo
                      </span>
                      <input
                        name="nome"
                        type="text"
                        className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
                      />
                      {errors.nome && <span className="mt-1 block text-xs text-destructive">{errors.nome}</span>}
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        E-mail
                      </span>
                      <input
                        name="email"
                        type="email"
                        className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
                      />
                      {errors.email && <span className="mt-1 block text-xs text-destructive">{errors.email}</span>}
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Telefone
                      </span>
                      <input
                        name="telefone"
                        type="tel"
                        className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Motivo do contato
                      </span>
                      <select
                        name="motivo"
                        className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
                      >
                        {motivos.map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Assunto
                    </span>
                    <input
                      name="assunto"
                      type="text"
                      className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Mensagem
                    </span>
                    <textarea
                      name="mensagem"
                      rows={5}
                      className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--moss)]/30"
                    />
                    {errors.mensagem && (
                      <span className="mt-1 block text-xs text-destructive">{errors.mensagem}</span>
                    )}
                  </label>

                  <label className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input name="consent" type="checkbox" className="mt-0.5 h-4 w-4 accent-[color:var(--forest)]" />
                    <span>Autorizo o tratamento dos dados enviados, conforme a Política de Privacidade.</span>
                  </label>
                  {errors.consent && <span className="text-xs text-destructive">{errors.consent}</span>}

                  <button
                    type="submit"
                    className="w-fit rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa — card horizontal moderado */}
      <section className="pb-10 md:pb-14">
        <div className="container-narrow">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--moss)]">Localização</p>
            <h2 className="mt-1 font-display text-2xl md:text-3xl font-bold text-[color:var(--forest)]">
              Como chegar
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--moss)]/20 bg-[color:var(--leaf)]/25 shadow-sm">
            <div className="grid gap-0 md:grid-cols-[1fr_1.6fr]">
              <div className="relative p-6 md:p-8">
                <svg
                  aria-hidden
                  viewBox="0 0 200 200"
                  className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 text-[color:var(--moss)]/20"
                >
                  <path
                    d="M100 10 C 150 30 180 70 170 120 C 160 170 110 190 60 170 C 20 150 10 100 30 60 C 50 25 80 5 100 10 Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--forest)] text-[color:var(--paper)]">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--moss)]">
                    Endereço
                  </p>
                  <p className="mt-1 text-sm font-medium text-[color:var(--forest)]">{site.address}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Referência: próximo ao centro cultural, com acesso por transporte público.
                  </p>
                  <a
                    href={mapExternal}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--forest)] px-4 py-2 text-xs font-semibold text-[color:var(--paper)] hover:bg-[color:var(--moss)]"
                  >
                    Abrir no mapa <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div className="h-[240px] md:h-[320px] lg:h-[340px] overflow-hidden md:rounded-l-none">
                <iframe title="Localização" src={mapEmbed} className="h-full w-full border-0" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

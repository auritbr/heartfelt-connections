import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

function LegalRoute(props: {
  slug: string; title: string; description: string; sections: { h: string; p: string[] }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Documento legal"
        title={props.title}
        description={props.description}
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80&auto=format&fit=crop"
        crumbs={[{ to: "/", label: "Início" }, { label: props.title }]}
      />
      <article className="section-y">
        <div className="container-narrow max-w-3xl space-y-8">
          {props.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl font-bold text-[color:var(--forest)]">{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </section>
          ))}
          <p className="text-xs text-muted-foreground">Última atualização: 01/07/2026</p>
        </div>
      </article>
    </>
  );
}

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Instituto Raízes do Futuro" },
      { name: "description", content: "Como tratamos os dados pessoais no site do Instituto." },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: () => (
    <LegalRoute
      slug="politica-de-privacidade"
      title="Política de Privacidade"
      description="Como coletamos, utilizamos e protegemos seus dados pessoais."
      sections={[
        { h: "1. Introdução", p: ["Esta Política de Privacidade descreve como o Instituto Raízes do Futuro coleta, utiliza e protege as informações fornecidas pelos usuários deste site."] },
        { h: "2. Dados coletados", p: ["Coletamos apenas os dados necessários para responder solicitações, enviar comunicações institucionais e melhorar a experiência do usuário."] },
        { h: "3. Uso das informações", p: ["Utilizamos os dados exclusivamente para as finalidades informadas no momento da coleta."] },
        { h: "4. Direitos do titular", p: ["Você pode solicitar a qualquer momento a confirmação, o acesso, a correção ou a exclusão dos seus dados, conforme a LGPD."] },
        { h: "5. Contato", p: ["Para exercer seus direitos, entre em contato pelo e-mail contato@raizesdofuturo.org.br."] },
      ]}
    />
  ),
});

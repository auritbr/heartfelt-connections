import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Crumb = { to?: string; label: string; params?: Record<string, string> };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-[color:var(--paper)]/85">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3 opacity-70" aria-hidden />}
            {it.to ? (
              <Link to={it.to} params={it.params as never} className="hover:underline">{it.label}</Link>
            ) : (
              <span aria-current="page" className="opacity-90">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" aria-hidden className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--forest)]/85 via-[color:var(--forest)]/70 to-[color:var(--forest)]/85" />
      </div>
      <div className="container-narrow py-20 md:py-28 text-[color:var(--paper)]">
        {crumbs && <div className="mb-4">{<Breadcrumb items={crumbs} />}</div>}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--leaf)]">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base md:text-lg text-[color:var(--paper)]/90">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
      {/* Organic bottom edge — silhouette of hills */}
      <svg viewBox="0 0 1440 60" className="block w-full h-6 -mt-1 text-background" aria-hidden preserveAspectRatio="none">
        <path d="M0 60 L0 30 C 200 10 400 40 720 20 C 1040 0 1240 40 1440 25 L 1440 60 Z" fill="currentColor" />
      </svg>
    </section>
  );
}

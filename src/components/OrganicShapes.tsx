import type { SVGProps } from "react";

export function LeafDivider({ flip = false, color = "var(--paper)", ...props }: { flip?: boolean; color?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden
      className={`block w-full h-10 md:h-14 ${flip ? "rotate-180" : ""}`}
      {...props}
    >
      <path
        d="M0 0 C 120 60 260 20 420 40 C 620 65 780 5 980 30 C 1160 52 1300 20 1440 45 L 1440 90 L 0 90 Z"
        fill={color}
      />
    </svg>
  );
}

export function HillDivider({ color = "var(--paper)", ...props }: { color?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden className="block w-full h-12 md:h-16" {...props}>
      <path d="M0 60 C 240 10 480 90 720 45 C 960 5 1200 80 1440 40 L 1440 100 L 0 100 Z" fill={color} opacity="0.5" />
      <path d="M0 80 C 240 40 480 100 720 70 C 960 40 1200 100 1440 70 L 1440 100 L 0 100 Z" fill={color} />
    </svg>
  );
}

export function RiverLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 60" fill="none" aria-hidden {...props}>
      <path
        d="M2 30 C 60 5 110 55 170 30 C 230 5 280 55 340 30 C 370 15 385 25 398 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden className={className}>
      <path
        d="M8 52 C 8 20 28 6 52 8 C 54 32 40 52 8 52 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M12 48 C 24 34 36 22 50 12" stroke="var(--paper)" strokeWidth="1.2" fill="none" opacity="0.7" />
    </svg>
  );
}

export function TopoRings({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
        {Array.from({ length: 14 }).map((_, i) => (
          <ellipse key={i} cx="300" cy="300" rx={40 + i * 22} ry={30 + i * 16} />
        ))}
      </g>
    </svg>
  );
}

export function BranchLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M20 180 C 40 120 80 90 120 60 C 150 40 170 30 180 20" />
        <path d="M70 108 C 78 96 92 92 108 88" />
        <path d="M100 82 C 108 68 122 60 138 56" />
        <path d="M130 56 C 140 44 154 40 168 40" />
        <path d="M55 132 C 42 128 32 122 26 112" />
      </g>
    </svg>
  );
}

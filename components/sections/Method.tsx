import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type MethodProps = {
  coach: CoachData;
};

export function Method({ coach }: MethodProps) {
  return (
    <Section id="method" className="pt-3 md:pt-6">
      <SectionHeading
        eyebrow="Méthode"
        title={coach.method.title}
        subtitle={coach.method.subtitle}
      />
      <div className="grid gap-3.5 sm:gap-4 lg:grid-cols-3">
        {coach.method.pillars.map((pillar, index) => (
          <article
            key={pillar.title}
            className={`relative overflow-hidden rounded-[1.35rem] border border-white/12 p-5 sm:rounded-[1.8rem] sm:p-6 ${
              index === 1
                ? "bg-[linear-gradient(145deg,rgba(243,197,107,0.2),rgba(243,197,107,0.06),rgba(255,255,255,0.03))]"
                : "bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
            }`}
          >
            <span className="pointer-events-none absolute -right-5 -top-8 text-[5rem] font-semibold leading-none text-white/7 sm:text-[6.5rem]">
              {pillar.tag}
            </span>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--brand-accent)] sm:text-xs sm:tracking-[0.3em]">
              Pilier {pillar.tag}
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-[color:var(--brand-text)] sm:text-[2rem]">
              {pillar.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)] sm:text-base sm:leading-8">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

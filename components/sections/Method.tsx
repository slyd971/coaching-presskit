import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type MethodProps = {
  coach: CoachData;
};

export function Method({ coach }: MethodProps) {
  return (
    <Section id="method" className="pt-2 md:pt-4">
      <SectionHeading
        eyebrow="Méthode"
        title={coach.method.title}
        subtitle={coach.method.subtitle}
      />
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {coach.method.pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-[1.4rem] border border-[color:var(--brand-border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 sm:rounded-[1.8rem] sm:p-6"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--brand-accent)] sm:text-sm sm:tracking-[0.3em]">
              {pillar.tag}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-[color:var(--brand-text)] sm:mt-5 sm:text-2xl">
              {pillar.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)] sm:mt-4 sm:text-base">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

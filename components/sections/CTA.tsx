import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import type { CoachData } from "@/data/coach";

type CTAProps = {
  coach: CoachData;
};

export function CTA({ coach }: CTAProps) {
  return (
    <Section id="cta">
      <div className="overflow-hidden rounded-[1.25rem] border border-[color:var(--brand-border)] bg-[linear-gradient(135deg,rgba(243,197,107,0.18),rgba(138,108,255,0.14),rgba(255,255,255,0.04))] p-4 sm:rounded-[2.25rem] sm:p-8 md:p-12">
        <p className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--brand-accent)] sm:text-sm sm:tracking-[0.3em]">
          Conversion block
        </p>
        <h2 className="mt-3 max-w-4xl text-[1.8rem] font-semibold leading-[1.05] text-[color:var(--brand-text)] sm:mt-5 sm:text-4xl md:text-6xl">
          {coach.cta.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-6 text-[color:var(--brand-muted-text)] sm:mt-6 sm:text-base sm:leading-8">
          {coach.cta.body}
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
          <ButtonLink href={coach.cta.primary.href}>{coach.cta.primary.label}</ButtonLink>
          {coach.cta.secondary ? (
            <ButtonLink href={coach.cta.secondary.href} variant="secondary">
              {coach.cta.secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

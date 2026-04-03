import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import type { CoachData } from "@/data/coach";

type CTAProps = {
  coach: CoachData;
};

export function CTA({ coach }: CTAProps) {
  return (
    <Section id="cta" className="pt-5 md:pt-8">
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/14 bg-[linear-gradient(130deg,rgba(243,197,107,0.2),rgba(138,108,255,0.16),rgba(9,9,9,0.8))] p-5 sm:rounded-[2.4rem] sm:p-9 md:p-12">
        <span className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/14" />
        <span className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full border border-white/10" />

        <p className="text-[10px] uppercase tracking-[0.16em] text-black/80 sm:text-xs sm:tracking-[0.3em]">
          Conversion block
        </p>
        <h2 className="relative z-10 mt-4 max-w-5xl text-[1.95rem] font-semibold leading-[1.02] text-[color:var(--brand-text)] sm:text-5xl md:text-[3.9rem]">
          {coach.cta.title}
        </h2>
        <p className="relative z-10 mt-4 max-w-3xl text-[0.95rem] leading-7 text-[color:var(--brand-text)]/84 sm:mt-6 sm:text-lg sm:leading-8">
          {coach.cta.body}
        </p>
        <div className="relative z-10 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
          <ButtonLink href={coach.cta.primary.href} className="sm:min-w-[238px]">
            {coach.cta.primary.label}
          </ButtonLink>
          {coach.cta.secondary ? (
            <ButtonLink href={coach.cta.secondary.href} variant="secondary" className="sm:min-w-[238px]">
              {coach.cta.secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

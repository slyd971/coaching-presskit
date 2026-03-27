import { Section } from "@/components/ui/Section";
import type { CoachData } from "@/data/coach";

type SocialProofProps = {
  coach: CoachData;
};

export function SocialProof({ coach }: SocialProofProps) {
  return (
    <Section id="social-proof" className="pt-0 pb-6 md:pb-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {coach.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.25rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4 sm:rounded-[1.75rem] sm:p-6"
          >
            <p className="text-2xl font-semibold text-[color:var(--brand-text)] sm:text-3xl md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--brand-muted-text)] sm:mt-3 sm:text-sm sm:tracking-[0.22em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

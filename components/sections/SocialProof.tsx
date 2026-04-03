import { Section } from "@/components/ui/Section";
import type { CoachData } from "@/data/coach";

type SocialProofProps = {
  coach: CoachData;
};

export function SocialProof({ coach }: SocialProofProps) {
  return (
    <Section id="social-proof" className="pt-0 pb-8 md:pb-10">
      <div className="overflow-hidden rounded-[1.3rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] sm:rounded-[1.9rem]">
        <div className="grid gap-0.5 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {coach.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-[linear-gradient(145deg,rgba(7,7,7,0.72),rgba(7,7,7,0.45))] px-4 py-5 sm:px-6 sm:py-7"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--brand-accent)] sm:text-xs sm:tracking-[0.28em]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-3xl font-semibold leading-none text-[color:var(--brand-text)] sm:text-[2.55rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[color:var(--brand-muted-text)] sm:text-sm sm:tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

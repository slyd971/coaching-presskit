import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type ResultsProps = {
  coach: CoachData;
};

export function Results({ coach }: ResultsProps) {
  return (
    <Section id="results">
      <SectionHeading
        eyebrow="Résultats"
        title={coach.transformations.title}
        subtitle={coach.transformations.subtitle}
      />
      <div className="grid gap-3.5 sm:gap-6">
        {coach.transformations.items.map((item, index) => (
          <article
            key={item.name}
            className="grid gap-3 rounded-[1.2rem] border border-[color:var(--brand-border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3 sm:gap-5 sm:rounded-[2rem] sm:p-5 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="relative min-h-[11.5rem] sm:min-h-[16rem]">
                <MediaFrame
                  src={item.imageBefore}
                  alt={`${item.name} avant`}
                  className="h-full min-h-[11.5rem] sm:min-h-[16rem]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--brand-text)] sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.24em]">
                  Avant
                </span>
              </div>
              <div className="relative min-h-[11.5rem] sm:min-h-[16rem]">
                <MediaFrame
                  src={item.imageAfter}
                  alt={`${item.name} après`}
                  className="h-full min-h-[11.5rem] sm:min-h-[16rem]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[color:var(--brand-primary)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.24em]">
                  Apres
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 p-1 sm:p-2 md:p-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--brand-accent)] sm:text-sm sm:tracking-[0.26em]">
                  Cas {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2.5 text-[1.4rem] font-semibold leading-tight text-[color:var(--brand-text)] sm:mt-4 sm:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-base leading-6 text-[color:var(--brand-text)] sm:mt-4 sm:text-xl">
                  {item.metric}
                </p>
                <p className="mt-2.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--brand-muted-text)] sm:text-sm sm:tracking-[0.22em]">
                  {item.timeframe}
                </p>
              </div>
              <blockquote className="rounded-[1rem] border border-[color:var(--brand-border)] bg-black/20 p-4 text-[0.95rem] leading-6 text-[color:var(--brand-muted-text)] sm:rounded-[1.5rem] sm:p-5 sm:text-base sm:leading-7">
                "{item.quote}"
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

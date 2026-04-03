import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";
import { cn } from "@/lib/utils";

type ResultsProps = {
  coach: CoachData;
};

export function Results({ coach }: ResultsProps) {
  return (
    <Section id="results" className="pt-4 md:pt-7">
      <SectionHeading
        eyebrow="Résultats"
        title={coach.transformations.title}
        subtitle={coach.transformations.subtitle}
      />
      <div className="grid gap-4 sm:gap-6">
        {coach.transformations.items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={item.name}
              className={cn(
                "relative overflow-hidden rounded-[1.3rem] border border-white/12 p-3 sm:rounded-[2rem] sm:p-5",
                isEven
                  ? "bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
                  : "bg-[linear-gradient(140deg,rgba(138,108,255,0.16),rgba(255,255,255,0.02))]"
              )}
            >
              <span className="pointer-events-none absolute right-4 top-2 text-[4.7rem] font-semibold leading-none text-white/6 sm:right-8 sm:text-[7rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="grid gap-4 lg:grid-cols-[0.98fr_1.02fr] lg:gap-6">
                <div className={cn("grid gap-3 sm:grid-cols-2 sm:gap-4", !isEven && "lg:order-2")}>
                  <div className="relative min-h-[12rem] sm:min-h-[16rem]">
                    <MediaFrame
                      src={item.imageBefore}
                      alt={`${item.name} avant`}
                      className="h-full min-h-[12rem] rounded-[1rem] border-white/8 sm:min-h-[16rem] sm:rounded-[1.3rem]"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/16 bg-black/56 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[color:var(--brand-text)] sm:text-xs sm:tracking-[0.2em]">
                      Avant
                    </span>
                  </div>
                  <div className="relative min-h-[12rem] sm:min-h-[16rem]">
                    <MediaFrame
                      src={item.imageAfter}
                      alt={`${item.name} après`}
                      className="h-full min-h-[12rem] rounded-[1rem] border-white/8 sm:min-h-[16rem] sm:rounded-[1.3rem]"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-black/16 bg-[color:var(--brand-primary)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-black sm:text-xs sm:tracking-[0.2em]">
                      Apres
                    </span>
                  </div>
                </div>

                <div className={cn("flex flex-col justify-between gap-4 px-1 sm:px-2", !isEven && "lg:order-1")}>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--brand-accent)] sm:text-xs sm:tracking-[0.24em]">
                      Cas {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-[1.4rem] font-semibold leading-tight text-[color:var(--brand-text)] sm:text-[2rem]">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-[1.05rem] leading-7 text-[color:var(--brand-text)] sm:text-xl sm:leading-8">
                      {item.metric}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[color:var(--brand-muted-text)] sm:text-sm sm:tracking-[0.22em]">
                      {item.timeframe}
                    </p>
                  </div>
                  <blockquote className="rounded-[1rem] border border-white/10 bg-black/24 p-4 text-[0.95rem] leading-6 text-[color:var(--brand-muted-text)] sm:rounded-[1.3rem] sm:p-5 sm:text-base sm:leading-7">
                    "{item.quote}"
                  </blockquote>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

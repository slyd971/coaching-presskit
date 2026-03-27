import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type ProgramsProps = {
  coach: CoachData;
};

export function Programs({ coach }: ProgramsProps) {
  return (
    <Section id="programs">
      <SectionHeading
        eyebrow="Offres"
        title={coach.offers.title}
        subtitle={coach.offers.subtitle}
      />
      <div className="grid gap-3.5 sm:gap-5 xl:grid-cols-3">
        {coach.offers.items.map((offer) => (
          <article
            key={offer.name}
            className="flex h-full flex-col rounded-[1.2rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4 sm:rounded-[1.8rem] sm:p-6"
          >
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
              <div className="min-h-[88px] sm:min-h-[104px]">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--brand-text)] sm:text-sm sm:tracking-[0.24em]">
                  {offer.audience}
                </p>
                <h3 className="mt-2.5 text-[1.15rem] font-semibold leading-snug text-white sm:mt-4 sm:text-2xl">
                  {offer.name}
                </h3>
              </div>
              {offer.highlight ? (
                <span className="rounded-full bg-[color:var(--brand-primary)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black sm:text-xs sm:tracking-[0.2em]">
                  {offer.highlight}
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-[1.8rem] font-semibold leading-none text-[color:var(--brand-text)] sm:mt-6 sm:text-4xl">
              {offer.price}
            </p>
            <p className="mt-3 text-[0.95rem] leading-6 text-[color:var(--brand-muted-text)] sm:mt-5 sm:text-base sm:leading-7">
              {offer.description}
            </p>
            <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
              {offer.features.map((feature) => (
                <p
                  key={feature}
                  className="rounded-[1rem] border border-[color:var(--brand-border)] px-3 py-2 text-[0.82rem] leading-5 text-[color:var(--brand-text)] sm:rounded-2xl sm:px-4 sm:text-sm"
                >
                  {feature}
                </p>
              ))}
            </div>
            <div className="mt-auto flex justify-center pt-5 sm:pt-8">
              <ButtonLink
                href={offer.cta.href}
                className="!w-[220px] max-w-full sm:!w-[220px]"
              >
                {offer.cta.label}
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";
import { cn } from "@/lib/utils";

type ProgramsProps = {
  coach: CoachData;
};

export function Programs({ coach }: ProgramsProps) {
  return (
    <Section id="programs" className="pt-4 md:pt-7">
      <SectionHeading
        eyebrow="Offres"
        title={coach.offers.title}
        subtitle={coach.offers.subtitle}
      />
      <div className="grid gap-4 xl:grid-cols-3 xl:gap-5">
        {coach.offers.items.map((offer, index) => (
          <article
            key={offer.name}
            className={cn(
              "group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/12 p-5 sm:rounded-[1.9rem] sm:p-6",
              index === 1
                ? "bg-[linear-gradient(150deg,rgba(243,197,107,0.22),rgba(138,108,255,0.12),rgba(255,255,255,0.04))] xl:-translate-y-4"
                : "bg-[linear-gradient(150deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
            )}
          >
            <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/12" />

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--brand-accent)] sm:text-xs sm:tracking-[0.24em]">
                  {offer.audience}
                </p>
                <h3 className="mt-3 text-[1.35rem] font-semibold leading-tight text-[color:var(--brand-text)] sm:text-[1.8rem]">
                  {offer.name}
                </h3>
              </div>
              {offer.highlight ? (
                <span className="rounded-full border border-black/20 bg-[color:var(--brand-primary)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-black sm:text-xs">
                  {offer.highlight}
                </span>
              ) : null}
            </div>

            <p className="mt-5 text-[2.2rem] font-semibold leading-none text-[color:var(--brand-text)] sm:text-[2.8rem]">
              {offer.price}
            </p>
            <p className="mt-4 text-[0.95rem] leading-7 text-[color:var(--brand-muted-text)] sm:text-base">
              {offer.description}
            </p>

            <div className="mt-5 space-y-2.5">
              {offer.features.map((feature) => (
                <p
                  key={feature}
                  className="rounded-xl border border-white/10 bg-black/16 px-3.5 py-2.5 text-sm leading-6 text-[color:var(--brand-text)]"
                >
                  {feature}
                </p>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <ButtonLink href={offer.cta.href} className="w-full !justify-between !rounded-2xl !px-5 !py-3.5 sm:!w-full">
                <span>{offer.cta.label}</span>
                <span aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type TestimonialsProps = {
  coach: CoachData;
};

export function Testimonials({ coach }: TestimonialsProps) {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Témoignages"
        title={coach.testimonials.title}
        subtitle={coach.testimonials.subtitle}
      />
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {coach.testimonials.items.map((item) => (
          <article
            key={item.name}
            className="rounded-[1.4rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5 sm:rounded-[1.8rem] sm:p-6"
          >
            <p className="text-[0.98rem] leading-7 text-[color:var(--brand-text)] sm:text-base sm:leading-8">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-6 border-t border-[color:var(--brand-border)] pt-4 sm:mt-8 sm:pt-5">
              <p className="text-lg font-semibold text-[color:var(--brand-text)]">{item.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[color:var(--brand-muted-text)]">
                {item.role}
              </p>
              <p className="mt-4 text-sm text-[color:var(--brand-accent)]">{item.result}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

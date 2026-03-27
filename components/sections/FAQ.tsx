import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type FAQProps = {
  coach: CoachData;
};

export function FAQ({ coach }: FAQProps) {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title={coach.faq.title}
        subtitle={coach.faq.subtitle}
      />
      <div className="grid gap-4">
        {coach.faq.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.2rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4 sm:rounded-[1.5rem] sm:p-5"
          >
            <summary className="cursor-pointer list-none text-base font-medium leading-6 text-[color:var(--brand-text)] sm:text-lg">
              {item.question}
            </summary>
            <p className="mt-3 max-w-3xl text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)] sm:mt-4 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

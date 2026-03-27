import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type AboutProps = {
  coach: CoachData;
};

export function About({ coach }: AboutProps) {
  return (
    <Section id="about" className="pt-2 pb-4 md:pt-4 md:pb-6">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[18rem] sm:min-h-[32rem]">
          <MediaFrame
            src={coach.story.portrait}
            alt={coach.identity.name}
            className="h-full min-h-[18rem] sm:min-h-[32rem]"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow={coach.story.eyebrow}
            title={coach.story.title}
            subtitle={coach.story.summary}
          />
          <div className="space-y-4 text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)] sm:space-y-5 sm:text-base sm:leading-8">
            {coach.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
            {coach.story.highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm leading-6 text-[color:var(--brand-text)] sm:rounded-[1.5rem] sm:px-5 sm:py-4 sm:leading-7"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

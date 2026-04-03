import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type AboutProps = {
  coach: CoachData;
};

export function About({ coach }: AboutProps) {
  return (
    <Section id="about" className="pt-3 pb-6 md:pt-6 md:pb-8">
      <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/12 p-2 sm:rounded-[2.2rem]">
            <MediaFrame
              src={coach.story.portrait}
              alt={coach.identity.name}
              className="h-full min-h-[22rem] rounded-[1.25rem] border-white/8 sm:min-h-[34rem] sm:rounded-[1.7rem]"
            />
          </div>
          <div className="absolute -bottom-4 -right-2 max-w-[15rem] rounded-2xl border border-white/12 bg-[linear-gradient(150deg,rgba(7,7,7,0.82),rgba(7,7,7,0.58))] p-4 backdrop-blur-md sm:-bottom-6 sm:-right-4 sm:max-w-[18rem] sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--brand-accent)] sm:text-[11px]">
              Positionnement
            </p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--brand-text)] sm:text-base sm:leading-7">
              {coach.identity.title}
            </p>
          </div>
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

          <div className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
            {coach.story.highlights.map((item) => (
              <p
                key={item}
                className="text-sm leading-6 text-[color:var(--brand-text)]/92 sm:text-[0.98rem] sm:leading-7"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

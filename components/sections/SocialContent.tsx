import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type SocialContentProps = {
  coach: CoachData;
};

export function SocialContent({ coach }: SocialContentProps) {
  return (
    <Section id="social">
      <SectionHeading
        eyebrow="Contenu"
        title={coach.socialLinks.title}
        subtitle={coach.socialLinks.subtitle}
      />
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 sm:rounded-[2rem] sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--brand-accent)] sm:text-sm sm:tracking-[0.26em]">
            Presence digitale
          </p>
          <p className="mt-4 text-2xl font-semibold text-[color:var(--brand-text)] sm:mt-5 sm:text-3xl">
            Des contenus reguliers qui montrent la methode, le niveau d'exigence et les resultats.
          </p>
          <p className="mt-4 text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)] sm:mt-5 sm:text-base">
            Entre demonstrations, conseils applicables et extraits de seances, les reseaux servent ici a prolonger la confiance creee pendant la prise de contact.
          </p>
        </div>
        <div className="grid gap-4">
          {coach.socialLinks.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col items-start justify-between gap-3 rounded-[1.25rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4 transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:gap-5 sm:rounded-[1.5rem] sm:p-5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--brand-accent)]">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-[color:var(--brand-text)]">
                  {item.handle}
                </p>
              </div>
              <p className="text-sm text-[color:var(--brand-muted-text)]">{item.metric}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

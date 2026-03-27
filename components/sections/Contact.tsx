import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CoachData } from "@/data/coach";

type ContactProps = {
  coach: CoachData;
};

export function Contact({ coach }: ContactProps) {
  const items = [
    coach.contact.email
      ? { label: "Email", value: coach.contact.email, href: `mailto:${coach.contact.email}` }
      : null,
    coach.contact.phone
      ? { label: "Téléphone", value: coach.contact.phone, href: `tel:${coach.contact.phone}` }
      : null,
    coach.contact.website
      ? { label: "Site", value: coach.contact.website, href: coach.contact.website }
      : null,
    coach.contact.instagram
      ? {
          label: "Instagram",
          value: coach.contact.instagram,
          href: `https://instagram.com/${coach.contact.instagram.replace("@", "")}`,
        }
      : null,
  ].filter(Boolean) as Array<{ label: string; value: string; href: string }>;

  return (
    <Section id="contact" className="pt-2">
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={coach.contact.title}
            subtitle={coach.contact.subtitle}
          />
          {coach.contact.availability ? (
            <p className="rounded-2xl border border-[color:var(--brand-border)] px-4 py-3 text-sm text-[color:var(--brand-text)] sm:rounded-full">
              {coach.contact.availability}
            </p>
          ) : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[1.25rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4 sm:rounded-[1.6rem] sm:p-5"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-accent)]">
                {item.label}
              </p>
              <p className="mt-3 text-base font-medium text-[color:var(--brand-text)] break-words sm:mt-4 sm:text-lg">
                {item.value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

import type { CoachData } from "@/data/coach";
import { shouldRenderSection } from "@/lib/utils";

export function getCoachNavigation(coach: CoachData) {
  const items = [
    shouldRenderSection({
      enabled: coach.sections?.about,
      fields: [coach.story.title, coach.story.summary],
    })
      ? { label: "Bio", href: "#about" }
      : null,
    shouldRenderSection({
      enabled: coach.sections?.method,
      items: coach.method.pillars,
    })
      ? { label: "Methode", href: "#method" }
      : null,
    shouldRenderSection({
      enabled: coach.sections?.offers,
      items: coach.offers.items,
    })
      ? { label: "Offres", href: "#programs" }
      : null,
    shouldRenderSection({
      enabled: coach.sections?.results,
      items: coach.transformations.items,
    })
      ? { label: "Resultats", href: "#results" }
      : null,
    shouldRenderSection({
      enabled: coach.sections?.videos ?? coach.videos.enabled,
      items: coach.videos.items,
    })
      ? { label: "Videos", href: "#videos" }
      : null,
    shouldRenderSection({
      enabled: coach.sections?.testimonials,
      items: coach.testimonials.items,
    })
      ? { label: "Avis", href: "#testimonials" }
      : null,
    shouldRenderSection({
      enabled: coach.sections?.contact,
      fields: [
        coach.contact.email,
        coach.contact.phone,
        coach.contact.website,
        coach.contact.instagram,
      ],
    })
      ? { label: "Contact", href: "#contact" }
      : null,
  ].filter((item): item is { label: string; href: string } => item !== null);

  return items;
}

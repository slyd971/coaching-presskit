import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/layout/Header";
import { Method } from "@/components/sections/Method";
import { Programs } from "@/components/sections/Programs";
import { Results } from "@/components/sections/Results";
import { SocialContent } from "@/components/sections/SocialContent";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { Videos } from "@/components/sections/Videos";
import { coachData } from "@/data/coach";
import { createBrandingVars } from "@/lib/branding";
import { getCoachNavigation } from "@/lib/navigation";
import { hasItems, shouldRenderSection } from "@/lib/utils";

export default function HomePage() {
  const coach = coachData;
  const style = createBrandingVars(coach.branding);
  const navigation = getCoachNavigation(coach);

  return (
    <main style={style} className="min-h-screen">
      <Header
        name={coach.identity.name}
        cta={coach.hero.primaryCta}
        items={navigation}
      />

      <Hero coach={coach} />

      {shouldRenderSection({
        enabled: coach.sections?.socialProof,
        items: coach.stats,
      }) ? <SocialProof coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.about,
        fields: [coach.story.title, coach.story.summary],
      }) ? <About coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.method,
        items: coach.method.pillars,
      }) ? <Method coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.offers,
        items: coach.offers.items,
      }) ? <Programs coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.results,
        items: coach.transformations.items,
      }) ? <Results coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.videos ?? coach.videos.enabled,
        items: coach.videos.items,
      }) && hasItems(coach.videos.items) ? (
        <Videos
          title={coach.videos.title}
          subtitle={coach.videos.subtitle}
          items={coach.videos.items}
        />
      ) : null}

      {shouldRenderSection({
        enabled: coach.sections?.testimonials,
        items: coach.testimonials.items,
      }) ? <Testimonials coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.social,
        items: coach.socialLinks.items,
      }) ? <SocialContent coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.faq,
        items: coach.faq.items,
      }) ? <FAQ coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.cta,
        fields: [coach.cta.title, coach.cta.body],
      }) ? <CTA coach={coach} /> : null}

      {shouldRenderSection({
        enabled: coach.sections?.contact,
        fields: [
          coach.contact.email,
          coach.contact.phone,
          coach.contact.website,
          coach.contact.instagram,
        ],
      }) ? <Contact coach={coach} /> : null}
    </main>
  );
}

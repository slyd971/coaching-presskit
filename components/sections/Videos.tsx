import type { VideoItem } from "@/data/coach";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hasText } from "@/lib/utils";

type VideosProps = {
  title: string;
  subtitle: string;
  items: VideoItem[];
};

function VideoEmbed({ item }: { item: VideoItem }) {
  if (item.type === "local" && hasText(item.src)) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        controls
        playsInline
        poster={item.thumbnail}
        preload="metadata"
      >
        <source src={item.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,197,107,0.22),transparent_55%),linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
  );
}

export function Videos({ title, subtitle, items }: VideosProps) {
  const visibleItems = items.slice(0, 3);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <Section id="videos">
      <SectionHeading eyebrow="Videos" title={title} subtitle={subtitle} />
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.4rem] border border-[color:var(--brand-border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] sm:rounded-[1.9rem]"
          >
            <div className="relative aspect-[4/3] bg-black/20 sm:aspect-[4/5]">
              <VideoEmbed item={item} />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.58),transparent_28%)]" />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-[color:var(--brand-accent)] sm:text-xs sm:tracking-[0.22em]">
                {item.category ? <span>{item.category}</span> : null}
                {item.duration ? <span>{item.duration}</span> : null}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[color:var(--brand-text)] sm:text-xl">
                {item.title}
              </h3>
              {item.subtitle ? (
                <p className="mt-2.5 text-sm leading-6 text-[color:var(--brand-muted-text)] sm:mt-3 sm:leading-7">
                  {item.subtitle}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

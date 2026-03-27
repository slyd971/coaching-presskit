import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { CoachData } from "@/data/coach";
import { hasText } from "@/lib/utils";

type HeroProps = {
  coach: CoachData;
};

function HeroVideo({
  videoSrc,
  embedUrl,
  poster,
}: {
  videoSrc?: string;
  embedUrl?: string;
  poster?: string;
}) {
  if (embedUrl) {
    return (
      <iframe
        src={embedUrl}
        title="Hero presentation video"
        className="absolute inset-0 h-full w-full scale-[1.2]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  if (!videoSrc) {
    return null;
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

export function Hero({ coach }: HeroProps) {
  const heroVideo = coach.hero.video;
  const useVideo =
    coach.hero.variant === "video" &&
    ((heroVideo?.type === "local" && hasText(heroVideo.src)) ||
      ((heroVideo?.type === "youtube" ||
        heroVideo?.type === "vimeo" ||
        heroVideo?.type === "embed") &&
        hasText(heroVideo.embedUrl)));

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-4 pt-20 sm:px-5 md:px-8 md:pb-8 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--brand-glow),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(115,240,194,0.12),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="relative flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-[1.6rem] border border-[color:var(--brand-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 sm:min-h-[31rem] sm:rounded-[2rem] sm:p-6 md:p-8">
          {useVideo ? (
            <>
              <HeroVideo
                videoSrc={heroVideo?.src}
                embedUrl={heroVideo?.embedUrl}
                poster={heroVideo?.thumbnail}
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(9,9,9,0.45),rgba(9,9,9,0.92)),radial-gradient(circle_at_top,transparent,rgba(9,9,9,0.2)_40%,rgba(9,9,9,0.95)_100%)]" />
            </>
          ) : (
            <div className="absolute inset-0">
              <MediaFrame
                src={coach.hero.image}
                alt={coach.identity.name}
                priority
                className="h-full rounded-none border-0"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(9,9,9,0.1),rgba(9,9,9,0.86)),radial-gradient(circle_at_top_left,transparent,rgba(9,9,9,0.24)_35%,rgba(9,9,9,0.9)_100%)]" />
            </div>
          )}

          <div className="relative z-10 max-w-xl">
            {coach.hero.badge ? <Badge>{coach.hero.badge}</Badge> : null}
            <h1 className="mt-4 text-[2.5rem] font-semibold leading-[0.95] text-[color:var(--brand-text)] sm:mt-5 sm:text-5xl md:text-7xl">
              {coach.hero.title}
            </h1>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)] md:text-lg">
              {coach.hero.subtitle}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
              <ButtonLink href={coach.hero.primaryCta.href}>
                {coach.hero.primaryCta.label}
              </ButtonLink>
              {coach.hero.secondaryCta ? (
                <ButtonLink href={coach.hero.secondaryCta.href} variant="secondary">
                  {coach.hero.secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div className="relative z-10 mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {coach.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.25rem] border border-[color:var(--brand-border)] bg-black/24 p-3 backdrop-blur-md sm:rounded-[1.5rem] sm:p-4"
              >
                <div className="text-xl font-semibold text-[color:var(--brand-text)] sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs leading-5 text-[color:var(--brand-muted-text)] sm:mt-2 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid h-full content-start gap-4 lg:grid-rows-[auto_1fr]">
          <div className="p-0.5 sm:p-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--brand-accent)] sm:text-sm sm:tracking-[0.28em]">
              {coach.identity.location}
            </p>
            <p className="mt-3 text-[2.4rem] font-semibold leading-none text-[color:var(--brand-text)] sm:mt-4 sm:text-5xl md:text-6xl">
              {coach.identity.name}
            </p>
            <p className="mt-2.5 text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)]">
              {coach.identity.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
              {coach.identity.labels.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[color:var(--brand-border)] px-3 py-2 text-xs text-[color:var(--brand-text)] sm:px-4 sm:text-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[16rem] overflow-hidden rounded-[1.6rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] sm:min-h-[20rem] sm:rounded-[2rem] lg:min-h-0">
            <MediaFrame
              src={coach.gallery[0] ?? coach.hero.image}
              alt={`${coach.identity.name} coaching`}
              className="h-full rounded-none border-0"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent_40%)]" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--brand-accent)] sm:text-xs sm:tracking-[0.24em]">
                Coaching prive a Paris
              </p>
              <p className="mt-2 max-w-xs text-lg font-semibold text-[color:var(--brand-text)] sm:mt-3 sm:text-xl">
                Seances structurees, execution propre et progression suivie chaque semaine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

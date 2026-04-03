"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { CoachData } from "@/data/coach";
import { hasText } from "@/lib/utils";

export type HeroTheme = "dark" | "light";
type HeroModel = "signature" | "photo" | "editorial";

type HeroProps = {
  coach: CoachData;
  theme: HeroTheme;
  onThemeChange: (theme: HeroTheme) => void;
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
        className="absolute inset-0 h-full w-full"
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

function HeroCopy({ coach }: { coach: CoachData }) {
  return (
    <>
      {coach.hero.badge ? <Badge>{coach.hero.badge}</Badge> : null}

      <h1 className="mt-5 font-serif text-[2.35rem] leading-[0.94] text-[color:var(--brand-text)] sm:text-6xl md:text-7xl">
        {coach.hero.title}
      </h1>

      <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-[color:var(--brand-muted-text)] md:text-lg md:leading-8">
        {coach.hero.subtitle}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={coach.hero.primaryCta.href} className="sm:min-w-[220px]">
          {coach.hero.primaryCta.label}
        </ButtonLink>
        {coach.hero.secondaryCta ? (
          <ButtonLink
            href={coach.hero.secondaryCta.href}
            variant="secondary"
            className="sm:min-w-[220px]"
          >
            {coach.hero.secondaryCta.label}
          </ButtonLink>
        ) : null}
      </div>
    </>
  );
}

function HeroStats({ coach }: { coach: CoachData }) {
  return (
    <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
      {coach.hero.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/12 bg-white/4 px-3.5 py-3 backdrop-blur-sm"
        >
          <p className="text-2xl font-semibold leading-none text-[color:var(--brand-text)] sm:text-[1.9rem]">
            {stat.value}
          </p>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--brand-muted-text)] sm:text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function HeroModelSwitcher({
  activeModel,
  onModelChange,
  theme,
  onThemeChange,
}: {
  activeModel: HeroModel;
  onModelChange: (model: HeroModel) => void;
  theme: HeroTheme;
  onThemeChange: (theme: HeroTheme) => void;
}) {
  const models: HeroModel[] = ["signature", "photo", "editorial"];

  return (
    <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/12 bg-black/32 px-2 py-1.5 backdrop-blur-md">
      <div className="flex items-center gap-1">
        {models.map((model, index) => (
          <button
            key={model}
            type="button"
            onClick={() => onModelChange(model)}
            className={`h-6 min-w-6 rounded-full px-2 text-[9px] font-semibold uppercase tracking-[0.12em] transition ${
              activeModel === model
                ? "bg-white/92 text-black"
                : "bg-white/10 text-white/75 hover:bg-white/18"
            }`}
            aria-label={`Modèle hero ${index + 1}`}
            title={`Hero ${index + 1}`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      <div className="h-4 w-px bg-white/18" />

      <button
        type="button"
        onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
        className="h-6 w-6 rounded-full bg-white/10 text-white/80 transition hover:bg-white/18"
        aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
        title={theme === "dark" ? "Thème clair" : "Thème sombre"}
      >
        {theme === "dark" ? "◐" : "◑"}
      </button>
    </div>
  );
}

export function Hero({ coach, theme, onThemeChange }: HeroProps) {
  const heroVideo = coach.hero.video;
  const useVideo =
    coach.hero.variant === "video" &&
    ((heroVideo?.type === "local" && hasText(heroVideo.src)) ||
      ((heroVideo?.type === "youtube" ||
        heroVideo?.type === "vimeo" ||
        heroVideo?.type === "embed") &&
        hasText(heroVideo.embedUrl)));

  const heroImages = useMemo(() => {
    const sources = [coach.hero.image, ...coach.gallery].filter((item) => hasText(item));
    const unique = Array.from(new Set(sources));

    if (unique.length === 0) {
      return [undefined, undefined, undefined];
    }

    if (unique.length >= 3) {
      return unique.slice(0, 3);
    }

    while (unique.length < 3) {
      unique.push(unique[unique.length - 1]);
    }

    return unique;
  }, [coach.gallery, coach.hero.image]);

  const [activeModel, setActiveModel] = useState<HeroModel>("signature");

  const signatureImage = heroImages[0] ?? coach.hero.image;
  const photoImage = heroImages[1] ?? signatureImage;
  const editorialImage = heroImages[2] ?? photoImage;

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-8 pt-24 sm:px-5 md:px-8 md:pb-12 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(243,197,107,0.16),transparent_24%),radial-gradient(circle_at_86%_22%,rgba(138,108,255,0.12),transparent_28%)]" />

      {activeModel === "signature" ? (
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-7">
          <div className="relative z-10">
            <HeroCopy coach={coach} />
            <HeroStats coach={coach} />
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.4rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] sm:min-h-[30rem] sm:rounded-[2rem]">
            {useVideo ? (
              <>
                <HeroVideo
                  videoSrc={heroVideo?.src}
                  embedUrl={heroVideo?.embedUrl}
                  poster={heroVideo?.thumbnail}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.12),rgba(7,7,7,0.7))]" />
              </>
            ) : (
              <div className="absolute inset-0">
                <MediaFrame
                  src={signatureImage}
                  alt={coach.identity.name}
                  priority
                  className="h-full rounded-none border-0"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08),rgba(7,7,7,0.68))]" />
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--brand-accent)] sm:text-xs sm:tracking-[0.24em]">
                {coach.identity.location}
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-[color:var(--brand-text)] sm:text-2xl">
                {coach.identity.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--brand-text)]/84 sm:text-[0.98rem] sm:leading-7">
                {coach.identity.tagline}
              </p>
            </div>

            <HeroModelSwitcher
              activeModel={activeModel}
              onModelChange={setActiveModel}
              theme={theme}
              onThemeChange={onThemeChange}
            />
          </div>
        </div>
      ) : null}

      {activeModel === "photo" ? (
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">
          <div className="relative z-10 rounded-[1.35rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 sm:rounded-[1.9rem] sm:p-7">
            <HeroCopy coach={coach} />
          </div>

          <div className="relative min-h-[25rem] overflow-hidden rounded-[1.45rem] border border-white/12 sm:min-h-[31rem] sm:rounded-[2rem]">
            <MediaFrame
              src={photoImage}
              alt={`${coach.identity.name} hero photo`}
              priority
              className="h-full rounded-none border-0"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(0,0,0,0.52))]" />

            <div className="absolute left-4 top-4 rounded-full border border-white/14 bg-black/28 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/86 backdrop-blur-sm sm:left-6 sm:top-6 sm:text-xs sm:tracking-[0.2em]">
              Hero photo
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <HeroStats coach={coach} />
            </div>

            <HeroModelSwitcher
              activeModel={activeModel}
              onModelChange={setActiveModel}
              theme={theme}
              onThemeChange={onThemeChange}
            />
          </div>
        </div>
      ) : null}

      {activeModel === "editorial" ? (
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/12 sm:rounded-[2.1rem]">
            <MediaFrame
              src={editorialImage}
              alt={`${coach.identity.name} editorial hero`}
              priority
              className="min-h-[30rem] rounded-none border-0 sm:min-h-[36rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,7,7,0.76),rgba(7,7,7,0.42)_50%,rgba(7,7,7,0.18)_100%)]" />

            <div className="absolute inset-0 flex items-center p-5 sm:p-8 md:p-10">
              <div className="max-w-3xl">
                {coach.hero.badge ? <Badge>{coach.hero.badge}</Badge> : null}
                <h1 className="mt-5 font-serif text-[2.45rem] leading-[0.92] text-[color:var(--brand-text)] sm:text-6xl md:text-7xl">
                  {coach.hero.title}
                </h1>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[color:var(--brand-text)]/84 sm:text-lg sm:leading-8">
                  {coach.hero.subtitle}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={coach.hero.primaryCta.href} className="sm:min-w-[220px]">
                    {coach.hero.primaryCta.label}
                  </ButtonLink>
                  {coach.hero.secondaryCta ? (
                    <ButtonLink
                      href={coach.hero.secondaryCta.href}
                      variant="secondary"
                      className="sm:min-w-[220px]"
                    >
                      {coach.hero.secondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <div className="grid gap-2.5 rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-md sm:grid-cols-3 sm:gap-3 sm:p-4">
                {coach.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[1.55rem] font-semibold leading-none text-[color:var(--brand-text)] sm:text-[2rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[color:var(--brand-text)]/72 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <HeroModelSwitcher
              activeModel={activeModel}
              onModelChange={setActiveModel}
              theme={theme}
              onThemeChange={onThemeChange}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

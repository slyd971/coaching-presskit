import type { CSSProperties } from "react";

export type CoachBranding = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  surfaceStrong: string;
  text: string;
  mutedText: string;
  border: string;
  glow: string;
  gradientStart: string;
  gradientEnd: string;
};

export function createBrandingVars(branding: CoachBranding): CSSProperties {
  return {
    "--brand-primary": branding.primary,
    "--brand-secondary": branding.secondary,
    "--brand-accent": branding.accent,
    "--brand-background": branding.background,
    "--brand-surface": branding.surface,
    "--brand-surface-strong": branding.surfaceStrong,
    "--brand-text": branding.text,
    "--brand-muted-text": branding.mutedText,
    "--brand-border": branding.border,
    "--brand-glow": branding.glow,
    "--brand-gradient-start": branding.gradientStart,
    "--brand-gradient-end": branding.gradientEnd,
  } as CSSProperties;
}


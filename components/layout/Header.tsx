"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  name: string;
  cta: {
    label: string;
    href: string;
  };
  items: NavigationItem[];
};

export function Header({ name, cta, items }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const isMobile = window.innerWidth < 1024;

      if (Math.abs(delta) < 8) {
        return;
      }

      if (isMobile) {
        setMenuOpen(false);
      }

      const shouldShowHeader = isMobile ? true : currentScrollY < 20 || delta < 0;
      const shouldBeCompact = currentScrollY >= 20;

      setIsHeaderVisible(shouldShowHeader);
      setIsHeaderCompact(shouldBeCompact);

      if (!shouldShowHeader) {
        setMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(9,9,9,0.7)] backdrop-blur-xl transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-5 md:px-8 ${
          isHeaderCompact ? "h-[58px] md:h-[68px]" : "h-[64px] md:h-[84px]"
        }`}
      >
        <div className="flex min-w-0 items-center gap-2 md:gap-5">
          <Link href="#home" className="min-w-0 max-w-[12rem] sm:max-w-none">
            <div className="min-w-0">
              <div
                className={`truncate font-semibold text-[color:var(--brand-text)] transition-all duration-300 ${
                  isHeaderCompact ? "text-xl sm:text-2xl md:text-[1.9rem]" : "text-[1.35rem] sm:text-3xl md:text-[2.25rem]"
                }`}
              >
                {name}
              </div>
              <div className="mt-1 truncate text-[9px] uppercase tracking-[0.22em] text-[color:var(--brand-muted-text)] sm:text-[10px] sm:tracking-[0.3em]">
                Coach transformation
              </div>
            </div>
          </Link>
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3 md:gap-4 xl:gap-5">
          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-4 overflow-x-auto whitespace-nowrap pr-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-muted-text)] lg:flex xl:gap-5 xl:text-[11px] xl:tracking-[0.24em]">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 transition hover:text-[color:var(--brand-text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={cta.href}
            className={`hidden shrink-0 rounded-full bg-[color:var(--brand-primary)] font-semibold uppercase text-black transition-all duration-300 hover:opacity-90 lg:inline-flex ${
              isHeaderCompact
                ? "px-4 py-2 text-[10px] tracking-[0.16em]"
                : "px-5 py-2.5 text-[10px] tracking-[0.2em]"
            }`}
          >
            {cta.label}
          </a>

          <a
            href={cta.href}
            className={`hidden rounded-full bg-[color:var(--brand-primary)] font-semibold uppercase text-black transition-all duration-300 hover:opacity-90 sm:inline-flex lg:hidden ${
              isHeaderCompact
                ? "px-3.5 py-2 text-[10px] tracking-[0.16em]"
                : "px-4 py-2.5 text-[10px] tracking-[0.18em]"
            }`}
          >
            {cta.label}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[color:var(--brand-text)] transition hover:bg-white/10 lg:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M4 8h16M4 12h16M4 16h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="absolute left-0 right-0 top-full z-[100] border-t border-white/10 bg-[rgba(9,9,9,0.96)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col items-stretch gap-2.5 px-4 py-4 text-left sm:px-5">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--brand-text)] transition hover:text-[color:var(--brand-muted-text)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cta.href}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-[color:var(--brand-primary)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black"
            >
              {cta.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

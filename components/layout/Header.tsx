"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

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

  const initials = useMemo(() => {
    const tokens = name.trim().split(/\s+/).filter(Boolean);
    return tokens.slice(0, 2).map((token) => token[0]?.toUpperCase()).join("");
  }, [name]);

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

      const shouldShowHeader = isMobile ? true : currentScrollY < 24 || delta < 0;
      const shouldBeCompact = currentScrollY >= 24;

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
      className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 sm:px-5 md:px-8 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-[112%]"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[1.35rem] border border-white/14 bg-[linear-gradient(145deg,rgba(10,10,10,0.88),rgba(10,10,10,0.62))] px-3 shadow-[0_24px_64px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 sm:px-4 md:px-5 ${
          isHeaderCompact ? "h-[60px]" : "h-[70px]"
        }`}
      >
        <Link href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-xs font-semibold tracking-[0.16em] text-[color:var(--brand-accent)] sm:h-10 sm:w-10 sm:text-sm">
            {initials}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold text-[color:var(--brand-text)] sm:text-lg">
              {name}
            </span>
            <span className="block truncate text-[9px] uppercase tracking-[0.24em] text-[color:var(--brand-muted-text)] sm:text-[10px]">
              Coaching prive
            </span>
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-5 overflow-x-auto whitespace-nowrap pr-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-muted-text)] lg:flex xl:gap-6 xl:text-[11px] xl:tracking-[0.24em]">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative shrink-0 transition hover:text-[color:var(--brand-text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={cta.href}
            className={`hidden shrink-0 items-center rounded-full border border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)] px-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 lg:inline-flex ${
              isHeaderCompact ? "py-2" : "py-2.5"
            }`}
          >
            {cta.label}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-[color:var(--brand-text)] transition hover:bg-white/10 lg:hidden"
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
        <div className="mx-auto mt-2 max-w-7xl rounded-[1.2rem] border border-white/10 bg-[rgba(9,9,9,0.96)] p-3 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col items-stretch gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-text)] transition hover:bg-white/8"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cta.href}
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex justify-center rounded-full bg-[color:var(--brand-primary)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black"
            >
              {cta.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

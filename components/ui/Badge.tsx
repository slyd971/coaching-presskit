type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full border border-[color:var(--brand-border)] bg-white/6 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-text)]/84 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[0.7rem] sm:tracking-[0.28em]">
      {children}
    </span>
  );
}

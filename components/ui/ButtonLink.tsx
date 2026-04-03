import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-6",
        variant === "primary"
          ? "border border-black/15 bg-[color:var(--brand-primary)] text-black shadow-[0_20px_42px_-22px_var(--brand-glow)]"
          : "border border-[color:var(--brand-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-[color:var(--brand-text)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </Link>
  );
}

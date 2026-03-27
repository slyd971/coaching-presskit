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
        "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-6",
        variant === "primary"
          ? "bg-[color:var(--brand-primary)] text-black shadow-[0_18px_50px_-18px_var(--brand-glow)]"
          : "border border-[color:var(--brand-border)] bg-white/5 text-[color:var(--brand-text)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </Link>
  );
}

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative px-4 py-12 sm:px-5 md:px-8 md:py-16", className)}>
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] sm:inset-x-5 md:inset-x-8" />
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

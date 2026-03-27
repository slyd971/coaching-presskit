import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-9 sm:px-5 md:px-8 md:py-14", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

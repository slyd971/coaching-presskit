import { Badge } from "@/components/ui/Badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-7 max-w-3xl text-center md:mb-10"
          : "mb-7 max-w-3xl md:mb-10"
      }
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-[1.9rem] font-semibold leading-[1.05] text-[color:var(--brand-text)] md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-[0.96rem] leading-7 text-[color:var(--brand-muted-text)] md:mt-4 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

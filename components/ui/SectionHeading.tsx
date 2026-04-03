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
          ? "mx-auto mb-8 max-w-3xl text-center md:mb-11"
          : "mb-8 max-w-4xl md:mb-11"
      }
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 font-serif text-[2rem] leading-[0.98] text-[color:var(--brand-text)] sm:text-[2.6rem] md:text-[3.4rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-[0.96rem] leading-7 text-[color:var(--brand-muted-text)] md:mt-4 md:text-lg md:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

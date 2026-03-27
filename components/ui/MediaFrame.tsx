import Image from "next/image";

import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
};

export function MediaFrame({
  src,
  alt,
  className,
  priority,
  fill = true,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-[color:var(--brand-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,197,107,0.25),transparent_55%),linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
      )}
    </div>
  );
}


import { cn } from "@/lib/cn";

const SIZES = {
  md: "size-32 sm:size-36 lg:size-40",
  xl: "size-56 sm:size-64 lg:size-80",
} as const;

/** Largest rendered edge (lg breakpoint) in CSS px. */
const PX = { md: 160, xl: 320 } as const;

export function GlowAvatar({
  src,
  alt,
  glow = "teal",
  size = "md",
  priority = false,
}: {
  src: string;
  alt: string;
  glow?: "teal" | "strike";
  size?: keyof typeof SIZES;
  kind?: "portrait" | "upper" | "logo";
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-full",
        SIZES[size],
        glow === "strike" ? "avatar-glow-strike" : "avatar-glow",
      )}
    >
      <img
        src={src}
        alt={alt}
        width={PX[size]}
        height={PX[size]}
        className="h-full w-full object-cover object-center"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </div>
  );
}

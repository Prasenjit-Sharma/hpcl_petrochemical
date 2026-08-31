import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span
        className={cn(
          "section-eyebrow",
          invert && "border-white/20 bg-white/10 text-white",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold leading-tight sm:text-[2.4rem]",
          invert ? "text-white" : "text-hp-navy",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-[17px] leading-relaxed",
            invert ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";

/**
 * Stylised HP-style emblem — an original mark evoking the Hindustan Petroleum
 * roundel (blue ring, red "HP") without reproducing the official logo artwork.
 */
export function HpLogo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        role="img"
        aria-label="HP Petrochemicals emblem"
      >
        <circle cx="32" cy="32" r="30" fill={invert ? "#ffffff" : "#00206b"} />
        <circle cx="32" cy="32" r="23.5" fill={invert ? "#00206b" : "#ffffff"} />
        <path
          d="M19 19h6.6v9.2h12.8V19H45v26h-6.6V33.9H25.6V45H19z"
          fill="#e2231a"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            invert ? "text-white" : "text-hp-navy",
          )}
        >
          HP Petrochemicals
        </span>
        <span
          className={cn(
            "mt-1 text-[11px] font-medium uppercase tracking-[0.18em]",
            invert ? "text-white/70" : "text-hp-blue",
          )}
        >
          Hindustan Petroleum
        </span>
      </span>
    </span>
  );
}

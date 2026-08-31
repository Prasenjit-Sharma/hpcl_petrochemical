import { useState } from "react";
import { Building2, Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ABOUT_HPCL } from "@/data/content";
import { Button } from "@/components/ui/button";

/**
 * "About Hindustan Petroleum" — a compact expandable button, per the brief.
 * Collapsed it is a single pill-style control; expanded it reveals the
 * corporate background, key facts and a link out to the parent site.
 */
export function AboutHpcl() {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="about-hpcl"
      className="mt-10 scroll-mt-28 overflow-hidden rounded-xl border border-hp-blue/25 bg-hp-blue-light/60"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="about-hpcl-panel"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-hp-blue-light"
      >
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-hp-navy text-white">
          <Building2 className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-sm font-bold text-hp-navy">
            About Hindustan Petroleum
          </span>
          <span className="block truncate text-xs text-hp-blue-dark">
            {open ? "Tap to collapse" : "Maharatna PSU · Fortune Global 500 · parent company"}
          </span>
        </span>
        <span
          className={cn(
            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hp-blue/40 bg-white text-hp-blue transition-transform duration-300",
            open && "rotate-45",
          )}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>

      <div
        id="about-hpcl-panel"
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-hp-blue/20 px-5 py-5">
            <p className="text-[15px] font-medium leading-relaxed text-hp-navy">
              {ABOUT_HPCL.summary}
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {ABOUT_HPCL.paragraphs.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>

            <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {ABOUT_HPCL.facts.map((f) => (
                <div key={f.label} className="border-l-2 border-hp-red pl-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-hp-blue">
                    {f.label}
                  </dt>
                  <dd className="text-sm font-semibold text-hp-navy">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Button variant="link" className="mt-4 h-auto p-0" asChild>
              <a
                href="https://www.hindustanpetroleum.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit hindustanpetroleum.com <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

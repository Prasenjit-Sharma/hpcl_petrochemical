import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { SEGMENTS } from "@/data/content";

export function BusinessSegments() {
  return (
    <section
      id="segments"
      className="scroll-mt-24 border-b border-border bg-white py-20 lg:py-28"
    >
      <div className="container-hp">
        <SectionHeading
          eyebrow="Complexes & businesses"
          title="Where HP Petrochemicals is being built"
          intro="Two integrated complexes anchor the business, supported by a dedicated polymer marketing and technical-service organisation."
        />

        <div className="mt-10 space-y-5">
          {SEGMENTS.map((s, i) => (
            <article
              key={s.name}
              className="grid gap-6 rounded-xl border border-border bg-secondary/40 p-6 transition-colors hover:border-hp-blue/40 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:p-8"
            >
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-hp-navy text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-extrabold text-hp-blue/25">
                  0{i + 1}
                </span>
              </div>

              <div>
                <Badge
                  variant={s.status === "Operating" ? "soft" : "accent"}
                  className="mb-2"
                >
                  {s.status}
                </Badge>
                <h3 className="font-display text-xl font-bold leading-snug text-hp-navy">
                  {s.name}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-hp-blue-dark">
                  <MapPin className="h-4 w-4" />
                  {s.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>

              <ul className="grid gap-2 rounded-lg border border-border bg-white p-4">
                {s.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-hp-navy before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-hp-red"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

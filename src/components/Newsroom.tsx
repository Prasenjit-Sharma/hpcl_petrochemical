import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { NEWS } from "@/data/content";

export function Newsroom() {
  return (
    <section
      id="news"
      className="scroll-mt-24 border-b border-border bg-white py-20 lg:py-28"
    >
      <div className="container-hp">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Newsroom"
            title="Latest from the petrochemicals business"
          />
          <a
            href="#news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-hp-blue hover:text-hp-navy"
          >
            All updates <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="flex flex-col rounded-xl border border-border bg-secondary/40 p-6 transition-all hover:-translate-y-1 hover:border-hp-blue/40 hover:bg-white hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <Badge variant="outline">{n.tag}</Badge>
                <time className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {n.date}
                </time>
              </div>
              <h3 className="mt-3 flex-1 font-display text-lg font-bold leading-snug text-hp-navy">
                {n.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {n.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-hp-blue">
                Read more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

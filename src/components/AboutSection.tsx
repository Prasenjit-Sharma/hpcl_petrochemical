import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PILLARS } from "@/data/content";
import { AboutHpcl } from "@/components/AboutHpcl";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border bg-white py-20 lg:py-28">
      <div className="container-hp">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About HP Petrochemicals"
              title="Value-addition, integrated at the source"
              intro="Instead of exporting refinery streams as low-value fuel components, HPCL is converting them — on site — into the polymers and chemicals that Indian manufacturing imports today."
            />
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              India's per-capita polymer consumption is still a fraction of the
              global average, yet demand is growing faster than domestic supply.
              HP Petrochemicals is HPCL's response: refinery-integrated cracker
              and derivative complexes that improve every barrel's economics
              while strengthening the country's material security.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Feedstock-advantaged — sourced from HPCL's own refineries",
                "Licensed, proven process technology (UNIPOL™, gas-phase PP)",
                "Backed by a Maharatna balance sheet and pan-India logistics",
                "Designed with water, energy and circularity targets from day one",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-[15px] text-hp-navy">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-hp-blue" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* The expandable "About Hindustan Petroleum" panel */}
            <AboutHpcl />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="group rounded-xl border border-border bg-secondary/50 p-6 transition-all hover:-translate-y-1 hover:border-hp-blue/40 hover:bg-white hover:shadow-card-hover"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-hp-navy text-white transition-colors group-hover:bg-hp-red">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-hp-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

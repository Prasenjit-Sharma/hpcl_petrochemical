import { SectionHeading } from "@/components/SectionHeading";
import { APPLICATIONS } from "@/data/content";

export function Applications() {
  return (
    <section
      id="applications"
      className="scroll-mt-24 border-b border-border bg-secondary/40 py-20 lg:py-28"
    >
      <div className="container-hp">
        <SectionHeading
          eyebrow="Applications"
          title="Materials for the everyday economy"
          intro="HP Petrochemicals grades are engineered for the sectors that carry India's growth — packaging, water, mobility, textiles, agriculture and healthcare."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((a) => (
            <article
              key={a.sector}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-hp-red transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-hp-blue-light text-hp-blue-dark">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-hp-navy">
                {a.sector}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.copy}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.materials.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-hp-navy/15 px-2.5 py-0.5 text-xs font-semibold text-hp-navy"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCT_CATEGORIES } from "@/data/content";

export function ProductPortfolio() {
  return (
    <section
      id="products"
      className="scroll-mt-24 border-b border-border bg-secondary/40 py-20 lg:py-28"
    >
      <div className="container-hp">
        <SectionHeading
          eyebrow="Product portfolio"
          title="One integrated slate, three product families"
          intro="From polyolefins for everyday packaging to aromatics that feed the wider chemical industry — grades and capacities reflect HPCL's publicly disclosed project scope."
        />

        <Tabs defaultValue={PRODUCT_CATEGORIES[0].id} className="mt-10">
          <TabsList className="w-full sm:w-auto">
            {PRODUCT_CATEGORIES.map((c) => (
              <TabsTrigger key={c.id} value={c.id} className="gap-2">
                <c.icon className="h-4 w-4" />
                {c.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {PRODUCT_CATEGORIES.map((c) => (
            <TabsContent key={c.id} value={c.id}>
              <p className="mb-6 text-sm font-medium text-hp-blue-dark">
                {c.tagline}
              </p>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {c.products.map((p) => (
                  <article
                    key={p.name}
                    className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-hp-navy">
                        {p.name}
                      </h3>
                      <Badge variant="soft">{c.name}</Badge>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-hp-blue">
                      {p.code}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Typical uses
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {p.uses.map((u) => (
                          <li
                            key={u}
                            className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-hp-navy"
                          >
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-hp-blue hover:text-hp-navy"
        >
          Request the full grade slate & datasheets
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

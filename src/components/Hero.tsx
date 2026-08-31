import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_STATS, TRUST_MARKERS } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hp-navy text-white">
      {/* backdrop */}
      <div className="absolute inset-0 bg-hex opacity-70" aria-hidden />
      <div
        className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-hp-blue/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-56 -left-24 h-[32rem] w-[32rem] rounded-full bg-hp-red/20 blur-3xl"
        aria-hidden
      />

      <div className="container-hp relative py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="section-eyebrow border-white/20 bg-white/10 text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-hp-orange" />
            HP Petrochemicals
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            The building blocks for a{" "}
            <span className="text-hp-orange">self-reliant</span> India
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Hindustan Petroleum is embedding world-scale cracker and derivative
            units into its refineries — turning our own hydrocarbons into
            polyethylene, polypropylene, glycols and aromatics for Indian
            industry.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <a href="#products">
                Explore the product slate <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline-invert" size="lg" asChild>
              <a href="#about-hpcl">About Hindustan Petroleum</a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {TRUST_MARKERS.map((m) => (
              <li key={m} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-hp-orange" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* stat band */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 lg:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="bg-hp-navy/40 p-6 backdrop-blur-sm">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-extrabold text-white lg:text-3xl">
                {s.value}
              </dd>
              <p className="mt-1 text-xs leading-snug text-white/65">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        className="container-hp relative flex items-center justify-center pb-8 text-white/50 transition-colors hover:text-white"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

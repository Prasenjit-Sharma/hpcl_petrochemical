import { SectionHeading } from "@/components/SectionHeading";
import { SUSTAINABILITY } from "@/data/content";

export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative scroll-mt-24 overflow-hidden bg-hp-navy py-20 text-white lg:py-28"
    >
      <div className="absolute inset-0 bg-hex opacity-60" aria-hidden />
      <div
        className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-hp-blue/25 blur-3xl"
        aria-hidden
      />

      <div className="container-hp relative">
        <SectionHeading
          invert
          eyebrow="Sustainability"
          title="Growth that respects its footprint"
          intro="The petrochemical complexes are being engineered to high environmental standards — and the product roadmap is moving toward circular and lower-carbon polymers."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUSTAINABILITY.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.1]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-hp-orange">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-5 text-sm text-white/75">
          <span className="font-semibold text-white">Aligned with:</span>
          <span>Aatmanirbhar Bharat — material self-reliance</span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span>India's Plastic Waste Management / EPR rules</span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span>HPCL's net-zero ambition</span>
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHANNELS = [
  {
    icon: Mail,
    label: "Polymer marketing",
    value: "petrochem.marketing@hpcl.example",
    href: "mailto:petrochem.marketing@hpcl.example",
  },
  {
    icon: Phone,
    label: "Customer service desk",
    value: "1800-XXX-XXXX (toll-free)",
    href: "tel:1800000000",
  },
  {
    icon: MapPin,
    label: "Registered office",
    value: "Petroleum House, Mumbai, India",
    href: "#",
  },
];

export function ContactCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28"
    >
      <div className="container-hp">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <div className="grid lg:grid-cols-[1.05fr_minmax(0,0.95fr)]">
            <div className="bg-hp-navy p-8 text-white lg:p-12">
              <span className="section-eyebrow border-white/20 bg-white/10 text-white">
                Contact
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-[2.2rem]">
                Talk to the petrochemicals team
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                Converters, distributors and institutional buyers can register
                interest for grade information, samples and supply agreements
                ahead of commercial start-up.
              </p>

              <div className="mt-8 space-y-4">
                {CHANNELS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-lg border border-white/15 bg-white/[0.05] p-4 transition-colors hover:bg-white/[0.1]"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-hp-orange">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/60">
                        {c.label}
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <form
              className="p-8 lg:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo form — no data is submitted in this concept build.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Work email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="interest"
                  className="mb-1.5 block text-sm font-semibold text-hp-navy"
                >
                  Area of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm text-hp-navy outline-none focus:border-hp-blue focus:ring-2 focus:ring-ring"
                >
                  <option>Polymers — PE / PP</option>
                  <option>Chemical intermediates — MEG / Butadiene</option>
                  <option>Aromatics — Benzene / Toluene</option>
                  <option>Distribution / channel partnership</option>
                </select>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-hp-navy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-hp-navy outline-none focus:border-hp-blue focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your requirement, volumes and location."
                />
              </div>
              <Button type="submit" variant="accent" className="mt-6 w-full sm:w-auto">
                Submit enquiry <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                This is a redesign concept. The form is non-functional and
                collects no data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-hp-navy"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm text-hp-navy outline-none focus:border-hp-blue focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

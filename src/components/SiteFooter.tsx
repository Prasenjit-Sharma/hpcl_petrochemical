import { ArrowUpRight } from "lucide-react";
import { HpLogo } from "@/components/HpLogo";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Petrochemicals",
    links: ["Polymers", "Chemical intermediates", "Aromatics", "Applications", "Grade datasheets"],
  },
  {
    title: "Complexes",
    links: ["Rajasthan Refinery (HRRL)", "Visakh Petrochemicals", "Marketing & logistics", "Technical service"],
  },
  {
    title: "Corporate",
    links: ["About Hindustan Petroleum", "Investors", "Sustainability", "Careers", "Newsroom"],
  },
  {
    title: "Resources",
    links: ["Tenders & procurement", "Safety data sheets", "Distributor login", "Contact"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-hp-navy text-white">
      <div className="container-hp py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div>
            <HpLogo invert />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              A concept redesign of the HP Petrochemicals page for demonstration
              purposes. Not affiliated with or endorsed by Hindustan Petroleum
              Corporation Limited.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-hp-orange">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Redesign concept. Brand names and marks
            belong to their respective owners.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#top" className="hover:text-white">Privacy</a>
            <a href="#top" className="hover:text-white">Terms</a>
            <a href="#top" className="hover:text-white">Accessibility</a>
            <a
              href="https://www.hindustanpetroleum.com/hp-petrochemicals"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-white/80 hover:text-hp-orange"
            >
              Original page <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, Phone, Search, ArrowUpRight } from "lucide-react";
import { NAV } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HpLogo } from "@/components/HpLogo";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Slim context strip — links back to the parent site */}
      <div className="hidden bg-hp-navy text-white md:block">
        <div className="container-hp flex h-9 items-center justify-between text-xs">
          <p className="text-white/65">
            Redesign concept · HP Petrochemicals page
          </p>
          <a
            href="https://www.hindustanpetroleum.com/hp-petrochemicals"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-hp-orange"
          >
            View the live page <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
            : "border-transparent bg-white",
        )}
      >
        <div className="container-hp flex h-[72px] items-center justify-between gap-6">
          <a href="#top" className="shrink-0" aria-label="HP Petrochemicals — top">
            <HpLogo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                  active === item.href
                    ? "bg-hp-blue-light text-hp-navy"
                    : "text-hp-navy/80 hover:bg-hp-blue-light hover:text-hp-navy",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="hidden h-10 w-10 items-center justify-center rounded-md text-hp-navy transition-colors hover:bg-hp-blue-light sm:inline-flex"
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Button variant="accent" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="#contact">
                <Phone className="h-4 w-4" /> Enquire
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-hp-navy transition-colors hover:bg-hp-blue-light lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="mb-6">On this page</SheetTitle>
                <nav className="flex flex-col">
                  {NAV.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={item.href}
                        className="border-b border-border py-3.5 text-[15px] font-semibold text-hp-navy"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Button variant="accent" className="mt-6 w-full" asChild>
                    <a href="#contact">Enquire about supply</a>
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Menu, Phone, Search, ChevronDown, ArrowUpRight } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Utility bar */}
      <div className="hidden bg-hp-navy text-white md:block">
        <div className="container-hp flex h-9 items-center justify-between text-xs">
          <p className="text-white/70">
            An unofficial redesign concept · Hindustan Petroleum Corporation Limited
          </p>
          <nav className="flex items-center gap-5">
            <a href="#investors" className="link-underline text-white/80 hover:text-white">
              Investors
            </a>
            <a href="#careers" className="link-underline text-white/80 hover:text-white">
              Careers
            </a>
            <a href="#tenders" className="link-underline text-white/80 hover:text-white">
              Tenders
            </a>
            <a
              href="https://www.hindustanpetroleum.com"
              className="inline-flex items-center gap-1 font-semibold text-white hover:text-hp-orange"
            >
              hindustanpetroleum.com <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>
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
          <a href="#top" className="shrink-0">
            <HpLogo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-hp-navy transition-colors hover:bg-hp-blue-light"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 text-hp-blue transition-transform group-hover:rotate-180" />
                  )}
                </a>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 rounded-lg border border-border bg-white p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-hp-blue-light hover:text-hp-navy"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
                <SheetTitle className="mb-6">Menu</SheetTitle>
                <nav className="flex flex-col">
                  {NAV.map((item) => (
                    <div key={item.label} className="border-b border-border py-1">
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block py-3 text-[15px] font-semibold text-hp-navy"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                      {item.children && (
                        <div className="flex flex-col pb-2">
                          {item.children.map((child) => (
                            <SheetClose asChild key={child.label}>
                              <a
                                href={child.href}
                                className="py-2 pl-3 text-sm text-muted-foreground"
                              >
                                {child.label}
                              </a>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
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

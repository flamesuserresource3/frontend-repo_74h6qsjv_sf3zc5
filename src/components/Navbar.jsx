import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setOpen(false);
      setScrolled(window.scrollY > 6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#servizi", label: "Servizi" },
    { href: "#chi-sono", label: "Chi sono" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition ${
        scrolled
          ? "border-b border-white/20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-base font-semibold tracking-tight text-emerald-900">
          <span className="inline-flex items-center gap-2">
            <span className="text-emerald-900">Dott.ssa</span>
            <span className="rounded-full bg-gradient-to-r from-[#E7C873] to-amber-300 px-2 py-0.5 text-emerald-900 shadow-sm">
              Francesca Ferrone
            </span>
          </span>
        </a>

        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-emerald-900/80 hover:text-emerald-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="rounded-md p-2 hover:bg-emerald-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          <Menu className="h-6 w-6 text-emerald-900" />
        </button>
      </div>

      {open && (
        <div className="border-t border-emerald-100 bg-white px-6 py-3 md:hidden">
          <nav className="grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-1 text-emerald-900/90">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

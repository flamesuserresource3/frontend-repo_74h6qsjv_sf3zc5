import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
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
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold text-emerald-700">
          Dott.ssa Francesca Ferrone
        </a>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-emerald-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden rounded-md p-2 hover:bg-emerald-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-emerald-100 bg-white px-6 py-3 md:hidden">
          <nav className="grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-1 text-gray-700">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

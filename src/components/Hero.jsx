import { Calendar, Leaf, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Luxury gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#E7C873]/30 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-3 py-1 text-sm font-medium text-emerald-900">
              <Star className="h-4 w-4 text-[#E7C873]" /> Benessere su misura
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl">
              Dottoressa Francesca Ferrone
            </h1>
            <p className="mt-4 text-lg leading-8 text-emerald-900/80">
              Biologa nutrizionista. Percorsi premium e personalizzati per ritrovare equilibrio, energia e
              risultati duraturi, con un approccio elegante e scientifico.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-700 px-6 py-3 text-white shadow-lg shadow-emerald-900/20 ring-1 ring-white/10 hover:from-emerald-800 hover:to-emerald-700"
              >
                <Phone className="mr-2 h-5 w-5" /> Contattami
              </a>
              <a
                href="#servizi"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-900/20 bg-white/70 px-6 py-3 text-emerald-900 shadow-sm backdrop-blur hover:bg-white"
              >
                <Calendar className="mr-2 h-5 w-5" /> Prenota una consulenza
              </a>
            </div>
            <div className="mt-6 text-sm text-emerald-900/70">
              Ricevo in studio e online. Primo colloquio conoscitivo.
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-tr from-white via-emerald-50 to-white p-3 shadow-2xl shadow-emerald-900/10">
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute right-6 top-6 h-10 w-10 rounded-full bg-[#E7C873]/50 blur-xl" />
                <div className="absolute bottom-10 left-8 h-16 w-16 rounded-full bg-emerald-400/30 blur-2xl" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop"
                alt="Nutrizionista - stile di vita sano"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="mx-auto mt-6 max-w-md rounded-xl bg-white/70 p-4 text-sm text-emerald-900 shadow backdrop-blur">
              "Eleganza e cura in ogni dettaglio del percorso nutrizionale"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

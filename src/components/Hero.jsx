import { Calendar, Leaf, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
              <Leaf className="h-4 w-4" /> Nutrizione personalizzata
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Dottoressa Francesca Ferrone
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Biologa nutrizionista. Piani alimentari su misura per migliorare benessere, energia e
              performance in modo sostenibile e scientifico.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Phone className="mr-2 h-5 w-5" /> Contattami
              </a>
              <a
                href="#servizi"
                className="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-5 py-3 text-emerald-700 hover:bg-emerald-50"
              >
                <Calendar className="mr-2 h-5 w-5" /> Prenota una consulenza
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Ricevo in studio e online. Primo colloquio conoscitivo.
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto aspect-square max-w-md rounded-3xl bg-gradient-to-tr from-emerald-200 via-emerald-100 to-white p-2 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop"
                alt="Nutrizionista - stile di vita sano"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

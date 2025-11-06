import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contatti" className="relative bg-gradient-to-b from-white to-emerald-50/40 py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            Contatti e prenotazioni
          </h2>
          <p className="mt-3 text-lg text-emerald-900/80">
            Scrivimi per informazioni o per prenotare una consulenza in studio o online.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur">
            <div className="flex items-center gap-3 text-emerald-900">
              <Phone className="h-5 w-5" />
              <h3 className="font-semibold">Telefono</h3>
            </div>
            <p className="mt-2 text-emerald-900/85">+39 000 000 000</p>
          </div>
          <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur">
            <div className="flex items-center gap-3 text-emerald-900">
              <Mail className="h-5 w-5" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p className="mt-2 text-emerald-900/85">info@francescaferrone.it</p>
          </div>
          <div className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur">
            <div className="flex items-center gap-3 text-emerald-900">
              <MapPin className="h-5 w-5" />
              <h3 className="font-semibold">Studio</h3>
            </div>
            <p className="mt-2 text-emerald-900/85">Ricevo su appuntamento</p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 grid gap-6 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur md:grid-cols-2"
        >
          <div>
            <label className="block text-sm font-medium text-emerald-900">Nome e cognome</label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-xl border-emerald-900/20 bg-white/80 text-emerald-950 placeholder:text-emerald-900/40 focus:border-emerald-600 focus:ring-emerald-600"
              placeholder="Mario Rossi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl border-emerald-900/20 bg-white/80 text-emerald-950 placeholder:text-emerald-900/40 focus:border-emerald-600 focus:ring-emerald-600"
              placeholder="mario@email.it"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-emerald-900">Messaggio</label>
            <textarea
              rows={4}
              required
              className="mt-1 w-full rounded-xl border-emerald-900/20 bg-white/80 text-emerald-950 placeholder:text-emerald-900/40 focus:border-emerald-600 focus:ring-emerald-600"
              placeholder="Raccontami i tuoi obiettivi..."
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-700 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-900/20 ring-1 ring-white/10 hover:from-emerald-800 hover:to-emerald-700"
            >
              Invia richiesta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

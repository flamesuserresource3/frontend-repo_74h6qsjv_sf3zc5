import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contatti" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contatti e prenotazioni
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Scrivimi per informazioni o per prenotare una consulenza in studio o online.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-emerald-700">
              <Phone className="h-5 w-5" />
              <h3 className="font-semibold">Telefono</h3>
            </div>
            <p className="mt-2 text-gray-700">+39 000 000 000</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-emerald-700">
              <Mail className="h-5 w-5" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p className="mt-2 text-gray-700">info@francescaferrone.it</p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-emerald-700">
              <MapPin className="h-5 w-5" />
              <h3 className="font-semibold">Studio</h3>
            </div>
            <p className="mt-2 text-gray-700">Ricevo su appuntamento</p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 grid gap-6 rounded-2xl border border-gray-100 bg-emerald-50/50 p-6 shadow-sm md:grid-cols-2"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome e cognome</label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="Mario Rossi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="mario@email.it"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Messaggio</label>
            <textarea
              rows={4}
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="Raccontami i tuoi obiettivi..."
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow hover:bg-emerald-700"
            >
              Invia richiesta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

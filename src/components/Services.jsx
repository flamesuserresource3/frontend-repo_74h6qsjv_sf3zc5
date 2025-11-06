import { Apple, UtensilsCrossed, Activity, HeartPulse } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Piani alimentari personalizzati",
    desc:
      "Programmi su misura in base a obiettivi, abitudini e stato di salute. Approccio equilibrato, sostenibile e senza diete drastiche.",
  },
  {
    icon: Activity,
    title: "Nutrizione sportiva",
    desc:
      "Supporto per migliorare performance, recupero e composizione corporea per atleti e amatori.",
  },
  {
    icon: HeartPulse,
    title: "Educazione nutrizionale",
    desc:
      "Percorsi per imparare a gestire la spesa, leggere le etichette, organizzare pasti sani per tutta la famiglia.",
  },
  {
    icon: Apple,
    title: "Benessere e prevenzione",
    desc:
      "Strategie alimentari per energia stabile, digestione, pelle e sonno migliori, gestione dello stress e prevenzione.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative bg-gradient-to-b from-white to-emerald-50/40 py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E7C873]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            Come posso aiutarti
          </h2>
          <p className="mt-3 text-lg text-emerald-900/80">
            Un percorso chiaro, pratico e personalizzato, con strumenti concreti per ottenere risultati.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/50 bg-white/70 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-600 text-white shadow-lg shadow-emerald-900/20 ring-1 ring-white/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-900/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="servizi" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Come posso aiutarti
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Un percorso chiaro, pratico e personalizzato, con strumenti concreti per ottenere risultati.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

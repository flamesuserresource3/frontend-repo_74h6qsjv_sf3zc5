export default function About() {
  return (
    <section id="chi-sono" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#E7C873]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-[#E7C873]/40 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop"
              alt="Studio nutrizionista"
              className="aspect-[4/3] w-full rounded-3xl border border-white/40 object-cover shadow-2xl shadow-emerald-900/10"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">Chi sono</h2>
            <p className="mt-5 leading-7 text-emerald-900/85">
              Sono la Dott.ssa Francesca Ferrone, biologa nutrizionista. Aiuto le persone a ritrovare
              equilibrio e serenità con l’alimentazione, con percorsi cuciti su misura, basati su
              evidenze scientifiche e abitudini sostenibili nel tempo.
            </p>
            <p className="mt-4 leading-7 text-emerald-900/85">
              Seguo donne e uomini di tutte le età, sportivi e famiglie, con attenzione alla storia
              personale, agli impegni quotidiani e al rapporto con il cibo. L’obiettivo è
              accompagnarti verso risultati concreti, senza estremismi.
            </p>
            <ul className="mt-6 space-y-2 text-emerald-900/85">
              <li>• Valutazione completa dello stato nutrizionale</li>
              <li>• Piani alimentari personalizzati</li>
              <li>• Educazione alimentare e mindful eating</li>
              <li>• Supporto continuo con follow-up</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

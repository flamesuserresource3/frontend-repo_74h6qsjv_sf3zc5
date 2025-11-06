export default function About() {
  return (
    <section id="chi-sono" className="bg-emerald-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop"
              alt="Studio nutrizionista"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Chi sono
            </h2>
            <p className="mt-4 text-gray-700 leading-7">
              Sono la Dott.ssa Francesca Ferrone, biologa nutrizionista. Aiuto le persone a ritrovare
              equilibrio e serenità con l’alimentazione, con percorsi cuciti su misura, basati su
              evidenze scientifiche e abitudini sostenibili nel tempo.
            </p>
            <p className="mt-3 text-gray-700 leading-7">
              Seguo donne e uomini di tutte le età, sportivi e famiglie, con attenzione alla storia
              personale, agli impegni quotidiani e al rapporto con il cibo. L’obiettivo è
              accompagnarti verso risultati concreti, senza estremismi.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
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

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/[0.35] to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="relative overflow-hidden border-t border-white/20 bg-gradient-to-r from-emerald-900 to-emerald-800 py-10 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#E7C873]/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm/6 text-white/80">
              © {new Date().getFullYear()} Dott.ssa Francesca Ferrone — Biologa Nutrizionista
            </p>
            <p className="text-sm/6 text-white/60">Benessere personalizzato con un tocco di eleganza</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

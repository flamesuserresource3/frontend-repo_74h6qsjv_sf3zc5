import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 bg-emerald-50/60 py-6">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Dott.ssa Francesca Ferrone — Biologa Nutrizionista
        </div>
      </footer>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Collections from "./components/Collections";
import Testimonials from "./components/Testimonials";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="font-sans bg-nude text-chocolate">
      <Navbar />
      <Hero />
      <Features />
      <Collections />
      <Testimonials />
      <CTA />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;

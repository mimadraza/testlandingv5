import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Industries from "./components/Industries";
import TechStack from "./components/TechStack";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Workflow />
      <Industries />
      <TechStack />
      <Pricing />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

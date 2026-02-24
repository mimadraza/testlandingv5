import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Industries from "./components/Industries";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff" }}>
      <Navbar scrolled={scrolled} />
      <Hero />
      <Tagline />
      <Features />
      <Workflow />
      <Industries />
      <TechStack />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

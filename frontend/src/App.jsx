import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Professional from "./components/Professional";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Professional/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

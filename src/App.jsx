import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Showcase3D from "./components/Showcase3D";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-root">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>

        <section id="showcase">
          <Showcase3D />
        </section>
        {/* 🔥 ABOUT SECTION */}
        <section id="about">
          <Hero />
        </section>

        {/* 🔥 SKILLS */}
        <section id="skills">
          <Skills />
        </section>

        {/* 🔥 PROJECTS */}
        <section id="projects">
          <Projects />
        </section>

        {/* 🔥 CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
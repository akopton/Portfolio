import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Github from "./components/Github";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

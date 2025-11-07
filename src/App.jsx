import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Infra from "./components/Infra";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="astrocloud-app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Infra />
        <Benefits />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

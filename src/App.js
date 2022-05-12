import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import React from "react";
import Info from "./components/Info";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Callout from "./components/Callout";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Info />
      <Callout />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

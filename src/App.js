import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import React, { useState } from "react";
import Info from "./components/Info";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Callout from "./components/Callout";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {login ? (
        <div className="App-cover" onClick={e => setLogin(false)}></div>
      ) : null}
      <Login login={login} />
      <Header setLogin={setLogin} />
      <Hero setLogin={setLogin} />
      <Features />
      <Info />
      <Callout />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

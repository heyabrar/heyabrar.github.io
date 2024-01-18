import React, { useRef } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection";

function App() {
  const homeRef = useRef(null);
  return (
    <div>
      <HeroSection aboutRef={homeRef} />
    </div>
  );
}

export default App;

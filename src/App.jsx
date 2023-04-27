import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={`${enabled && "dark"}`}>
      <Navbar enabled={enabled} setEnabled={setEnabled} />
      <Hero />
    </div>
  );
}

export default App;

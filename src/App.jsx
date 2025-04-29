import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [sayi, setSayi] = useState(() => {
    const kayitli = localStorage.getItem("sayi");
    return kayitli ? parseInt(kayitli) : 0;
  });
  useEffect(() => {
    localStorage.setItem("sayi", sayi);
  }, [sayi]);
  return (
    <>
      <h1 className="counter">{sayi} </h1>
      <button onClick={() => setSayi(sayi + 1)}>Artır</button>
      <button onClick={() => setSayi(sayi - 1)} disabled={sayi === 0}>
        Azalt
      </button>
      <button onClick={() => setSayi(0)}>Sıfırla</button>
    </>
  );
}
export default App;

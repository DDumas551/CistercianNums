import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Info from "./components/Info";
import Input from "./components/Input";
import SymbolBox from "./components/SymbolBox";

function App() {
  const [num, setNum] = useState(1);

  return (
    <div className="App">
      <Title />
      <Info />
      <Input value={num} setNum={setNum} />
      <p>
        Info about the numerals
        <br />
        <a
          href="https://en.wikipedia.org/wiki/Cistercian_numerals"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
      </p>
      <SymbolBox num={num} />
    </div>
  );
}

export default App;

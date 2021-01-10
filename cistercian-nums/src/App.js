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
      <Info test={num} />
      <Input value={num} setNum={setNum} />
      <SymbolBox />
    </div>
  );
}

export default App;

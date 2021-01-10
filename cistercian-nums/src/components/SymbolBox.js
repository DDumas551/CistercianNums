import React from "react";
import "./SymbolBox.css";
import Base from "./lines/Base";

const SymbolBox = ({num}) => {
  return (
    <div>
      <div className="container">
        <Base num={num} />
      </div>
    </div>
  );
};

export default SymbolBox;

import React from "react";

const Input = ({ value, setNum }) => {
  const handleChange = (e) => {
    setNum(e.target.value);
    };
  return (
    <form>
      <label>
        <input
          type="number"
          name="input"
          value={value}
          min="1"
          max="9999"
          step="1"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Input;

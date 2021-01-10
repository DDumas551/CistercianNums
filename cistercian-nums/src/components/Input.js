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
          //   onChange={setNum(value)}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Input;

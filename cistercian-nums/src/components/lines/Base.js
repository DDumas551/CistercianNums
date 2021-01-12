import React from "react";
import numberGroup from "../numbers";

const Base = ({ num }) => {
  const build = new Array(36).fill(false);
  const keys = Object.keys(numberGroup);
  const values = Object.values(numberGroup);
  let checker = num;
  for (let k = keys.length - 1; k >= 0; k--) {
    console.log(checker);
    if (checker) {
      if (checker - keys[k] >= 0) {
        build[k] = true;
        checker -= keys[k];
      }
    }
  }
  return (
    <div className="base">
      <div className="base-element" />
      {keys.map((key, i) => {
        if (build[i]) {
          return <div className={values[i]} key={key} />;
        }
        return <div />;
      })}
    </div>
  );
};

export default Base;

import React from "react";

const Base = ({ num }) => {
  const number = 4;
  const numberGroup = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "oneHundred",
    200: "twoHundred",
    300: "threeHundred",
    400: "fourHundred",
    500: "fiveHundred",
    600: "sixHundred",
    700: "sevenHundred",
    800: "eightHundred",
    900: "nineHundred",
    1000: "oneThousand",
    2000: "twoThousand",
    3000: "threeThousand",
    4000: "fourThousand",
    5000: "fiveThousand",
    6000: "sixThousand",
    7000: "sevenThousand",
    8000: "eightThousand",
    9000: "nineThousand",
  };
  const keys = Object.keys(numberGroup);
  const values = Object.values(numberGroup);
  return (
    <div className="base">
      <div className="base-element" />
      {keys.map((key, i) => {
        if (key == num) {
          return <div className={values[i]} />;
        }
      })}
    </div>
  );
};

export default Base;

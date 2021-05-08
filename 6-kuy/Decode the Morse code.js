// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
// For example:
// decodeMorse('.... . -.--   .--- ..- -.. .')
// should return "HEY JUDE"

const decodeMorse = function (morseCode) {
  morseCode = morseCode.trim();
  let refinedData = morseCode.split("   ");
  let result = [];

  for (let i = 0; i < refinedData.length; i++) {
    let temp = refinedData[i].split(" ");
    for (let j = 0; j < temp.length; j++) {
      if (MORSE_CODE[temp[j]]) {
        result.push(MORSE_CODE[temp[j]]);
      }
    }

    if (i !== refinedData.length - 1) {
      result.push(" ");
    }
  }
  return result.join("");
};

//or

const decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("");
};

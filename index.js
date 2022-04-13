const { _l, _n, _s } = require("./src/w");

const morse = (str) => {
  const arr = str.split("");
  let morse = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z]/i)) {
      morse += _l[arr[i].toLowerCase()];
    }
    else if (arr[i].match(/[0-9]/)) {
      morse += _n[arr[i]];
    }
    else if (arr[i] === " ") {
      morse += " ";
    }
    else if (arr[i].match(/[.,:;=+-_\/"']/)) {
      morse += _s[arr[i]];
    }
  }
  // return the morse code
  return morse;
};

console.log(morse('Hey gaby, how are you?'));
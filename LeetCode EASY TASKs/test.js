const obj = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const stack = ["{"];
const open = stack.pop();

console.log(obj[open]);

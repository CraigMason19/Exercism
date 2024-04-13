const TRUNCATION_LENGTH = 5;

const toHex = (char) => {
  return char.codePointAt(0).toString(16);
}

const toChar = (hex) => {
  return String.fromCodePoint("0x" + hex);
}

const truncate = (input) => {
  let x = [...input].slice(0, TRUNCATION_LENGTH).map(c => toHex(c))

  return x.map(hex => toChar(hex)).join("");
};
 
const input = [
  "∅⊊ℕ⊊ℤ⊊ℚ⊊ℝ⊊ℂ",
  "",
  "🕰😀",
  "Long String",
  "❄🌡🤧🤒🏥🕰😀",
  "A very long string",
] 

input.forEach(item => {
  console.log(`${item} -> ${truncate(item)}`);
});
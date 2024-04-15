const toBinary = (number) => (number >>> 0).toString(2);

const eggCount = (displayValue) => {
  let binary = toBinary(displayValue);
  let count = binary.split("").filter(bit => bit === "1").length;

  return count;
};

const displayValues = [
  0,
  1,
  4,
  16,
  13,
  89,
  2_000_000_000,
];

displayValues.forEach(value => {
  console.log(`Value: ${value}`);
  console.log(`\tBinary: ${toBinary(value)}`);
  console.log(`\tEgg Count: ${eggCount(value)}`);
});
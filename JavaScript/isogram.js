function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

const isIsogram = (word) => {
  let cleanInput = [...word.toLowerCase()].filter(c => isLetter(c))

  return new Set(cleanInput).size === cleanInput.length;
};

const words = ["lumberjacks",
  "background",
  "downstream",
  "six-year-old",
  "alphAbet",
  "Alphabet",
];

words.forEach(word => {
  console.log(`${word}: ${isIsogram(word)}`);
});
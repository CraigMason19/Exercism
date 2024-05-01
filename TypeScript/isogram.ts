function isLetter(c: string): boolean {
  return c.toLowerCase() != c.toUpperCase();
}

export const isIsogram = (word: string): boolean => {
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
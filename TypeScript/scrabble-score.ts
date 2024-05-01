interface Points {
  [key: string]: string[];
}

interface SingleLetter {
  [key: string]: number;
}

const points: Points = {
  '1': ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  '2': ["D", "G"],
  '3': ["B", "C", "M", "P"],
  '4': ["F", "H", "V", "W", "Y"],
  '5': ["K"],
  '8': ["J", "X"],
  '10': ["Q", "Z"],
};

export const transform = (valueMap: Points): SingleLetter => {
  let manyToOne: SingleLetter = {};

  for (const [key, value] of Object.entries(valueMap)) {
      value.forEach(letter => {
          manyToOne[letter.toLowerCase()] = Number(key);
      });
  }

  return manyToOne;
}

export const score = (word: string): number => {
  if(word === undefined || word.length === 0) {
    return 0;
  }

  const pointDict = transform(points);
  let s = 0;

  for (const letter of word) { 
    s += pointDict[letter.toLowerCase()];
  };

  return s;
}

console.log(`REVERBERATE -> ${score('REVERBERATE')}`); // 16
console.log(`OXYPHENBUTAZONE -> ${score('OXYPHENBUTAZONE')}`); // 16
// Code reused from ETL problem

const points = {
  '1': ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  '2': ["D", "G"],
  '3': ["B", "C", "M", "P"],
  '4': ["F", "H", "V", "W", "Y"],
  '5': ["K"],
  '8': ["J", "X"],
  '10': ["Q", "Z"],
};

const transform = (valueMap) => {
  let manyToOne = {};

  for (const [key, value] of Object.entries(valueMap)) {
      value.forEach(letter => {
          manyToOne[letter.toLowerCase()] = Number(key);
      });
  }

  return manyToOne;
}

const score = (word) => {
  const pointDict = transform(points);
  let s = 0;

  for (const letter of word) { 
    s += pointDict[letter.toLowerCase()];
  };

  return s;
}
const day = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fifth",
  6: "sixth",
  7: "seventh",
  8: "eighth",
  9: "ninth",
  10: "tenth",
  11: "eleventh",
  12: "twelfth",
};

const items = {
  1: "a Partridge in a Pear Tree",
  2: "two Turtle Doves",
  3: "three French Hens",
  4: "four Calling Birds",
  5: "five Gold Rings",
  6: "six Geese-a-Laying",
  7: "seven Swans-a-Swimming",
  8: "eight Maids-a-Milking",
  9: "nine Ladies Dancing",
  10: "ten Lords-a-Leaping",
  11: "eleven Pipers Piping",
  12: "twelve Drummers Drumming",
}

const constructVerse = (verseNum) => {
  let presents = [];

  if(verseNum === 1) {
    presents.push(items[1]);
  }
  else {
    for(let i = 1; i < verseNum + 1; i++) {
      presents.push(items[i]);
    }

    presents[0] = "and " + presents[0];
  }

  return `On the ${day[verseNum]} day of Christmas my true love gave to me: ${presents.reverse().join(", ")}.\n`;
};

const recite = (start, end=undefined) => {
  if(end === undefined) {
    return constructVerse(start);
  }

  let lyrics = [];

  for(let i = start; i <= end; i++) {
    lyrics.push(constructVerse(i));
  }

  return lyrics.join("\n");
};
  
console.log(recite(1));
console.log(recite(1, 4));
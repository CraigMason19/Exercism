const sortString = (str) => {
    return str.split('').sort().join('');
}

const findAnagrams = (baseword, potentials) => {
  var matches = [];

  potentials.forEach(potential => {
    var b = baseword.toLowerCase();
    var p = potential.toLowerCase();

    // Can't be an anagram if it already matches
    if(b != p) {       
      if(sortString(b) === sortString(p)) {
          matches.push(potential);
      }
    }
  });

  return matches;
};  

const inputs = [
    { baseword:'Orchestra', words:['cashregister', 'Carthorse', 'radishes'] },
    { baseword:'nose', words:['Eons', 'ONES'] },
    { baseword:'solemn', words:['lemons', 'cherry', 'melons'] },
];

inputs.forEach(input => {
    console.log(`${input.baseword} -> ${findAnagrams(input.baseword, input.words)}`);
});
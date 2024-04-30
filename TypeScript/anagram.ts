const sortString = (str: string): string => {
    return str.split('').sort().join('');
}

export class Anagram {
  readonly baseword: string;

  constructor(input: string) {
    this.baseword = input;
  }

  public matches(...potentials: string[]): string[] {
    let m: string[] = [];

    potentials.forEach(potential => {
      var b = this.baseword.toLowerCase();
      var p = potential.toLowerCase();
  
      // Can't be an anagram if it already matches
      if(b != p) {       
        if(sortString(b) === sortString(p)) {
            m.push(potential);
        }
      }
    });
  
    return m;
  }
}

const inputs = [
    { baseword:'Orchestra', words:['cashregister', 'Carthorse', 'radishes'] },
    { baseword:'nose', words:['Eons', 'ONES'] },
    { baseword:'solemn', words:['lemons', 'cherry', 'melons'] },
];

inputs.forEach(input => {
    console.log(`${input.baseword} -> ${ new Anagram(input.baseword).matches(...input.words)}`);
});
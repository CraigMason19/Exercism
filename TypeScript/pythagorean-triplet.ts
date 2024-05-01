function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

class Triplet {
  readonly a: number;
  readonly b: number;
  readonly c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a; 
    this.b = b; 
    this.c = c;
  }

  toArray(): number[] {
    return [this.a, this.b, this.c];
  }
}

type Options = {
  minFactor?: number,
  maxFactor?: number,
  sum: number,
}

export function triplets(options: Options): Triplet[] {
  let triplets = [];
  
  let min = (options.minFactor === undefined) ? 1 : options.minFactor;
  let max = (options.maxFactor === undefined) ? options.sum : options.maxFactor;

  for(let a = min; a < options.sum; a++) {
    for(let b = a+1; b < options.sum; b++) {
      let c = options.sum - a - b;
      if (a*a + b*b === c*c) {
        if(inRange(a, min, max) && inRange(c, min, max)) {
          triplets.push(new Triplet(a,b,c));
        }
      }
    }
  } 

  return triplets;
}

function tripletsWithSum(options: Options = {sum:100}) {
  return triplets(options).map((triplet) =>
    triplet.toArray().sort((a, b) => a - b),
  );
}
 
console.log("108 -> ", tripletsWithSum({ sum:108 }));
console.log("90 -> ", tripletsWithSum({ sum: 90, minFactor: 10 }));
console.log("840 -> ", tripletsWithSum({ sum:840, maxFactor: 352, minFactor: 150 })); 
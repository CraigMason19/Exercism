function inRange(value, min, max) {
  return value >= min && value <= max;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a; 
    this.b = b; 
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}

function triplets({ minFactor, maxFactor, sum }) {
  let triplets = [];
  
  let min = (minFactor === undefined) ? 1 : minFactor;
  let max = (maxFactor === undefined) ? sum : maxFactor;

  for(let a = min; a < sum; a++) {
    for(let b = a+1; b < sum; b++) {
      let c = sum - a - b;
      if (a*a + b*b === c*c) {
        if(inRange(a, min, max) && inRange(c, min, max)) {
          triplets.push(new Triplet(a,b,c));
        }
      }
    }
  } 

  return triplets;
}
    
function tripletsWithSum(sum, options = {}) {
  return triplets({ ...options, sum }).map((triplet) =>
    triplet.toArray().sort((a, b) => a - b),
  );
}
 
console.log("108 -> ", tripletsWithSum(108));
console.log("90 -> ", tripletsWithSum(90, { minFactor: 10 }));
console.log("840 -> ", tripletsWithSum(840, { maxFactor: 352, minFactor: 150 })); 
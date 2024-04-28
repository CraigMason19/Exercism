export const steps = (x: number): number => {
  if(x <= 0 || !Number.isInteger(x)) { 
    throw new Error('Only positive integers are allowed'); 
  }

  let steps = 0;
  let n = x;
  
  while(n !== 1) {
    n = (n % 2 === 0) ? n / 2 : ((3 * n) + 1);
    steps++;
  }

  return steps;
};

console.log(steps(12));
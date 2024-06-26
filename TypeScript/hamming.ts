export function compute(left: string, right: string): number {
  if(left.length !== right.length) { 
    throw new Error('DNA strands must be of equal length.'); 
  }

  let differences = 0;

  for(let i = 0; i < left.length; i++) {
    if(left[i] != right[i]) { 
      differences++; 
    }
  }

  return differences;
};

console.log(compute("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"))
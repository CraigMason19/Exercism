const compute = (a, b) => {
  if(a.length !== b.length) { throw new Error('strands must be of equal length'); }

  let differences = 0;

  for(let i = 0; i < a.length; i++) {
    if(a[i] != b[i]) { 
      differences++; 
    }
  }

  return differences;
};

console.log(compute("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"))
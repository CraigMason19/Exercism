const countNucleotides = (dnaString) => {
    var count = { A: 0, C: 0, G: 0, T: 0 };    

    for (var i = 0; i < dnaString.length; i++) {
        var letter = dnaString[i];

        if (!(['A', 'C', 'G', 'T'].includes(letter))) {
            throw new Error('Invalid nucleotide in strand');
        } 

        count[letter]++;
    }
    
    return Object.values(count).toString().replaceAll(',', ' ');
}

console.log(countNucleotides(''));

console.log(countNucleotides('GATTACA'));

console.log(countNucleotides('INVALID'));
interface Nucleotide {
    [key: string]: number;
}

export const nucleotideCounts = (dnaString: string): Nucleotide => {
    var count: Nucleotide = { A: 0, C: 0, G: 0, T: 0 };    

    for (var i = 0; i < dnaString.length; i++) {
        var letter = dnaString[i];

        if (!(['A', 'C', 'G', 'T'].includes(letter))) {
            throw new Error('Invalid nucleotide in strand');
        } 

        count[letter]++;
    }
    
    return count;
}

console.log(nucleotideCounts(''));

console.log(nucleotideCounts('GATTACA'));

// console.log(countNucleotides('INVALID'));
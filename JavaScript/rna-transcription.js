const DNA_RNA_MAP = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U',
};

const toRna = (dna) => {
    let rna = dna.split('').map(letter => {
        return DNA_RNA_MAP[letter];
    });
    return rna.join('');
};

const input = [
    'G',
    'C',
    'T',
    'A',
    'ACGTGGTCTTAA',
];

input.forEach(element => {
    console.log(`${element} -> ${toRna(element)}`);
});
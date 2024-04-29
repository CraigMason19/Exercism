const DNA_RNA_MAP = new Map([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
]);

export const toRna = (dna: string): string => {
    let rna = dna.split('').map(letter => {
        let newLetter = DNA_RNA_MAP.get(letter);
        if(newLetter === undefined) {
            throw new Error('Invalid input DNA.');
        }

        return newLetter;
    });

    return rna.join('');
};

const input: string[] = [
    'G',
    'C',
    'T',
    'A',
    'ACGTGGTCTTAA',
];

input.forEach(element => {
    console.log(`${element} -> ${toRna(element)}`);
});
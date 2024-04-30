interface Proteins {
    [key: string]: string[];
}

const PROTEINS: Proteins = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"]
};

export const translate = (rna: string): string[] => {
    if(rna === undefined) {
        return [];
    }

    let codons = rna.toUpperCase().match(/.{1,3}/g);
    let proteins = [];

    for(let c of codons!) {
        let p = Object.keys(PROTEINS).find(key => PROTEINS[key].includes(c));

        if(p === 'STOP') {
            return proteins;
        }

        else if (p !== undefined) {
            proteins.push(p);
        }

        else {
            throw new Error("Invalid codon");
        }
    };

    return proteins;
};
  
let rna = "AUGUUUUCUUAAAUG";
console.log(translate(rna));
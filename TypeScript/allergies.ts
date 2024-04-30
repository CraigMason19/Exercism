interface Allergy {
    [key: string]: string;
}
const ALLERGY_LIST: Allergy = {
    '1': 'eggs',
    '2': 'peanuts',
    '4': 'shellfish',
    '8': 'strawberries',
    '16': 'tomatoes', 
    '32': 'chocolate', 
    '64': 'pollen', 
    '128': 'cats',
}

export class Allergies {
    private _score: number;
    private _list: string[];

    constructor(allergenIndex: number) {
        this._score = allergenIndex;

        // Construct the allergy list
        this._list = [];
        for(let key in ALLERGY_LIST) {
            if(this._score & Number(key)) {
                this._list.push(ALLERGY_LIST[key]);
            }
        }
    }
  
    list(): string[] {
        return this._list;
    }
  
    allergicTo(allergen: string) {
        return (this._list.includes(allergen));
    }
}

let n = new Allergies(9);
console.log(n);
console.log(n.list());

console.log(n.allergicTo('eggs'));
console.log(n.allergicTo('shellfish'));
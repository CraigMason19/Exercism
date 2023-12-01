const ALLERGY_LIST = {
    '1': 'eggs',
    '2': 'peanuts',
    '4': 'shellfish',
    '8': 'strawberries',
    '16': 'tomatoes', 
    '32': 'chocolate', 
    '64': 'pollen', 
    '128': 'cats',
}

class Allergies {
    constructor(score) {
        this.score = score;

        // Construct the allergy list
        this._list = [];
        for(let key in ALLERGY_LIST) {
            if(this.score & Number(key)) {
                this._list.push(ALLERGY_LIST[key]);
            }
        }
    }
  
    list() {
        return this._list;
    }
  
    allergicTo(foodstuff) {
        return (this._list.includes(foodstuff));
    }
}

n = new Allergies(9);
console.log(n);
console.log(n.list());

console.log(n.allergicTo('eggs'));
console.log(n.allergicTo('shellfish'));
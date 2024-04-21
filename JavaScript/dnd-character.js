const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const dicePool = (numDice) => {
    let dice = [];

    for(let i = 1; i <= numDice; i++) {
        dice.push(rollDice());
    }

    return dice;
};

const sum = (array) => {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
}

const abilityModifier = (n) => {
    if(n < 3) {
        throw new Error('Ability scores must be at least 3');
    }

    else if(n > 18) {
        throw new Error('Ability scores can be at most 18');
    }

    return Math.floor((n - 10) / 2);
};
  
class Character {
    static rollAbility() {
        let dice = dicePool(4).sort().reverse();
        dice.pop();
        return sum(dice);
    }

    constructor() {
        this._strength = Character.rollAbility();
        this._dexterity = Character.rollAbility();
        this._constitution = Character.rollAbility();
        this._intelligence = Character.rollAbility();
        this._wisdom = Character.rollAbility();
        this._charisma = Character.rollAbility();
        this._hitpoints = 10 + abilityModifier(this._constitution);
    }
  
    get strength() {
        return this._strength;
    }
  
    get dexterity() {
        return this._dexterity;
    }
  
    get constitution() {
        return this._constitution;
    }
  
    get intelligence() {
        return this._intelligence;
    }
  
    get wisdom() {
        return this._wisdom;
    }
  
    get charisma() {
        return this._charisma;
    }
  
    get hitpoints() {
        return this._hitpoints;
    }
}

const player = new Character();
console.log(player);
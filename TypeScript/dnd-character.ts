const rollDice = () : number => {
    return Math.floor(Math.random() * 6) + 1;
}

const dicePool = (numDice : number) : number [] => {
    let dice = [];

    for(let i = 1; i <= numDice; i++) {
        dice.push(rollDice());
    }

    return dice;
};

const sum = (array : number []) : number => {
    return array.reduce((accumulator : number, currentValue : number) => {
        return accumulator + currentValue
    }, 0);
}

export class DnDCharacter {
    strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore()
        this.dexterity = DnDCharacter.generateAbilityScore()
        this.constitution = DnDCharacter.generateAbilityScore()
        this.intelligence = DnDCharacter.generateAbilityScore()
        this.wisdom = DnDCharacter.generateAbilityScore()
        this.charisma = DnDCharacter.generateAbilityScore()
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
    }

    public static generateAbilityScore(): number {
        let dice = dicePool(4).sort().reverse();
        dice.pop();
        return sum(dice);
    }
  
    public static getModifierFor(abilityValue: number): number {
      if(abilityValue < 3) {
        throw new Error('Ability scores must be at least 3');
        }

        else if(abilityValue > 18) {
            throw new Error('Ability scores can be at most 18');
        }

        return Math.floor((abilityValue - 10) / 2);
    }
}
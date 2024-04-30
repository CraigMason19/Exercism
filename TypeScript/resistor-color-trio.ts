const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export class ResistorColorTrio {
    readonly colors: string[];

    constructor(colorsArr: string[]) {
        this.colors = colorsArr.map(col => col.toLowerCase());
    }
  
    get label(): string {
        let indices = [COLORS.indexOf(this.colors[0]), 
                       COLORS.indexOf(this.colors[1]), 
                       COLORS.indexOf(this.colors[2])];
        
        if(indices.includes(-1)) {
            throw new Error("invalid color");
        }

        // 'Pretify' the label
        let n = Number(String(indices[0]) + String(indices[1]) + '0'.repeat(indices[2]));
        let numString = "";

        if (n >= 1e9) {
            numString = `${(n / 1e9).toFixed(0)} gigaohms`;
        } else if (n >= 1e6) {
            numString = `${(n / 1e6).toFixed(0)} megaohms`;
        } else if (n >= 1e3) {
            numString = `${(n / 1e3).toFixed(0)} kiloohms`;
        } else {
            numString = `${n.toString()} ohms`;
        }

        return numString;  
    }
}

export function decodedResistorValue(colors: string[]): string {
    let resistor = new ResistorColorTrio(colors);
    return resistor.label;
}

let resistors = [
                 ["orange", "orange", "black"],
                 ['Yellow', 'violet', 'yellow'],
                 ['red', 'black', 'red'],
                 ['white', 'white', 'white'],
                //  ['yellow', 'purple', 'black'], // error test
]

resistors.forEach(r => {
    let value = decodedResistorValue(r);
    console.log(r, value);
});
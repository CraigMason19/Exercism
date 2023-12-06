const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

class ResistorColorTrio {
    constructor(colors) {
        this.colors = colors.map(col => col.toLowerCase());
    }
  
    get label() {
        let indices = [COLORS.indexOf(this.colors[0]), 
                       COLORS.indexOf(this.colors[1]), 
                       COLORS.indexOf(this.colors[2])];
        
        if(indices.includes(-1)) {
            throw new Error("invalid color");
        }

        // 'Pretify' the label
        let numString = String(indices[0]) + String(indices[1]) + '0'.repeat(indices[2]);

        if(numString.slice(-3) === '000') {
            numString = numString.replace('000', '') + ' kiloohms';
        }
        else {
            numString = numString + ' ohms';
        }
        
        return 'Resistor value: ' + numString;  
    }
}

resistors = [["orange", "orange", "black"],
             ['Yellow', 'violet', 'yellow'],
            //  ['yellow', 'purple', 'black'], // error test
            ['red', 'black', 'red'],
]

resistors.forEach(r => {
    rct = new ResistorColorTrio(r);
    console.log(rct, rct.label);
});
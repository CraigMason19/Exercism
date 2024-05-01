const longestArray = (array: string[]): number => {
    return Math.max(...array.map(e => e.length));
}

const trimExcess = (array: string[]): string[] => {
    while(array[array.length - 1] === undefined) {
        array.pop();
    }
    
    return array;
};

export const transpose = (array: string[]): string[] => {
    let lines = []

    for(let i = 0; i < longestArray(array); i++) {
    
        let line = [];

        for(let j = 0; j < array.length; j++) {
            let v = array[j][i];

            // Index not found will return undefined
            line.push(v);
        }

        // Remove the trailing undefined characters, replace undefined characters inside the string with a space
        line = trimExcess(line).map(v => v === undefined ? " " : v);
        lines.push(line.join(""));   
    }

    return lines;
};

const input = [
    'The longest line.',
    'A long line.',
    'A longer line.',
    'A line.',
];

transpose(input).forEach(element => {
    console.log(`${element}`);
});
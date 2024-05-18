const imports = require("./helper/grid");

class WordSearch {
    constructor(input) {
        this.grid = imports.Grid.fromData(input.map(x => x.split('')));
    }
    find(words) {
        const results = {};

        // Search each letter in the grid for each language in the list
        this.grid.forEach((value, row, col) => {
            words.forEach(language => {
                language = language.toLowerCase();

                // All directions longer or equal to word
                let lines = this.grid.cardinalsAndOrdinals(row, col).filter(x => x.values.length >= language.length);
                lines.forEach(line => {
                    let potential = line.values.join('').slice(0, language.length);
                
                    if (language === potential) {
                        let offset = imports.Offsets[line.direction];
                        let endRow = row + (offset.x * (language.length - 1));
                        let endCol = col + (offset.y * (language.length - 1));

                        results[language] = {
                            start: [row + 1, col + 1],
                            end: [endRow + 1, endCol + 1]
                        };

                        return;
                    }
                });
            });
        });

        // Sort the keys of the object based on the order array
        const sortedKeys = Object.keys(results).sort((a, b) => {
            return words.indexOf(a) - words.indexOf(b);
        });

        // Create a new object with sorted keys
        const sortedData = {};
        sortedKeys.forEach(key => {
            sortedData[key] = results[key];
        });

        return sortedData;
    }

    toString() {
        return this.grid.toString();
    }
}

const input = [
    'jefblpepre',
    'camdcimgtc',
    'oivokprjsm',
    'pbwasqroua',
    'rixilelhrs',
    'wolcqlirpc',
    'screeaumgr',
    'alxhpburyi',
    'jalaycalmp',
    'clojurermt',
];

let ws = new WordSearch(input);
let languages = ['clojure', 'elixir', 'ecmascript', 'rust', 'java'];

console.log(ws.toString());
console.log(ws.find(languages));
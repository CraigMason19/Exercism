const glyphs = {};

glyphs[JSON.stringify([" _ ", 
                       "| |", 
                       "|_|"])] = 0;

glyphs[JSON.stringify(["   ", 
                       "  |", 
                       "  |"])] = 1;

glyphs[JSON.stringify([" _ ", 
                       " _|", 
                       "|_ "])] = 2;

glyphs[JSON.stringify([" _ ", 
                       " _|", 
                       " _|"])] = 3;

glyphs[JSON.stringify(["   ", 
                       "|_|", 
                       "  |"])] = 4;

glyphs[JSON.stringify([" _ ", 
                       "|_ ", 
                       " _|"])] = 5;

glyphs[JSON.stringify([" _ ", 
                       "|_ ", 
                       "|_|"])] = 6;

glyphs[JSON.stringify([" _ ", 
                       "  |", 
                       "  |"])] = 7;

glyphs[JSON.stringify([" _ ", 
                       "|_|", 
                       "|_|"])] = 8;

glyphs[JSON.stringify([" _ ", 
                       "|_|", 
                       " _|"])] = 9;

function glyphToValue(glyph) {
    const glyphStr = JSON.stringify(glyph);
    return (glyphs[glyphStr] !== undefined) ? glyphs[glyphStr] : "?";
}

function mergeEveryThirdRow(strArr) {
    for (let i = 1; i < strArr.length / 3; i++) {
        const startIndex = i * 3;
        strArr[0] = strArr[0].concat(strArr[startIndex]);
        strArr[1] = strArr[1].concat(strArr[startIndex + 1]);
        strArr[2] = strArr[2].concat(strArr[startIndex + 2]);
    }

    return strArr.slice(0, 3);
}

function convert(str) {
    let lines = str.split("\n").filter((_, index) => (index + 1) % 4 !== 0);
    let multipleLines = (lines.length > 3);

    if (multipleLines) {
        lines = mergeEveryThirdRow(lines);
    }

    // Now go through each glyph, each glyph is made of a array of substrings 
    let result = "";

    for (let i = 0; i < lines[0].length / 3; i++) {
        let glyph = [];

        for (let line of lines) {
            const startIndex = i * 3;
            glyph.push(line.substring(startIndex, startIndex + 3));
        }

        result += glyphToValue(glyph);
    }

    return multipleLines ? Number(result).toLocaleString() : result;
}
exports.convert = convert;

const garble = '       _     _           _ \n' +
    '  |  || |  || |     || || |\n' +
    '  |  | _|  ||_|  |  ||_||_|\n' +
    '                           ';

const OneToNine = "    _  _     _  _  _  _  _  _ \n" +
    "  | _| _||_||_ |_   ||_||_|| |\n" +
    "  ||_  _|  | _||_|  ||_| _||_|\n" +
    "                              ";

const multiple = '    _  _ \n' +
    '  | _| _|\n' +
    '  ||_  _|\n' +
    '         \n' +
    '    _  _ \n' +
    '|_||_ |_ \n' +
    '  | _||_|\n' +
    '         \n' +
    ' _  _  _ \n' +
    '  ||_||_|\n' +
    '  ||_| _|\n' +
    '         ';

console.log(convert(garble));
console.log(convert(OneToNine));
console.log(convert(multiple));
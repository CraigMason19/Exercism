const imports = require("./helper/letters");

function mirrorLine(line, mirrorChar) {
    return `${line}${mirrorChar}${line.split("").reverse().join("")}`;
}

function makeDiamond(character) {
    let letterIndex = (0, imports.positionFromLetter)(character);
    let emptyChar = ' ';

    let lines = [mirrorLine(`${emptyChar.repeat(letterIndex - 1)}`, "A")];

    for (let i = 1; i < letterIndex; i++) {
        let str = `${emptyChar.repeat(letterIndex - 1 - i)}${(0, imports.letterFromIndex)(i, true)}`.padEnd(letterIndex - 1, emptyChar);
        lines.push(mirrorLine(str, emptyChar));
    }

    // Construct the bottom of the Diamond
    let reversed = lines.slice().reverse();
    for (let i = 1; i < reversed.length; i++) {
        lines.push(reversed[i]);
    }

    return lines.join("\n") + "\n";
}
exports.makeDiamond = makeDiamond;

console.log(makeDiamond("E"));
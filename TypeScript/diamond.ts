import { positionFromLetter, letterFromIndex } from "./helper/letters";

function mirrorLine(line: string, mirrorChar: string): string  {
    return `${line}${mirrorChar}${line.split("").reverse().join("")}`;
}

export function makeDiamond(character: string): string { 
    let letterIndex = positionFromLetter(character);
    let emptyChar = ' ';
  
    let lines = [mirrorLine(`${emptyChar.repeat(letterIndex-1)}`, "A")];
  
    for (let i = 1; i < letterIndex; i++) {
      let str = `${emptyChar.repeat(letterIndex-1-i)}${letterFromIndex(i, true)}`.padEnd(letterIndex-1, emptyChar);
      lines.push(mirrorLine(str, emptyChar));
    }
   
    // Construct the bottom of the Diamond
    lines = [...lines].concat([...lines].reverse().slice(1));
    
    return lines.join("\n") + "\n";
}

console.log(makeDiamond("E"));
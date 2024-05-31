export function encode(input: string): string {
    let output = "";
        
    let matches = input.match(/(.)\1*/g);

    if(matches !== null) {
        matches.forEach(match => {
            output += (match.length === 1) ? match[0] : match.length + match[0];
        });
    }
     
    return output;
}
  
export function decode(input: string): string {
    let output = "";
        
    let matches = input.match(/(\d+.|.)\1*/g);

    if(matches !== null) {
        matches.forEach(match => {
            if(match.length === 1) {
                output += match;
            }
            else
            {
                // The end of the string is a letter and everything else is a number
                // 22B for example
                let repetition = Number(match.slice(0, -1));
                let character = match[match.length-1];

                output += character.repeat(repetition);
            }
        });
    }

    return output;
} 

let plainStrings = [
    "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB",
    "  hsqq qww  ",
    "AABCCCDEEEE",
    ];

plainStrings.forEach(ps => {
    console.log(`\nOriginal: ${ps}`);

    var encoded = encode(ps);
    var decoded = decode(encoded);

    console.log(`encoded: ${encoded}`);
    console.log(`decoded: ${decoded}`);
});
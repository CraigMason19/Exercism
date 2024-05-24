export function verse(index: number): string {
    if(index === 0) {
        return "No more bottles of beer on the wall, no more bottles of beer.\n" +
               "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    else if(index === 1) {
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
               "Take it down and pass it around, no more bottles of beer on the wall.\n";
    }

    let bottlesBelow = (index-1 === 1) ? "1 bottle" : `${index-1} bottles`;
    
    return `${index} bottles of beer on the wall, ${index} bottles of beer.\n` +
           `Take one down and pass it around, ${bottlesBelow} of beer on the wall.\n`;
}

export function sing(
    initialBottlesCount?: number,
    takeDownCount?: number
    ): string {

    if(initialBottlesCount === undefined && takeDownCount === undefined) {
        initialBottlesCount = 99;
        takeDownCount = 0;
    }

    if(takeDownCount === undefined) {
        takeDownCount = 0;
    }

    let output: string[] = [];

    // Won't be null
    for(let i = initialBottlesCount!; i >= takeDownCount!; i--) {
        output.push(verse(i));
    }

    return output.join("\n");
}
  
// console.log(sing(8,6));

// console.log(sing(5));

console.log(sing());
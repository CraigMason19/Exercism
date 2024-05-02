export const square = (squareNum: number): BigInt => {
    if(squareNum < 1 || squareNum > 64) {
        throw new Error("Invalid square");
    }

    if(squareNum === 1) {
        return 1n;
    }
    
    return 2n ** BigInt(squareNum - 1);
}
  
export const total = (): BigInt  => {
    return 2n ** 64n - 1n
}
  
for(let i = 1; i < 65; i++) {
    console.log(`${i} -> ${square(i)}`);
}

console.log(total());
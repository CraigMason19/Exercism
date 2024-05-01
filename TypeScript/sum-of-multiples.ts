function multiples(n: number, limit: number): number[] {
    let output = [];

    for (let i = n; i < limit; i++) {
        if(i % n == 0) {
            output.push(i);
        }
    }

    return output;
}

export const sum = (items: number[], levelNum: number): number => {
    let s = new Set<number>();
    
    items.forEach(item => {
        let nums = multiples(item, levelNum);
        nums.forEach(n => s.add(n)); 
    });

    return Array.from(s).reduce((a, b) => a + b, 0);
};
  
console.log(sum([3, 5], 20));      // 78
console.log(sum([43, 47], 10000)); // 2203160
console.log(sum([3, 5], 1));       // 0
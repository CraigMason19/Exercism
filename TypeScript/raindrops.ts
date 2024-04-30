const hasFactor = (n: number, factor: number): boolean => {
    return n % factor === 0;
}

export const convert = (n: number): string => {
    let drops = "";

    if (hasFactor(n, 3)) {
        drops += "Pling"
    }
    if (hasFactor(n, 5)) {
        drops += "Plang"
    }    
    if (hasFactor(n, 7)) {
        drops += "Plong";
    }
    
    return (drops === "") ? n.toString() : drops;
}

let arr = [28, 30, 34]
arr.forEach(element => {
    console.log(element, convert(element));
});

// Community solution
function convert2(n: number) : string {
    const pling = n % 3 === 0 ? "Pling" : "";
    const plang = n % 5 === 0 ? "Plang" : "";
    const plong = n % 7 === 0 ? "Plong" : "";
    return pling + plang + plong || `${n}`;
}

[28, 30, 34].forEach(element => {
    console.log(element, convert2(element));
});
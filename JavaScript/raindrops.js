const hasFactor = (number, factor) => {
    return number % factor === 0;
}

const convert = (number) => {
    let drops = "";

    if (hasFactor(number, 3)) {
        drops += "Pling"
    }
    if (hasFactor(number, 5)) {
        drops += "Plang"
    }    
    if (hasFactor(number, 7)) {
        drops += "Plong";
    }
    
    return (drops === "") ? number.toString() : drops;
}

let arr = [28, 30, 34]
arr.forEach(element => {
    console.log(element, convert(element));
});


// Community solution
function convert2(n) {
    const pling = n % 3 === 0 ? "Pling" : "";
    const plang = n % 5 === 0 ? "Plang" : "";
    const plong = n % 7 === 0 ? "Plong" : "";
    return pling + plang + plong || `${n}`;
}

[28, 30, 34].forEach(element => {
    console.log(element, convert2(element));
});
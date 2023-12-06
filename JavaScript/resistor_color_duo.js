const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

const decodedValue = (colorArray) => {
    let a = COLORS.indexOf(colorArray[0]);
    let b = COLORS.indexOf(colorArray[1]);
    
    return Number(String(a) + String(b));  
};

console.log(decodedValue(['blue', 'grey'])); // 68
console.log(decodedValue(['yellow', 'violet'])); // 47
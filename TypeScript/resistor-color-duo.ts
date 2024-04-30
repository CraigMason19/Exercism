const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const decodedValue = (colorArray: string[]): number => {
    let a = COLORS.indexOf(colorArray[0]);
    let b = COLORS.indexOf(colorArray[1]);
    
    return Number(String(a) + String(b));  
};

console.log(decodedValue(['blue', 'grey'])); // 68
console.log(decodedValue(['yellow', 'violet'])); // 47
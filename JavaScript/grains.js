const pow = (base, exponent) => BigInt(base) ** BigInt(exponent);

const square = (n) => {
    if(n <= 0 || n > 64) {
        throw new Error('square must be between 1 and 64');
    }
    
    return pow(2, n-1);
}
   
const total = () => {
     let grains = BigInt(1);
 
     for(let i = 2; i < 64+1; i++) {
         grains += square(i);
     } 

     return grains;
 }

console.log(square(64));
console.log(total());
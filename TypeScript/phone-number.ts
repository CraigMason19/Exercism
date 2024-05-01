export const clean = (nStr: string = "") => {

    if(nStr === undefined || nStr.length === 0) {
      throw new Error("Invalid phone number");
    }
   
    const charRegex = /[a-zA-Z]/g; 
    
    if(charRegex.test(nStr)) {
      throw Error('Letters not permitted');
    }
  
    const punctuationRegex = /[@:!]/g; 
  
    if(punctuationRegex.test(nStr)) {
      throw Error('Punctuations not permitted');
    }
      
    const regex = /[+]?\d{3,}/g;
    let result = nStr.match(regex)!.join('');
  
    
    // Length
    if (result.length > 11) {
      throw Error('More than 11 digits');
    }
    
    else if (result.length < 10) {
      throw Error('Incorrect number of digits');
    }
    
    if (result.length === 11 && !(result[0] === '1')) {
      throw Error('11 digits must start with 1');
    }
  
    else if(result.length === 11) {
      return result.substring(1);
    }
    
    // Area Code
    if (result[0] === '0') {
      throw Error('Area code cannot start with zero');
    }
  
    else if (result[0] === '1') {
      throw Error('Area code cannot start with one');
    }
  
    // Exchange Code
    if (result[3] === '0') {
      throw Error('Exchange code cannot start with zero');
    }
    
    else if (result[3] === '1') {
      throw Error('Exchange code cannot start with one');
    }
    
    return result;
  };


const tests = [
    '(613)-995-0253',
    '613-995-0253',
    '1 613 995 0253',
    '613.995.0253',
];

console.log(tests.map(clean));
const stringDigits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function isValid(isbn: string): boolean {
  // Process input
  let cleanDigits = isbn.replaceAll('-', '').split(''); 

  if(cleanDigits.length != 10) {
    return false;
  }

  if(cleanDigits[cleanDigits.length-1] === 'X') {
    cleanDigits[cleanDigits.length-1] = '10';
  }
  
  // ISBM Verification
  let digits: number[] = cleanDigits
    .filter(char => stringDigits.includes(char) || char === '10')
    .map(char => Number(char));

  let result = 0;

  for(let i = 0; i < 10; i++) {
    result += (10-i) * digits[i];
  }
 
  return result % 11 === 0;
}

const isbns = [
  "3-598-21507-X",
  "3598P215088",
  "3-598-21508-8",
  "3-598-2X507-9",
];

isbns.forEach(code => 
{
  console.log(`${code} isValid? ${isValid(code)}`);
});
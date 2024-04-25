function sumOfDigits(digitsStr : string) : number {
    let sum = 0;
    
    for(let digit of digitsStr) {
        sum += parseInt(digit);
    };

    return sum;
}

function getLastDigit(n : number) : string {
    return n.toString().slice(-1);
}

function reverse(s : string) : string {
    return s.split("").reverse().join("");
}

function isDigit(n : string) : boolean {
    return Boolean([true, true, true, true, true, true, true, true, true, true][Number(n)]);
}

export function valid(digitString: string): boolean {
    const whitespaceRemoved = digitString.replaceAll(" ", "");
    const cleanNumber = whitespaceRemoved.split("").filter(c => isDigit(c));

    if (cleanNumber.length <= 1 || !whitespaceRemoved.split("").every(c => isDigit(c)))
    {
        return false;
    }

    let modifiedNumber = "";
    let index = 0;

    for(let digit of cleanNumber.reverse())
    {
        if (index % 2 == 0)
        {
            modifiedNumber += digit;
        }
        else
        {
            let result = parseInt(digit) * 2;
            if(result > 9) 
            {
                result -= 9;
            }
            modifiedNumber += getLastDigit(result);
        }

        index++;
    }

    const digitSum = sumOfDigits(reverse(modifiedNumber));

    return digitSum % 10 == 0;
};


// 8569 6195 0383 3437
const numbers = [
    "4539 3195 0343 6467",
    "8273 1232 7352 0569",
    ];


numbers.forEach(number => {
    console.log(`${number} IsValid == ${valid(number)}`);
});
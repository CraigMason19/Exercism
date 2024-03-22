function sumOfDigits(digitsStr) {
    let sum = 0;
    
    for(let digit of digitsStr) {
        sum += parseInt(digit);
    };

    return sum;
}

function getLastDigit(number) {
    return number.toString().slice(-1);
}

function reverse(s) {
    return s.split("").reverse().join("");
}

function isDigit(n) {
    return Boolean([true, true, true, true, true, true, true, true, true, true][n]);
}

const valid = (number) => {
    const whitespaceRemoved = number.replaceAll(" ", "");
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
const validOperations = ["plus", "minus", "multiply", "divide"];

var Type;
(function (Type) {
    Type[Type["Operand"] = 0] = "Operand";
    Type[Type["Operation"] = 1] = "Operation";
})(Type || (Type = {}));

function hasAlternatingTypes(arr) {
    if (arr.length === 0)
        return false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].type === arr[i - 1].type) {
            return false;
        }
    }

    return true;
}

function calculateResult(arr) {
    let result = parseInt(arr[0].value);

    for (let i = 1; i < arr.length - 1; i += 2) {
        switch (arr[i].value) {
            case "plus":
                result += parseInt(arr[i + 1].value);
                break;
            case "minus":
                result -= parseInt(arr[i + 1].value);
                break;
            case "multiply":
                result *= parseInt(arr[i + 1].value);
                break;
            case "divide":
                try {
                    result /= parseInt(arr[i + 1].value);
                }
                catch (error) {
                    throw new Error("Division by zero error");
                }
                break;
            default: {
                throw new Error("Unknown operation");
            }
        }
    }

    return result;
}

const answer = (input) => {
    let components = input.replace("?", "")
        .replaceAll("multiplied by", "multiply")
        .replaceAll("divided by", "divide")
        .toLowerCase().split(" ");

    if (components[0] !== "what") {
        throw new Error('Unknown operation');
    }

    // Remove the "What is"
    components.splice(0, 2);

    let data = [];
    for (let i = 0; i < components.length; i++) {

        let n = parseInt(components[i]);
        let t = Type.Operand;

        if (Number.isNaN(n)) {
            if (!validOperations.includes(components[i])) {
                throw new Error("Unknown operation");
            }

            t = Type.Operation;
        }

        data.push({ value: components[i], type: t });
    }

    if (!hasAlternatingTypes(data) || data.length === 0 || data.length % 2 === 0) {
        throw new Error("Syntax error");
    }

    return calculateResult(data);
};

const inputs = [
    "What is 5?",
    "What is 1 plus 1?",
    "What is 53 plus 2?",
    "What is -1 plus -10?",
    "What is 123 plus 45678?",
    "What is 4 minus -12?",
    "What is -3 multiplied by 25?",
    "What is 33 divided by -3?",
    "What is 1 plus 1 plus 1?",
    "What is 1 plus 5 minus -2?",
    "What is 20 minus 4 minus 13?",
    "What is 17 minus 6 plus 3?",
    "What is 2 multiplied by -2 multiplied by 3?",
    "What is -3 plus 7 multiplied by -2?",
    "What is -12 divided by 2 divided by -3?",
    // Error: Unknown operation
    "What is 52 cubed?",
    "Who is the President of the United States?",
    // Error: Syntax Error
    "What is 1 plus?",
    "What is?",
    "What is 1 plus plus 2?",
    "What is 1 plus 2 1?",
    "What is 1 2 plus?",
    "What is plus 1 2?",
];

inputs.forEach((input) => {
    try {
        let result = answer(input);
        console.log(`${input} -> ${result}`);
    }
    catch (error) {
        console.log(`${input} -> ${error}`);
    }
});
interface Letters {
    [key: string]: string[];
}

interface SingleLetter {
    [key: string]: number;
}

const oneToMany = {
    '1': ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    '2': ["D", "G"],
    '3': ["B", "C", "M", "P"],
    '4': ["F", "H", "V", "W", "Y"],
    '5': ["K"],
    '8': ["J", "X"],
    '10': ["Q", "Z"],
};

export const transform = (valueMap: Letters): SingleLetter => {
    let manyToOne: SingleLetter = {};

    for (const [key, value] of Object.entries(valueMap)) {
        value.forEach(letter => {
            manyToOne[letter.toLowerCase()] = Number(key);
        });
    }

    return manyToOne;
}

console.log(transform(oneToMany));
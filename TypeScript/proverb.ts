export function proverb(...consequences: string[]): string {
    if(consequences.length === 0) {
        return "";
    }

    let result = [];

    for(let i = 0; i < consequences.length-1; i++) 
    {
        result[i] = `For want of a ${consequences[i]} the ${consequences[i + 1]} was lost.`;
    }

    result[consequences.length - 1] = `And all for the want of a ${consequences[0]}.`;

    return result.join("\n");
}

console.log(proverb('nail', 'shoe', 'horse', 'rider', 'message', 'battle', 'kingdom'));
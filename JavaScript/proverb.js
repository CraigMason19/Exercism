const proverb = (...args) => {
    let result = [];
    let qualifier = undefined;
    let length = args.length;

    if(typeof args[args.length-1] === 'object') {
        qualifier = args[args.length-1].qualifier;
        length--;
    }

    for(let i = 0; i < length-1; i++) 
    {
        result[i] = `For want of a ${args[i]} the ${args[i + 1]} was lost.`;
    }

    result[length - 1] = (qualifier === undefined)
        ? `And all for the want of a ${args[0]}.` 
        : `And all for the want of a ${qualifier} ${args[0]}.`;

    return result.join("\n");
}

console.log(proverb('nail', 'shoe', 'horse', 'rider', 'message', 'battle', 'kingdom'));

console.log("");

console.log(proverb('nail', 'shoe', 'horse', 'rider', 'message', 'battle', 'kingdom', {qualifier:"horseshoe"}));
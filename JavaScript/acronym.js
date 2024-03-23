const phrases = [
    "As Soon As Possible",
    "Liquid-crystal display",
    "Thank George It's Friday!",
    "Something - I made up from thin air",
    "Halley's Comet",
];

const parse = (phrase) => {
    const regex = new RegExp(/([a-zA-Z])\w+|[A-Z]/g);
    let result = "";

    [...phrase.matchAll(regex)].forEach(p => {
        result += p[0][0];
    });
    
    return result.toUpperCase();
}

phrases.forEach(p => {
    console.log(`${p} -> ${parse(p)}`);
});
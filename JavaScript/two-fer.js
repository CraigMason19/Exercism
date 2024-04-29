function twoFer(name) {
    if (name === "" || name === undefined) {
        return 'One for you, one for me.';
    }
    return `One for ${name}, one for me.`;
}

const names = [
    'Alice',
    'Bob',
    ''
];

names.forEach(name => {
    console.log(`${name} => ${twoFer(name)}`);
});
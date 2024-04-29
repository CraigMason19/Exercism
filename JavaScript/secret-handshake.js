const ACTIONS = ["jump", "close your eyes", "double blink", "wink"];
const CODE_LENGTH = 5;

const toBinary = (n) => (n >>> 0).toString(2).padStart(CODE_LENGTH, '0');

function commands(n) {
    let actions = [];
    const b = toBinary(n);

    for (let i = 1; i < CODE_LENGTH; i++) {
        if (b[i] === '1') {
            actions.push(ACTIONS[i - 1]);
        }
    }

    return (b[0] === '1') ? actions : actions.reverse();
}

const codes = [
    1,
    9,
    23,
    31,
];

codes.forEach(code => {
    console.log(commands(code));
});
// 00001 = wink
// 00010 = double blink
// 00100 = close your eyes
// 01000 = jump
// 10000 = Reverse the order of the operations in the secret handshake.

const ACTIONS: string[] = ["jump", "close your eyes", "double blink", "wink"]
const CODE_LENGTH = 5;

const toBinary = (n: number): string => (n >>> 0).toString(2).padStart(CODE_LENGTH, '0');

export function commands(n: number) {
    let actions: string[] = [];
    const b = toBinary(n);

    for(let i = 1; i < CODE_LENGTH; i++) {
        if(b[i] === '1') {
            actions.push(ACTIONS[i-1]);
        }
    }

    return (b[0] === '1') ? actions : actions.reverse();
}

const codes: number[] = [
    1,
    9,
    23,
    31,
];

codes.forEach(code => {
    console.log(commands(code));
});


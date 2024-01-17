const printRails = (rails) => {
    rails.forEach(rail => {
        console.log(rail.join(''));
    });
};

const createRails = (railSize, messageLen) => { 
    let rails = [];

    for(let i = 0; i < railSize; i++) {
        rails.push(
            new Array(messageLen).fill('-')
        );
    }

    return rails;
};

function* cycleRailIndex(railSize) {
    while(true) {
        // e.g. 0 1 2 3 
        for(let i = 0; i < railSize; i++) {
            yield i;
        }
        // e.g. -1 to make 0 based, -1 again to make 'bouncy'. No duplicates or 0's
        // 2 1 
        for(let i = railSize-1-1; i > 0; i--) {
            yield i;
        }
    }
}

const encode = (message, railSize) => {
    message = message.toUpperCase().replaceAll(' ', '');

    const rails = createRails(railSize, message.length);
    const generator = cycleRailIndex(railSize);

    // Write a zigzag to the rails
    for(let i = 0; i < message.length; i++) {
        let index = generator.next().value;
        rails[index][i] = message[i];
    }
   
    // Read line by line
    let encoded = '';
    
    rails.forEach(rail => {
        encoded += rail.filter(x => x != '-').join("");
    });
    
    return encoded;
};
  
const decode = (message, railSize) => {
    message = message.toUpperCase().replaceAll(' ', '');

    const rails = createRails(railSize, message.length);
    let generator = cycleRailIndex(railSize);

    // Fill in a zigzag shape with 'x's
    for(let i = 0; i < message.length; i++) {
        let index = generator.next().value;
        rails[index][i] = 'x';
    }

    // Write the message to anywhere marked with an 'x'
    let counter = 0;
    
    for(let i = 0; i < rails.length; i++) {
        for(let j = 0; j < rails[i].length; j++) {
            if(rails[i][j] == 'x') {
                rails[i][j] = message[counter++];
            }
        }
    }

    // Now we just need to read the zigzag
    let decoded = '';
    generator = cycleRailIndex(railSize); // Reset

    for(let i = 0; i < message.length; i++) {
        let index = generator.next().value;
        decoded += rails[index][i];
    }
    
    return decoded;
};  


const secret = "WE ARE DISCOVERED FLEE AT ONCE";

const encoded = encode(secret, 3);
console.log("encoded:", encoded);

const decoded = decode(encoded, 3);
console.log("decoded:", decoded);
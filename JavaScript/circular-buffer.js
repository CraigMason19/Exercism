const advanceIndex = (index, length) => {
  return (index + 1) % length; 
};

class CircularBuffer {
  constructor(length) {
    this.data = new Array(length).fill(undefined);
    this.usedSpaces = 0;
    this.index = { write:0, read:0 };
  }

  get count() {
    return this.usedSpaces;
  }

  write(data) {
    if(this.usedSpaces === this.data.length) {
      throw new BufferFullError();
    }

    this.data[this.index.write] = data;
    this.index.write = advanceIndex(this.index.write, this.data.length);
    this.usedSpaces++;
  }

  read() {
    if(this.usedSpaces === 0) {
      throw new BufferEmptyError();
    }

    let value = this.data[this.index.read];

    if(value != undefined) {
      this.data[this.index.read] = undefined;
      this.usedSpaces--;
    }

    this.index.read = advanceIndex(this.index.read, this.data.length);

    return value;
  }

  forceWrite(data) {
    if(this.data[this.index.write] === undefined) {
      this.write(data);
    }
    else {
      this.data[this.index.read] = data;
      this.index.read = advanceIndex(this.index.read, this.data.length);
    }
  }

  clear() {
    this.data = new Array(this.data.length).fill(undefined);
    this.usedSpaces = 0;
    this.index = { write:0, read:0 };
  }
}

// export default CircularBuffer; // For Exercism

class BufferFullError extends Error {
  constructor() {
    throw new Error("Can't write to a full buffer");
  }
}
  
class BufferEmptyError extends Error {
  constructor() {
    throw new Error("Can't read from an empty buffer");
  }
}

const buffer = new CircularBuffer(3);
buffer.write('1');
buffer.write('2');
buffer.write('3');

console.log(buffer.read()) // '1';

buffer.write('4');
buffer.forceWrite('5');

console.log(buffer.read()) // '3';
console.log(buffer.read()) // '4';
console.log(buffer.read()) // '5';

console.log(buffer.count) // '0;'
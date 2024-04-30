const advanceIndex = (index: number, length: number): number => {
  return (index + 1) % length; 
};

interface Indicies {
  write: number;
  read: number;
}

export class CircularBuffer<T> {
  private data: (T|undefined)[];
  private usedSpaces: number;
  private index: Indicies;

  constructor(length: number) {
    this.data = new Array(length).fill(undefined);
    this.usedSpaces = 0;
    this.index = { write:0, read:0 };
  }

  get count(): number {
    return this.usedSpaces;
  }

  write(data: T): void{
    if(this.usedSpaces === this.data.length) {
      throw new BufferFullError();
    }

    this.data[this.index.write] = data;
    this.index.write = advanceIndex(this.index.write, this.data.length);
    this.usedSpaces++;
  }

  read(): (T|undefined) {
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

  forceWrite(data: T): void {
    if(this.data[this.index.write] === undefined) {
      this.write(data);
    }
    else {
      this.data[this.index.read] = data;
      this.index.read = advanceIndex(this.index.read, this.data.length);
    }
  }

  clear(): void {
    this.data = new Array(this.data.length).fill(undefined);
    this.usedSpaces = 0;
    this.index = { write:0, read:0 };
  }
}
 
export class BufferFullError extends Error {
  constructor() {
    super("Can't write to a full buffer");
  }
}
  
export class BufferEmptyError extends Error {
  constructor() {
    super("Can't read from an empty buffer");
  }
}

const buffer = new CircularBuffer<string>(3);
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
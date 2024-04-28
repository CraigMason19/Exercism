export class Stack<T> { 
  private items: T[];

  constructor() { 
      this.items = []; 
  }

  push(element: T): void { 
    this.items.push(element); 
  } 

  pop(): T { 
    if (this.items.length == 0) {
      throw new Error("Can't pop from an empty stack");
    }
    
    return this.items.pop()!; // Wont be null as that will caught by guard clause above
  } 

  isEmpty(): boolean{ 
    return this.items.length == 0; 
  } 

  peek(): T { 
    return this.items[this.items.length - 1]; 
  } 

  count(): number {
    return this.items.length;
  }
}
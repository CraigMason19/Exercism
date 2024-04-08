class Stack { 
  constructor() { 
      this.items = []; 
  }

  push(element) { 
    this.items.push(element); 
  } 

  // Returns undefined if the stack is empty
  pop() { 
    // if (this.items.length == 0) {
    //   throw new Error("Can't pop from empty stack");
    // }
    
    return this.items.pop(); 
  } 

  isEmpty(){ 
    return this.items.length == 0; 
  } 

  peek() { 
    return this.items[this.items.length - 1]; 
  } 

  count() {
    return this.items.length;
  }
}

module.exports = { Stack };
class BankAccount {
    constructor() {
      this.amount = 0;
      this.isClosed = true;
    }
  
    open() {   
      if(this.isClosed == false) {
        throw new ValueError();
      }
      
      this.amount = 0;
      this.isClosed = false;
    }
  
    close() {
      if(this.isClosed) {
        throw new ValueError();
      }
  
      this.isClosed = true;
    }
  
    deposit(amount) {
      if(this.isClosed) {
        throw new ValueError();
      }
      else if(amount < 0) {
        throw new ValueError();
      }    

      this.amount += amount;
    }
  
    withdraw(amount) {
      if(this.isClosed) {
        throw new ValueError();
      }
      else if(amount <= 0) {
        throw new ValueError();
      }   
      else if((this.amount - amount) < 0) {
        throw new ValueError();
      }   

      this.amount -= amount;
    }
  
    get balance() {
      if(this.isClosed) {
        throw new ValueError();
      }
      
      return this.amount;
    }
  }
  
class ValueError extends Error {
    constructor() {
      super('Bank account error');
    }
}

const account = new BankAccount();
account.open();
account.deposit(100);
account.withdraw(80);

console.log(account);
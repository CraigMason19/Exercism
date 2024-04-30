const isPrime = (num: number): boolean => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}

export class DiffieHellman {
  private p: number;
  private g: number;

  constructor(p: number, g: number) {
    if(p <= 0 || g <= 0) {
      throw new Error("Parameters must be greater than 0");
    }

    else if(!isPrime(p) || !isPrime(g)) {
      throw new Error("Parameters must be Prime");
    }

    this.p = p;
    this.g = g;
  }
  
  getPublicKey(privateKey: number): number {
    if(privateKey <= 1) {
      throw new Error("privateKey must be greater than 1");
    }

    if(privateKey >= this.p) {
      throw new Error("privateKey must be greater than p");
    }

    return Math.pow(this.g, privateKey) % this.p; 
  }

  getSecret(theirPublicKey: number, myPrivateKey: number): number {
    if(theirPublicKey <= 0 || myPrivateKey <= 0) {
      throw new Error("Keys must be greater than 0");
    }

    return Math.pow(theirPublicKey, myPrivateKey) % this.p;
  }
}

const diffieHellman = new DiffieHellman(23, 5);

const alicePrivateKey = 6;
const bobPrivateKey = 15;

const alicePublicKey = diffieHellman.getPublicKey(alicePrivateKey);
const bobPublicKey = diffieHellman.getPublicKey(bobPrivateKey);

const secretA = diffieHellman.getSecret(bobPublicKey, alicePrivateKey);
const secretB = diffieHellman.getSecret(alicePublicKey, bobPrivateKey);

console.log(secretA, secretB);
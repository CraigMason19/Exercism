const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const USED_NAMES = new Set();

const randomLetter = () => {
  return ALPHABET[Math.floor(Math.random() * 26)];
}

const randomNumber = () => {
  return Math.floor(Math.random() * 10);
}

const generateNewName = () => {
  while (true) {
    let name = randomLetter() + randomLetter() + String(randomNumber()) + String(randomNumber()) + String(randomNumber());
  
    if(!USED_NAMES.has(name)) {
      USED_NAMES.add(name);
      return name;
    }
  }
}

class Robot {
  constructor() {
      this._name = generateNewName();
  }

  reset() {
      this._name = generateNewName();
  }

  get name() {
    return this._name;
  }
}

Robot.releaseNames = () => { 
}
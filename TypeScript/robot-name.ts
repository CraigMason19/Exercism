const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const USED_NAMES = new Set();

const randomLetter = (): string => {
  return ALPHABET[Math.floor(Math.random() * 26)];
}

const randomNumber = (): number => {
  return Math.floor(Math.random() * 10);
}

const generateNewName = (): string => {
  while (true) {
    let name = randomLetter() + randomLetter() + String(randomNumber()) + String(randomNumber()) + String(randomNumber());
  
    if(!USED_NAMES.has(name)) {
      USED_NAMES.add(name);
      return name;
    }
  }
}

export class Robot {
  private _name: string;

  constructor() {
      this._name = generateNewName();
  }

  get name() : string{
    return this._name;
  }

  resetName() : void{
    this._name = generateNewName();
  }

  public static releaseNames(): void {
     
  }
}
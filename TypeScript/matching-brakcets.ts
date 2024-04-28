import { Stack } from "./helper/stack";

const brackets = new Map();
brackets.set("[", "]");
brackets.set("{", "}");
brackets.set("(", ")");

const onlyBrackets = (str: string): string => {
  let b = [...brackets.keys()].concat([...brackets.values()]);
  return [...str].filter(c => b.includes(c)).join("");
}

export const isPaired = (expression: string): boolean => {
  if(expression === "") {
    return true;
  }

  let bracketsStack = new Stack<string>();
  let extraBrackets = "";

  for(let c of onlyBrackets(expression)) {
    if(brackets.has(c)) {
      bracketsStack.push(c);
      continue;
    }

    if (bracketsStack.count() > 0) {
        if (c === brackets.get(bracketsStack.peek())) {
            bracketsStack.pop();
            continue;
        }
    }

    extraBrackets += c;
  }

  return bracketsStack.count() === 0 && extraBrackets.length === 0;  
};

const inputs = [
  "{[)][]}",
  "}{",
  "",
  "(((185 + 223.85) * 15) - 543)/2",
  "[ ]",
  "{{",
  "{{]}",
  "[]{}()",
];

inputs.forEach(input => {
  console.log(`${input} -> Brackets match -> ${isPaired(input)}`)
});
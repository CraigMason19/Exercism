function removePunctuation(str: string): string {
    let punctuation: string[] = [".", "\n", "?", ":", ",", "!", "&", "@", "$", "%", "^", "&"];

    punctuation.forEach(x => {
        str = str.replaceAll(x, " ");
    });

    return str;
}

function clean(str: string): string {
    // Remove leading and trailing quotes if present
    str = str.replace(/^['"]|['"]$/g, '');

    return str.toLowerCase().trim()
}

export function count(str: string): Map<string, number>  {
    str = removePunctuation(str)
    let words: string[] = str.split(" ").map(x => clean(x)).filter(x => x != "");

    const counter = new Map<string, number>();

    for (let word of words) {
        const count = counter.get(word) || 0;
        counter.set(word, count + 1);
    }

    return counter;
}
  
const inputs: string[] = [
  "reserved words like constructor and toString ok?",
  " multiple   whitespaces",
  "First: don't laugh. Then: don't cry. You're getting it.",
  "go Go GO Stop stop",
    ",\n,one,\n ,two \n 'three'"
];

inputs.forEach(input => {
    console.log(count(input));
});
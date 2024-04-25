function removePunctuation(str) {
    let punctuation = [".", "\n", "?", ":", ",", "!", "&", "@", "$", "%", "^", "&"];

    punctuation.forEach(x => {
        str = str.replaceAll(x, " ");
    });

    return str;
}

function clean(str) {
    // Remove leading and trailing quotes if present
    str = str.replace(/^['"]|['"]$/g, '');
    return str.toLowerCase().trim();
}

function count(str) {
    str = removePunctuation(str);
    let words = str.split(" ").map(x => clean(x)).filter(x => x != "");

    const counter = {};

    for (const word of words) {
        counter[word] = (counter[word] || 0) + 1;
    }

    return counter;
}

const inputs = [
    "reserved words like constructor and toString ok?",
    " multiple   whitespaces",
    "First: don't laugh. Then: don't cry. You're getting it.",
    "go Go GO Stop stop",
    ",\n,one,\n ,two \n 'three'"
];

inputs.forEach(input => {
    console.log(count(input));
});
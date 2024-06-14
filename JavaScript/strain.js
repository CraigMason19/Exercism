function keep(arr, pred) {
    const kept = [];

    for (const item of arr) {
        if (pred(item)) {
            kept.push(item);
        }
    }

    return kept;
}

function discard(arr, pred) {
    const kept = [];

    for (const item of arr) {
        if (!pred(item)) {
            kept.push(item);
        }
    }
    
    return kept;
}

exports.keep = keep;
exports.discard = discard;

const keepFirstAndLast = keep([1, 2, 3], (e) => e % 2 === 1);
console.log(keepFirstAndLast); // [1, 3]

const discardFirstAndLast = discard([1, 2, 3], (e) => e % 2 === 1);
console.log(discardFirstAndLast); // [2]
export function keep<T>(arr: T[], pred: (item: T) => boolean): T[] {
    const kept: T[] = [];

    for (const item of arr) {
        if (pred(item)) {
            kept.push(item);
        }
    }

    return kept;
}

export function discard<T>(arr: T[], pred: (item: T) => boolean): T[] {
    const kept: T[] = [];

    for (const item of arr) {
        if (!pred(item)) {
            kept.push(item);
        }
    }

    return kept;
}


const keepFirstAndLast = keep<number>([1, 2, 3], (e: number) => e % 2 === 1);
console.log(keepFirstAndLast); // [1, 3]

const discardFirstAndLast = discard<number>([1, 2, 3], (e: number) => e % 2 === 1);
console.log(discardFirstAndLast); // [2]
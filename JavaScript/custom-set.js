function uniqueify(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

/**
 * Represents a custom set of numbers. Deliberately didn't use Set() because this is a learning exercise
 */
class CustomSet {
    constructor(data) {
        this.data = data === undefined ? [] : data.sort();
    }

    empty() {
        return this.data.length === 0;
    }

    contains(element) {
        return this.data.includes(element);
    }

    add(element) {
        let unique = uniqueify(this.data.concat(element));
        return new CustomSet(unique.sort());
    }

    subset(other) {
        for (const element of this.data) {
            if (!other.data.includes(element)) {
                return false;
            }
        }

        return true;
    }

    disjoint(other) {
        return this.intersection(other).data.length === 0;
    }

    eql(other) {
        if (this.data.length !== other.data.length) {
            return false;
        }

        let otherData = other.data.sort();

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] !== otherData[i]) {
                return false;
            }
        }

        return true;
    }

    union(other) {
        let unique = uniqueify(this.data.concat(other.data));
        return new CustomSet(unique.sort());
    }

    intersection(other) {
        let data = this.data.filter(element => {
            return other.contains(element) === true;
        });

        return new CustomSet(data.sort());
    }

    difference(other) {
        let data = this.data.filter(element => {
            return other.contains(element) === false;
        });

        return new CustomSet(data.sort());
    }
}

const equal = new CustomSet([1, 3]).eql(new CustomSet([3, 1]));
console.log(equal); // true

const union = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
console.log(union); // [1,2,3]

const difference = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
console.log(difference); // [1, 3]

const intersection = new CustomSet([1, 2, 3]).intersection(new CustomSet([4, 5, 6]));
console.log(intersection); // []

const disjoint = new CustomSet([1, 2, 3]).disjoint(new CustomSet([4, 5, 6]));
console.log(disjoint); // true

const subsetTrue = new CustomSet([1, 2, 3]).subset(new CustomSet([4, 1, 2, 3]));
console.log(subsetTrue); // true

const subsetFalse = new CustomSet([1, 2, 3]).subset(new CustomSet([4, 1, 3]));
console.log(subsetFalse); // false
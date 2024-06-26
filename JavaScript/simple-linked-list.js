class Element {
	constructor(value, next=null) {
		this.value = value;
		this.next = next;
	}

	// get value() {
	// 	return this._value;
	// }

	// get _next() {
	// 	return this._next;
	// }
}
exports.Element = Element;

class List {
	_head = null;
	_count = 0;

	constructor(arr=[]) {
		arr.forEach(x => {
			this.add(new Element(x));
		});
	}

	add(nextValue) {
        var newNode = nextValue;

        newNode.next = this._head;
        this._head = newNode;

        this._count++;
	}

	get length() {
		return this._count;
	}

	get head() {
		return this._head;
	}

	toArray() {
		var result = [];
        var current = this._head;

        while (current.next !== null)
        {
			result.push(current.value);
            current = current.next;
        }

		result.push(current.value);
        return result;
	}

    reverse() {
        let current = this._head;
        let prev = null;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this._head = prev;
		return this;
    }
}
exports.List = List;

const list = new List([1,2,3,4,5]);

console.log(list.toArray());
console.log(list.reverse().toArray());

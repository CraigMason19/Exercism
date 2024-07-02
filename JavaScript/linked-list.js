class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    // Add a node to the beginning of the list
    push(value) {
        const newNode = new Node(value);

        // List is empty
        if (this._head === null) {
            this._head = newNode;
            this._tail = newNode;
        }

        // Otherwise, insert the new node at the beginning
        else {
            newNode.next = this._head;
            this._head.prev = newNode;
            this._head = newNode;
        }
        this._count++;
    }

    // Remove and return the value from the beginning of the list
    pop() {
        if (this._head === null) {
            throw new Error("Cannot pop from an empty list");
        }

        const value = this._head.value;
        this._head = this._head.next;

        // If the list is not empty
        if (this._head) {
            this._head.prev = null;
        }
        else {
            this._tail = null;
        }

        this._count--;
        return value;
    }

    // Remove and return the value from the end of the list
    shift() {
        if (this._tail === null) {
            throw new Error("Cannot shift from an empty list");
        }

        const value = this._tail.value;
        this._tail = this._tail.prev; // Move the tail pointer to the previous node

        // If the list is not empty
        if (this._tail) {
            this._tail.next = null;
        }
        else {
            this._head = null;
        }

        this._count--;
        return value;
    }

    // Add a node to the end of the list
    unshift(value) {
        const newNode = new Node(value);

        // If the list is empty, set head and tail to the new node
        if (this._tail === null) {
            this._head = this._tail = newNode;
        }
        // Otherwise, insert the new node at the end
        else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;
        }

        this._count++;
    }

    // Delete the first node with the given value from the list
    delete(value) {
        let current = this._head;

        // Traverse the list to find the node with the given value
        while (current !== null) {
            if (current.value === value) {

                // Node to be deleted is the head node
                if (current === this._head) {
                    this._head = current.next;
                    // If list is not empty after deletion, update the new head's prev pointer
                    if (this._head) {
                        this._head.prev = null;
                    }
                    // If the list becomes empty, set the tail to null
                    else {
                        this._tail = null;
                    }
                }

                // Node to be deleted is the tail node
                else if (current === this._tail) {
                    this._tail = current.prev;
                    // If list is not empty after deletion, update the new tail's next pointer
                    if (this._tail) {
                        this._tail.next = null;
                    }
                    // If the list becomes empty, set the head to null
                    else {
                        this._head = null;
                    }
                }

                // Node to be deleted is in the middle
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                this._count--;
                return;
            }

            current = current.next;
        }
    }

    count() {
        return this._count;
    }

    // Make the LinkedList iterable using a generator
    *[Symbol.iterator]() {
        let current = this._head;

        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;

const list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

for (const value of list) {
    console.log(value); // 50, 40, 30, 20, 10
}
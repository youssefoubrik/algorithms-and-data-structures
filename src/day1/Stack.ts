import DoublyLinkedList from "./DoublyLinkedList";

export default class Stack<T> {
    private items: DoublyLinkedList<T>;

    get length(): number {
        return this.items.length;
    }
    constructor() {
        this.items = new DoublyLinkedList<T>();
    }

    push(item: T): void {
        this.items.append(item)
    }
    pop(): T | undefined {
        return this.items.removeAt(this.length - 1);
    }
    peek(): T | undefined {
        return this.items.getAt(this.length - 1)?.value;
    }
}
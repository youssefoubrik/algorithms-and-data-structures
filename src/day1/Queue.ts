import DoublyLinkedList from "./DoublyLinkedList";

export default class Queue<T> {
    private items: DoublyLinkedList<T>;
    constructor() {
        this.items = new DoublyLinkedList<T>();
    }
    get length(): number {
        return this.items.length;
    }
    enqueue(item: T): void {
        this.items.append(item);
    }
    deque(): T | undefined {
        return this.items.removeAt(0);
    }
    peek(): T | undefined {
        return this.items.getAt(0)?.value;
    }
}
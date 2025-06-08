export default class DoublyLinkedList<T> implements List<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node: ListNode<T> = { value: item }
        if (!this.head)
            this.tail = this.head = node;
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;

    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            return;
        }
        if (idx == 0) {
            return this.prepend(item);
        }
        else if (idx == this.length) {
            return this.append(item);
        }
        const curr = this.getAt(idx - 1) as ListNode<T>;
        const node: ListNode<T> = { value: item, prev: curr, next: curr.next }
        curr.next!.prev = node;
        curr.next = node;
        this.length++;
    }
    append(item: T): void {
        const node: ListNode<T> = { value: item };
        if (!this.tail) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        while (curr) {
            if (curr.value === item) break;
            curr = curr.next;
        }
        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const nodeAtIdx = this.getAt(idx);
        return this.removeNode(nodeAtIdx);
    }

    getAt(idx: number): ListNode<T> | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next
        }
        return curr;
    }
    private removeNode(node: ListNode<T> | undefined): T | undefined {
        if (!node) {
            return undefined;
        }
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        if (node === this.head) {
            this.head = node.next
        }
        if (node === this.tail) {
            this.tail = node.prev
        }
        this.length--;
        return node.value;
    }
}




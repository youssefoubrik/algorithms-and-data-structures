type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

function createNode<V>(value: V): Node<V> {
    return { value };
}
export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        if (capacity <= 0) {
            throw new Error("Capacity must be positive")
        }
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>()
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key)
        if (!node) {
            node = createNode(value)
            this.prepend(node)
            this.length++
            this.trimCache()
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        }
        else {
            node.value = value
            this.detach(node)
            this.prepend(node)
        }
    }
    get(key: K): V | undefined {
        const node = this.lookup.get(key);
        if (!node) {
            return undefined;
        }
        this.detach(node)
        this.prepend(node);
        return node.value;

    }
    private prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    private detach(node: Node<V>) {
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
        node.prev = undefined;
        node.next = undefined;
    }
    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }
        const tail = this.tail as Node<V>
        this.detach(tail)
        const key = this.reverseLookup.get(tail) as K
        this.lookup.delete(key)
        this.reverseLookup.delete(tail)
        this.length--
    }
}
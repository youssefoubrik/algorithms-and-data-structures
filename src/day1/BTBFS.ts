import { RingBuffer } from "./RingBuffer";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = new RingBuffer<BinaryNode<number> | null>();
    queue.enQueue(head);
    while (!queue.peek()) {
        const head = queue.deQueue() as BinaryNode<number>;
        if (head.value === needle) {
            return true;
        }
        if (head.left) queue.enQueue(head.left);
        if (head.right) queue.enQueue(head.right);
    }
    return false;
}
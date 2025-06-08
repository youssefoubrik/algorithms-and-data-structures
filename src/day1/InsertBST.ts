export default function insert(head: BinaryNode<number> | null, value: number): BinaryNode<number> {
    if (!head) {
        return { value, left: null, right: null };
    }
    if (value > head.value) {
        head.right = insert(head.right, value);
    }
    else {
        head.left = insert(head.left, value);
    }
    return head;
}

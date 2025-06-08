function helper(node: BinaryNode<number> | null, min: number, max: number): boolean {
    if (!node) {
        return true;
    }
    if (node.value > max || node.value < min) {
        return false;
    }
    return helper(node.right, node.value, max) && helper(node.left, min, node.value);
}
export default function isBST(root: BinaryNode<number> | null): boolean {
    return helper(root, -Infinity, +Infinity)
}

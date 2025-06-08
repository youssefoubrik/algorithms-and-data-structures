function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) {
        return path;
    }
    path.push(node.value)
    walk(node.left, path)
    walk(node.right, path)
    return path;

}
export default function pre_order_search(root: BinaryNode<number>): number[] {
    return walk(root, [])
}
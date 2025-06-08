function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) {
        return path;
    }
    walk(node.left, path)
    walk(node.right, path)
    path.push(node.value)
    return path;

}
export default function post_order_search(root: BinaryNode<number>): number[] {
    return walk(root, [])
}
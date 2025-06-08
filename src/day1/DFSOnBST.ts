export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
    if (head == null) {
        return false;
    }
    if (head.value == needle) {
        return true;
    }
    if (needle > head.value) {
        return dfs(head.right, needle)
    }
    return dfs(head.left, needle)
}
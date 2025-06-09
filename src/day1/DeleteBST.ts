export default function deleteBST(root: BinaryNode<number> | null, value: number): BinaryNode<number> | null {
    if (!root) {
        return null;
    }
    if (value > root.value) {
        root.right = deleteBST(root.right, value);
    }
    else if (value < root.value) {
        root.left = deleteBST(root.left, value);
    }
    else {
        if (!root.right) {
            return root.left;
        }
        if (!root.left) {
            return root.right;
        }
        const minNode = findMinNode(root.right);
        root.value = minNode.value;
        root.right = deleteBST(root.right, minNode.value);
    }
    return root;
}

function findMinNode(node: BinaryNode<number>) {
    while (node.left) {
        node = node.left;
    }
    return node;
}
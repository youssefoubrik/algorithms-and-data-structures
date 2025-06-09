import deleteBST from "@code/DeleteBST";
import insert from "@code/InsertBST";
import isBST from "@code/VerifyBST";

test("DeleteBST", function () {
    // Build test tree
    let root = null;
    const values = [20, 10, 30, 5, 15, 25, 35];

    for (const val of values) {
        root = insert(root, val);
    }

    // Test deleting a leaf node (5)
    root = deleteBST(root, 5);
    expect(root?.left?.left).toBe(null);
    expect(isBST(root)).toBe(true);

    // Test deleting a node with one child (30)
    root = deleteBST(root, 30);
    expect(root?.right?.value).toBe(35);
    expect(root?.right?.left?.value).toBe(25);
    expect(isBST(root)).toBe(true);

    // Test deleting a node with two children (10)
    root = deleteBST(root, 10);
    expect(root?.left?.value).toBe(15);
    expect(isBST(root)).toBe(true);

    // Test deleting root
    root = deleteBST(root, 20);
    expect(isBST(root)).toBe(true);

    // Test deleting from empty tree
    const emptyResult = deleteBST(null, 10);
    expect(emptyResult).toBe(null);
});

import insert from "@code/InsertBST";
import isBST from "@code/VerifyBST";

test("InsertBST", function () {
    // Test inserting into empty tree
    const emptyResult = insert(null, 10);
    expect(emptyResult.value).toBe(10);
    expect(emptyResult.left).toBe(null);
    expect(emptyResult.right).toBe(null);

    // Test building a tree with multiple insertions
    let root = null;
    const values = [20, 10, 30, 5, 15, 25, 35];

    for (const val of values) {
        root = insert(root, val);
    }

    // Verify tree structure and BST property
    expect(root?.value).toBe(20);
    expect(root?.left?.value).toBe(10);
    expect(root?.right?.value).toBe(30);
    expect(root?.left?.left?.value).toBe(5);
    expect(root?.left?.right?.value).toBe(15);
    expect(root?.right?.left?.value).toBe(25);
    expect(root?.right?.right?.value).toBe(35);

    // Verify BST properties are maintained
    expect(isBST(root)).toBe(true);

    // Test inserting duplicate value (should maintain BST property)
    root = insert(root, 10);
    expect(isBST(root)).toBe(true);
});

import isBST from "@code/VerifyBST";

function createNode(value: number, left: BinaryNode<number> | null = null, right: BinaryNode<number> | null = null): BinaryNode<number> {
    return { value, left, right };
}

test("VerifyBST", function () {
    // Test empty tree
    expect(isBST(null)).toBe(true);

    // Test single node
    const singleNode = createNode(10);
    expect(isBST(singleNode)).toBe(true);

    // Test valid BST
    //       10
    //      /  \
    //     5    15
    //    / \   / \
    //   3   7 12  20
    const validBST = createNode(10,
        createNode(5,
            createNode(3),
            createNode(7)
        ),
        createNode(15,
            createNode(12),
            createNode(20)
        )
    );
    expect(isBST(validBST)).toBe(true);

    // Test invalid BST - value in left subtree too large
    //       10
    //      /  \
    //     5    15
    //    / \   
    //   3   12  <- invalid: 12 > 10
    // const invalidLeft = createNode(10,
    //     createNode(5, 
    //         createNode(3), 
    //         createNode(12)  // Invalid: 12 > 10
    //     ),
    //     createNode(15)
    // );
    // expect(isBST(invalidLeft)).toBe(false);

    // Test invalid BST - value in right subtree too small
    //       10
    //      /  \
    //     5    15
    //         /  \
    //        7    20  <- invalid: 7 < 10
    // const invalidRight = createNode(10,
    //     createNode(5),
    //     createNode(15,
    //         createNode(7),  // Invalid: 7 < 10
    //         createNode(20)
    //     )
    // );
    // expect(isBST(invalidRight)).toBe(false);

    // Test BST with duplicate values
    //       10
    //      /  \
    //     5    15
    //    /     /
    //   5     15
    const duplicatesBST = createNode(10,
        createNode(5,
            createNode(5),
            null
        ),
        createNode(15,
            createNode(15),
            null
        )
    );
    expect(isBST(duplicatesBST)).toBe(true);
});

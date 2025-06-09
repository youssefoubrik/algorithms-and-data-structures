import Trie from "@code/Trie";

test("Trie", function () {
    const trie = new Trie();
    trie.insert("foo");
    trie.insert("fool");
    trie.insert("foolish");
    trie.insert("bar");

    // Search tests
    expect(trie.search("foo")).toBe(true);
    expect(trie.search("fool")).toBe(true);
    expect(trie.search("foolish")).toBe(true);
    expect(trie.search("bar")).toBe(true);
    expect(trie.search("baz")).toBe(false);
    expect(trie.search("fo")).toBe(false);

    // StartsWith tests
    expect(trie.startsWith("fo")).toBe(true);
    expect(trie.startsWith("foo")).toBe(true);
    expect(trie.startsWith("fool")).toBe(true);
    expect(trie.startsWith("ba")).toBe(true);
    expect(trie.startsWith("bar")).toBe(true);
    expect(trie.startsWith("baz")).toBe(false);
    expect(trie.startsWith("cat")).toBe(false);
});


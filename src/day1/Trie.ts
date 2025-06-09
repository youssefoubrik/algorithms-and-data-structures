type Node = {
    children: (Node | undefined)[]
    value: string
    isWord?: boolean
}
export default class Trie {
    private head: Node

    constructor() {
        this.head = { value: "", children: [] }
    }

    insert(item: string): void {
        let head = this.head;
        for (let c of item) {
            head = this.helper(head, c);
        }
        head.isWord = true
    }

    private helper(head: Node, char: string): Node {
        const idx = this.getIdx(char);
        let charNode = head.children[idx];

        if (!charNode) {
            charNode = { children: [], value: char };
            head.children[idx] = charNode;
        }

        return charNode;
    }

    search(item: string): boolean {
        let current = this.head
        for (let char of item) {
            const next = current.children[this.getIdx(char)];
            if (!next) return false;
            current = next;
        }
        return current.isWord ?? false;
    }

    startsWith(item: string): boolean {
        let current = this.head
        for (let char of item) {
            const next = current.children[this.getIdx(char)];
            if (!next) return false;
            current = next;
        }
        return true
    }
    private getIdx(char: string): number {
        return char.charCodeAt(0) - "a".charCodeAt(0);
    }
}
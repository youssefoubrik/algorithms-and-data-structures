export default class MinHeap {
    public length: number;
    private data: number[];


    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data.push(value);
        this.length++;
        let indexOfLastElement = this.length - 1;
        this.heapifyUp(indexOfLastElement);
    }
    delete(): number {
        if (this.length == 0) {
            return -1;
        }
        const lastElement = this.data.pop() as number
        this.length--;
        if (this.length == 0) {
            return lastElement;
        }
        const headElement = this.data[0]
        this.data[0] = lastElement;
        this.heapifyDown(0);
        return headElement;
    }
    private heapifyDown(index: number) {
        if (index >= this.length) {
            return;
        }
        const left = this.getLeftChildIndex(index)
        const right = this.getRightChildIndex(index)
        let smallest: number = index
        if (left < this.length && this.data[left] < this.data[smallest]) {
            smallest = left
        }
        if (right < this.length && this.data[right] < this.data[smallest]) {
            smallest = right
        }
        if (smallest === index) {
            return;
        }
        this.swap(smallest, index);
        this.heapifyDown(smallest);
    }
    private heapifyUp(childIndex: number) {
        if (childIndex == 0) {
            return
        }
        const parentIndex = this.getParentIndex(childIndex);
        if (this.data[parentIndex] <= this.data[childIndex]) {
            return;
        }
        this.swap(childIndex, parentIndex)
        this.heapifyUp(parentIndex)
    }
    private getRightChildIndex(parentIdx: number): number {
        return (2 * parentIdx + 2)
    }
    private getLeftChildIndex(parentIdx: number): number {
        return (2 * parentIdx + 1)
    }
    private getParentIndex(childIdx: number) {
        return Math.floor((childIdx - 1) / 2)
    }
    private swap(i: number, j: number) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
}
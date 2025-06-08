export class RingBuffer<T> {
    private front: number;
    private rear: number;
    private items: T[];
    public constructor(initialSize: number = 5) {
        this.items = new Array(initialSize);
        this.front = this.rear = -1;
    }
    public enQueue(item: T): T {
        if (this.isFull()) {
            this.resize();
        }
        if (this.isEmpty()) {
            this.front += 1;
        }
        this.rear = (this.rear + 1) % this.items.length;
        this.items[this.rear] = item;
        return this.items[this.rear];
    }
    public get(idx: number): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[(idx + this.front) % this.items.length];
    }
    public deQueue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const item: T = this.items[this.front];
        if (this.rear == this.front) {
            this.rear = this.front = -1;
        }
        else {
            this.front = (this.front + 1) % this.items.length;
        }
        return item;
    }
    public peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }
    public isFull(): boolean {
        return ((this.rear + 1) % this.items.length) == this.front;
    }
    public isEmpty(): boolean {
        return this.front == -1;
    }
    public resize(): void {
        const newArr = new Array(2 * this.items.length);
        let j = this.front, i = 0;
        do {
            newArr[i++] = this.items[j];
            j = (j + 1) % this.items.length;
        } while (j < this.front)
        this.front = 0;
        this.rear = this.items.length - 1;
        this.items = newArr;

    }
}
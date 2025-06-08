import { RingBuffer } from "../day1/RingBuffer";

test("RingBuffer", function () {
    const buffer = new RingBuffer<number>();

    buffer.enQueue(5);
    expect(buffer.deQueue()).toEqual(5);
    expect(buffer.deQueue()).toEqual(undefined);

    buffer.enQueue(42);
    buffer.enQueue(9);
    expect(buffer.deQueue()).toEqual(42);
    expect(buffer.deQueue()).toEqual(9);
    expect(buffer.deQueue()).toEqual(undefined);

    buffer.enQueue(42);
    buffer.enQueue(9);
    buffer.enQueue(12);
    expect(buffer.get(0)).toEqual(42);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.get(2)).toEqual(12);
});



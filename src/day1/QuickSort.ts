function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) { return; }
    console.log(arr)
    const pivot = partition(arr, lo, hi);
    qs(arr, pivot + 1, hi)
    qs(arr, lo, pivot - 1)
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo;
    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            let tmp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = tmp;
            idx++;
        }
    }
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    console.log(arr)
    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1)
}
const test = [1, 2, 3, 4, 5]
quick_sort(test)
console.log("test value is : ", test)
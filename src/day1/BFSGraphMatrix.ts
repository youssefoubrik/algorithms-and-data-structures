import Queue from "./Queue"

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    if (source === needle) {
        return [source]
    }
    const len = graph.length
    const prev: number[] = new Array(len).fill(-1)
    const seen: boolean[] = new Array(len).fill(false)
    const q = new Queue<number>()
    q.enqueue(source)
    while (q.length) {
        let curr = q.deque() as number
        if (curr == needle) {
            return buildPath(prev, source, needle)
        }
        seen[curr] = true
        const adjs = graph[curr]
        for (let i = 0; i < len; i++) {
            if (!seen[i] && adjs[i] !== 0) {
                seen[i] = true
                q.enqueue(i)
                prev[i] = curr
            }

        }
    }
    return null
}

function buildPath(prev: number[], source: number, target: number): number[] {
    const out = []
    let curr = target
    while (prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }
    out.push(source)
    return out.reverse()
}

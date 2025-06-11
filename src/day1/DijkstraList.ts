export default function dijkstra_list(
    source: number,
    sink: number,
    graph: WeightedAdjacencyList
): number[] {
    const len = graph.length
    const seen: boolean[] = new Array(len).fill(false)
    const dists: number[] = new Array(len).fill(Infinity)
    const prev: number[] = new Array(len).fill(-1)
    dists[source] = 0
    while (has_unvisited(seen)) {
        const curr = min_node_idx(seen, dists)
        if (curr === -1) break;
        seen[curr] = true;
        adjust_adjacent_weights(graph, curr, dists, prev)
    }
    return construct_path(source, sink, prev)
}

function has_unvisited(seen: boolean[]): boolean {
    return seen.some(is_visited => !is_visited)
}

function min_node_idx(seen: boolean[], dists: number[]): number {
    let lo: number = Infinity, idx: number = -1
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue
        }
        if (dists[i] < lo) {
            lo = dists[i]
            idx = i
        }
    }
    return idx
}

function adjust_adjacent_weights(graph: WeightedAdjacencyList, curr: number, dists: number[], prev: number[]) {
    const adjs = graph[curr]
    for (let i = 0; i < adjs.length; i++) {
        const adj = adjs[i]
        if (dists[adj.to] > dists[curr] + adj.weight) {
            dists[adj.to] = dists[curr] + adj.weight
            prev[adj.to] = curr
        }
    }
}

function construct_path(source: number, sink: number, prev: number[]): number[] {
    let curr = sink
    const path: number[] = []
    while (prev[curr] != -1) {
        path.push(curr)
        curr = prev[curr]
    }
    path.push(source)
    return path.reverse()
}
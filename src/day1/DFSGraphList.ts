function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
    //base case
    if (seen[curr]) {
        return false
    }
    //pre
    seen[curr] = true
    path.push(curr)
    if (curr === needle) {
        return true
    }
    //recurse
    const adj = graph[curr]
    for (let i = 0; i < adj.length; ++i) {
        if (walk(graph, adj[i].to, needle, seen, path)) {
            return true
        }
    }
    //post 
    path.pop()
    return false
}
export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const path: number[] = []
    const seen: boolean[] = new Array(graph.length).fill(false)
    if (walk(graph, source, needle, seen, path)) {
        return path
    }
    return null
}
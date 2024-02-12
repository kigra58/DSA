/**
 *  Graph Represented by two types
 *  1. Adjecency Matrix
 *  2. Adjancey List
 */

class Graph {
    constructor(v) {
        this.vertex = v
        this.adj = new Array(vertex).fill([]);

    }

    addEdge(source, destination) {
        // Undirected Graph 
        this.adj[source].push(destination);
        this.adj[destination].push(source);
    }
}

let obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 2);
obj.addEdge(2, 0);
obj.addEdge(2, 3);
obj.addEdge(3, 3);
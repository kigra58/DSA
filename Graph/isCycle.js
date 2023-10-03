/**
 *  1. TRAVERSE THE GRAPH BY DFS
 *  2. STORE THE PARENT OF EACH VERTICES
 *  3. IF VERTEX IS ALREADY VISITED  AND NOT EQUAL TO THIER PARENT NODE
 */

let vertex = 4;
let adjList = new Array(vertex).fill([]);
let visited = new Array(vertex).fill(false);

const addEdge = (source, destination) => {
    adjList[source] = [...adjList[source], destination];
};

addEdge(0, 1);
// addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);

const dfs = (startingNode, parentNode) => {
    visited[startingNode] = true;
    let isLoop = false;
    console.log(startingNode + " ");
    for (let i of adjList[startingNode]) {
        if (visited[i] && i === parentNode) continue;
        if (visited[i]) return true;
        isLoop |= dfs(i, parentNode);
    };
    return false;
};

const startNode = 0;
const res = dfs(startNode, 0);
console.log("================>Res", res)
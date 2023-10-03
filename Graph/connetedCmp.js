let vertex = 9;
let adjList = new Array(vertex).fill([]);
let visited = new Array(vertex).fill(false);

const addEdge = (source, destination) => {
    adjList[source] = [...adjList[source], destination];
};

addEdge(1, 2);
addEdge(2, 3);
addEdge(2, 4);
addEdge(3, 5);
addEdge(6, 7);
addEdge(8, 0);

const dfs = (startingNode) => {
    visited[startingNode] = true;
    // console.log(startingNode + " ");
    for (let i of adjList[startingNode]) {
        if (!visited[i]) {
            dfs(i);
        }
    };

};

function count() {
    let cnt = 0;
    for (let i = 1; i < vertex; ++i) {
        if (!visited[i]) {
            dfs(i)
            cnt++;
        }
    }
    return cnt;
}
console.log("================>Res", count())
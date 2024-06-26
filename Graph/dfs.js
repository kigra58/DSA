
/**
 * RECUSIVE APPROCH
 */

// class Graph {
//     constructor(vertices) {
//         this.V = vertices;
//         this.adj = new Array(vertices);
//         for (let i = 0; i < vertices; i++) {
//             this.adj[i] = [];
//         }
//     }

//     addEdge(v, w) {
//         this.adj[v].push(w);
//         this.adj[w].push(v); // Assuming the graph is undirected
//     }

//     DFS(startingNode) {
//         let visited = new Array(this.V).fill(false);

//         const dfsRecursive = (node) => {
//             visited[node] = true;
//             console.log(node + " ");

//             for (let i of this.adj[node]) {
//                 if (!visited[i]) {
//                     dfsRecursive(i);
//                 }
//             }
//         };

//         dfsRecursive(startingNode);
//     }
// }


/**
 *  USE LOOP APPROCH ONLY
 */

// class Graph {
//     constructor(vertices) {
//         this.V = vertices;
//         this.adj = new Array(vertices);
//         for (let i = 0; i < vertices; i++) {
//             this.adj[i] = [];
//         }
//     }

//     addEdge(v, w) {
//         this.adj[v].push(w);
//         this.adj[w].push(v); // Assuming the graph is undirected
//     }

//     DFS(startingNode) {
//         const visited = new Array(this.V).fill(false);
//         const stack = [];
// 		   stack.push(startingNode);
// 		while (stack.length > 0) {
//             let node = stack.pop();

//             if (!visited[node]) {
//                 console.log(node + " ");
//                 visited[node] = true;
//             }

//             for (const i of this.adj[node]) {
//                 if (!visited[i]) {
//                     stack.push(i);
//                 }
//             }
//         }

//     }
// }


/**
 *   USE MAP DATA STRUCTURE AND LOOP APPROCH
 */

// class Graph {
//     constructor(vertices) {
//         this.V = vertices;
//         this.adj = new Map();
//         for (let i = 0; i < vertices; i++) {
//             this.adj.set(i, []);
//         }
//     }

//     addEdge(v, w) {
//         this.adj.get(v).push(w);
//         this.adj.get(w).push(v); // Assuming the graph is undirected
//     }

//     DFS(startingNode) {
//         let visited = new Array(this.V).fill(false);
//         let stack = [];

//         stack.push(startingNode);

//         while (stack.length > 0) {
//             let node = stack.pop();

//             if (!visited[node]) {
//                 console.log(node + " ");
//                 visited[node] = true;
//             }

//             for (let i of this.adj.get(node)) {
//                 if (!visited[i]) {
//                     stack.push(i);
//                 }
//             }
//         }
//     }
// }



/**
 *    USE MAP DATA STRUCTURE AND RECURSIVE FUNCTIONS
 */

// class Graph {
//     constructor(vertices) {
//         this.V = vertices;
//         this.adj = new Map();
//         for (let i = 0; i < vertices; i++) {
//             this.adj.set(i, []);
//         }
//     }

//     addEdge(v, w) {
//         this.adj.get(v).push(w);
//         this.adj.get(w).push(v); // Assuming the graph is undirected
//     }

//     DFS(startingNode) {
//         let visited = new Array(this.V).fill(false);

//         const dfsRecursive = (node) => {
//             visited[node] = true;
//             console.log(node + " ");

//             for (let i of this.adj.get(node)) {
//                 if (!visited[i]) {
//                     dfsRecursive(i);
//                 }
//             }
//         };

//         dfsRecursive(startingNode);
//     }
// }





obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 2);
obj.addEdge(2, 0);
obj.addEdge(2, 3);
obj.addEdge(3, 3);

const startNode=2;

console.log(`Following is Depth First Traversal "+"(starting from vertex ${startNode})`);
obj.DFS(startNode);



















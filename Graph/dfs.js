class Graph{
	constructor(v){
		this.V = v;
		this.adj = new Array(v);
		for(let i = 0; i < v; i++){
			this.adj[i] = [];
		}
	}	
	addEdge(source, destination){
		// console.log("==========1111",this.adj);
		this.adj[source].push(destination);
		// console.log("==========2222",this.adj);
	}
	
	DFSUtil(startingNode, visited){
		visited[startingNode] = true;
		console.log(startingNode + " ");
		for(let i of this.adj[startingNode].values()){
			if (!visited[i]){
                this.DFSUtil(i, visited);
            }
		} 
	}
	
	// It uses recursive
	DFS(startingNode){
		let visited = new Array(this.V);
		for(let i = 0; i < this.V; i++){
            visited[i] = false;
        }
		this.DFSUtil(startingNode, visited);
	}
}

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








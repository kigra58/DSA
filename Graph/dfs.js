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



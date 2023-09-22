class Graph{
	constructor(v){
		this.V = v;
		this.adj = new Array(v);
		for(let i = 0; i < v; i++){
			this.adj[i] = [];
		}
    }
	addEdge(v, w){
		this.adj[v].push(w);
	}
		
	BFS(startingNode){
		let visited = new Array(this.V);
		for(let i = 0; i < this.V; i++){
			visited[i] = false;
		}
		let queue=[];
		visited[startingNode]=true;
		queue.push(startingNode);
		while(queue.length>0){
			startingNode = queue[0];
			console.log(startingNode+" ");
			queue.shift();
            
			// Check adjacency node, who not mark as visited and push in queue
			this.adj[startingNode].forEach((adjacent) => {
				if(!visited[adjacent]){
					visited[adjacent]=true;
					queue.push(adjacent);
				}
			});
		}
	}
}
	

obj = new Graph(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 2);
obj.addEdge(2, 0);
obj.addEdge(2, 3);
obj.addEdge(3, 3);
	
const startingVertext=1;

console.log(`BFS" +
			"(starting from vertex ${startingVertext}) `);
obj.BFS(startingVertext);
	


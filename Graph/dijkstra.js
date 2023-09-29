
class Graph {
	constructor(V){
		this.V = V;
		this.adj = new Array(V);
		for(let i = 0; i < V; i++){
			this.adj[i] = new Array();
		}
	}

	addEdge(u, v, w){
		this.adj[u].push([v, w]);
		this.adj[v].push([u, w]);
	}
	shortestPath(src){
		let pq = [];
		let dist = new Array(V).fill(Number.POSITIVE_INFINITY);
		pq.push([0, src]);
		dist[src] = 0;
		while (pq.length > 0) {
	
			let u = pq[0][1];
			pq.shift();
			for(let i = 0; i < this.adj[u].length; i++){
				
				// Get vertex label and weight of current
				// adjacent of u.
				let v = this.adj[u][i][0];
				let weight = this.adj[u][i][1];

				if (dist[v] > dist[u] + weight) {
					// Updating distance of v
					dist[v] = dist[u] + weight;
					pq.push([dist[v], v]);
					pq.sort((a, b) =>{
						if(a[0] == b[0]) return a[1] - b[1];
						return a[0] - b[0];
					});
				}
			}
		}
		console.log("Vertex Distance from Source");
		for (let i = 0; i < V; ++i)
			console.log(i, "	 ", dist[i]);
	}
}


let V = 9;
let g = new Graph(V);
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);


g.shortestPath(0);




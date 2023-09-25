
let vertex=4;
let adjList=new Array(vertex).fill([]);
let visited=new Array(vertex).fill(false);

const addEdge=(source,destination)=>{
    adjList[source]=[...adjList[source],destination];
};

addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);

const dfs=(startingNode)=>{
    visited[startingNode]=true;
    console.log(startingNode + " ");
    for(let i of adjList[startingNode]){
        if(!visited[i]) 
          dfs(i);
    };  
};

const bfs=(startingNode)=>{
    let queue=[];
    visited[startingNode]=true;
    queue.push(startingNode);
    while (queue.length!==0) {
        startingNode=queue[0];
        console.log(startingNode + " ");
        queue.shift();
        for(let i of adjList[startingNode]){   
            if(!visited[i]){
                visited[i]=true;
                queue.push(i);
            }
        }
    }
}

const startNode=2;
const res=dfs(startNode);
// console.log("==================adjList",adjList);

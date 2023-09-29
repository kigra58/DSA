
const vertex=8;
let visited=new Array(vertex).fill(false);
let adjList=new Array(vertex).fill([]);
let level=[]

function addEdge(src,des){
   adjList[src]=[...adjList[src],des];
};


addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 3);
addEdge(1, 4);
addEdge(1, 5);
addEdge(2, 5);
addEdge(2, 6);
addEdge(6, 7);


function BFS(startNode){
    let queue=[];
    queue.push(startNode);
    visited[startNode]=true;
    level[startNode]=0;
    while (queue.length!==0){
        startNode=queue[0];
        console.log("======>",startNode);
        queue.shift();
        adjList[startNode].forEach(ele => {
            if(!visited[ele]){
                queue.push(ele);
                visited[ele]=true;
                level[ele]=level[startNode]+1;
            }
        });
    }
    return false

}


BFS(0,3);
// console.log("==============level",level)

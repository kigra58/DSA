const vertex=8;
let visited=new Array(vertex).fill(false);
let adjList=new Array(vertex).fill([]);
let parent=new Array(vertex).fill(-1);
const startingNode=0;
const destNode=7;

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
    parent[startNode]=-1
    while (queue.length!==0){
        startNode=queue[0];
        // console.log("======>",startNode);
        queue.shift();
        adjList[startNode].forEach(ele => {
            if(!visited[ele]){
                queue.push(ele);
                visited[ele]=true;
                parent[ele]=startNode;
            }
        });
    }
}

BFS(0);
// console.log("===============parent",parent)



let ans=[]
function getPath(parnt,sr,de){
   if(sr===de){
     return "No Path"
   }
   ans.push(parnt[de]);
//    console.log("===Path",parnt[de]);
   return getPath(parnt,sr,parnt[de]);
}
getPath(parent,0,7);
console.log("============ans",ans.reverse());



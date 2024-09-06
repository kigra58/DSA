
class Node{
	constructor(data){
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

function findPath(root, arr, x){
  if (root == null) return false;
	arr.push(root.data);	
	if (root.data == x)	return true;
  const leftPath=findPath(root.left, arr, x);
  const rightPath=findPath(root.right, arr, x);
	if (leftPath || rightPath ) return true;
	arr.pop();
	return false;			
}


function printPath(root, x){
	let arr = [];
	if (findPath(root, arr, x)){
    console.log(arr);
    console.log("====PathSum",pathSum(arr)) ;
		// for(let i = 0; i < arr.length; i++)	{
		// 	console.log(arr[i]);
        // }
	}
	else  
      return "No=====Path=====Exist"
}

function pathSum(arr){
  let sum=0;
  for(let i in arr){
    sum+=arr[i];
  }
  return sum;
}



const x = 7;
printPath(root, x);



/**
 * PATH OF BINARY TREE USING BFS
 */

class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.data = value;
        this.left = left;
        this.right = right;
    }
}


function pathUsingBFS(root,target){
	const queue=[];
    queue.push({node:root,path:[root.data]});
	while (queue.length>0) {
		    const {node,path} =queue.shift();
		    if(node.data===target){
				return path[0].no;
			}
			if(root.left){
				queue.push({node:node.left,path:[...path,node.left]})
			}
			if(root.right){
				queue.push({node:node.right,path:[...path,node.right]})
			}
	}
}


function pathSumUsingBFS(root,target){
    const queue=[];
	queue.push({node:root,path:[root.data],sum:0});
	while (queue.length>0) {
		const {node,path,sum}=queue.shift();
		if(node.data===target){
			return sum;
		}
		if(node.left){
          queue.push({node:node.left,path:[...path,node.left.data],sum:sum=+sum})
		}
		if(node.right){
            queue.push({node:node.left,path:[...path,node.right.data],sum:sum=+sum});
		}
	}
}

const root1 = new TreeNode(1,
	          new TreeNode(2, 
		      new TreeNode(4),
			  new TreeNode(5)),
			  new TreeNode(3));

const res3=pathUsingBFS(root1,5);
console.log("ressssssss",res3)


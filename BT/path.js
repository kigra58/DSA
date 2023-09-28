
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




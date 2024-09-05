
class Node {
    constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
   }
 }
 
 let root = null;
 root = new Node(1);
 root.left = new Node(2);
 root.right = new Node(3);
 root.left.left = new Node(4);


// function isLeaf(root){
//    if(!root)return;
//    if(root.right){
//     return false;
//    }
//    return true;
// }

// function printLeaf(root){
//   if(!root) return;
  
//   if(isLeaf(root.left)){
//     console.log(root.data);
//     printLeaf(root.left);
//   }
//   printLeaf(root.right)
// }

// const res=printLeaf(root);
// console.log("res",res)

function levelOrder(root){
    const queue=[];
    queue.push(root);
    while(queue.length>0){
        const currNode= queue.shift();
        console.log("=======>",currNode.data)
        if(currNode.left){
            queue.push(currNode.left);
        }
        if(currNode.right){
            queue.push(currNode.right);
        }
    }
}



const res= levelOrder(root);
console.log("ressssssss",res);


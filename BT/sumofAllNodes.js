






function sumOfAllNode(root){
     // root is null
     if(!root){
        return 0;
     }

     const LH=sumOfAllNode(root.left);
     const RH=sumOfAllNode(root.right);

     return LH+RH+root.data

}


const root = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
    },
    right: {
      data: 5,
    },
  },
  right: {
    data: 3,
    left: {
      data: 6,
    },
    right: {
      data: 7,
    },
  },
};



const root1={
   data:3,
   left:{
    data:9
   },
   right:{
     data:20,
     left:{
     data:15
     },
     right:{
        data:7
     }
   }
}


function sumOfLeftLeaves(root) {
   function dfs(node, isLeft) {
       if (!node) return 0;

       if (!node.left && !node.right && isLeft) {
           return node.val;
       }
       return dfs(node.left, true) + dfs(node.right, false);
   }

   return dfs(root, false);
}


function sumUsingBFS(root){
    const queue=[];
    queue.push(root);  
    let sum=0;
    while (queue.length>0) {
        const currNode=queue.shift();
        sum+=currNode.data;
        if(currNode.left){
             queue.push(currNode.left);
        }
        if(currNode.right){
            queue.push(currNode.right);
        }
    }
    return sum;
}

const ans=sumUsingBFS(root);
console.log("anssssssssss",ans);


function sumofLeftNodeUsingBFS(root){       
    const queue=[];
    queue.push(root);
    let leftSum=0;
    while (queue.length > 0) {
      const currNode = queue.shift();
      if (currNode.left) {
         leftSum += currNode.left.data;
         queue.push(currNode.left);
      }
      if (currNode.right) {
         queue.push(currNode.right);
      }
    }
    return leftSum;
}
function sumofRightNodeUsingBFS(root){       
    const queue=[];
    queue.push(root);
    let leftSum=0;
    while (queue.length > 0) {
      const currNode = queue.shift();
      if (currNode.left) {
         queue.push(currNode.left);
      }
      if (currNode.right) {
         leftSum += currNode.right.data;
         queue.push(currNode.right);
      }
    }
    return leftSum;
}

const sumofLeftNode=sumofLeftNodeUsingBFS(root1)
console.log("sum of left node ",sumofLeftNode)
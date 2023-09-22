
/**
 * PRE ORDER
 * @param {*} root 
 * @returns 
 */
function preorder(root) {
    if (root === null) {
      return;
    }
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

  
/**
 * POST ORDER
 * @param {*} root 
 * @returns 
 */
function postorder(root) {
    if (root === null) {
      return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
}


/**
 * IN ORDER
 * @param {*} root 
 * @returns 
 */
function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

 /**
  * ITERATIVE METHOD FOR PRE ORDER
  * @param {*} root 
  * @returns 
  */
  function iterativePreorder(root){
    if (root == null) return;
     
    let nodeStack = [];
    nodeStack.push(root);
    while (nodeStack.length > 0){
        let mynode = nodeStack[nodeStack.length - 1];
        console.log(mynode.data + " ");
        nodeStack.pop();
         
        if (mynode.right != null){
            nodeStack.push(mynode.right);
        }
        if (mynode.left != null){
            nodeStack.push(mynode.left);
        }
    }
}
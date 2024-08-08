

/**
 *   SWAP THE LEFT LEAF TO RIGHT LEAF
 * @param {*} root 
 * @returns 
 */

function invert(root){
  
    if(!root) return null;

    const temp=root.left;
    root.left=root.right;
    root.right=temp;
   
    invert(root.left);
    invert(root.right);
    return root;
};




function maxDepth(root){
    if(!root){ return 0}
    const L= maxDepth(root.left);
    const H= maxDepth(root.right);
    return Math.max(L,H)+1;
}


function minDepth(root){
    if(!root){
        return 0;
    }

    if(!root.right){
        return minDepth(root.left)+1;
    }

    if(!root.left){
       return minDepth(root.left)+1;   
    }
    return Math.min(minDepth(root.left),minDepth(root.right))+1;
}   
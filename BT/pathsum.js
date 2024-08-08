

function pathSum(root,sum){
  
    if(!root) return false;

    if(!root.left && !root.right){
        return sum===root.val;
    }

    return pathSum(root.left,sum-root.val) || pathSum(root.right,sum-root.val);
}
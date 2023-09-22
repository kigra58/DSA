/**
 *  SYMMETRIC OR MIRROR
 * @param {*} root1 
 * @param {*} root2 
 * @returns 
 */
function isMirror(root1, root2){
    if (root1 == null && root2 == null)
        return true;
    
    if (root1 != null && root2 != null && root1.data == root2.data){

        const  BST1=isMirror(root1.left, root2.right);
        const  BST2=isMirror(root1.left, root2.right);
        return (BST1 && BST2);
    }
                 
    return false;
}
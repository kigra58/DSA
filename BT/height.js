/**
 * MAX DEPTH OR HEIGHT OF BT
 * @param {*} root 
 * @returns 
 */

function height(root){
    if (root == null)return 0;
    else{
    let LH = height(root.left);
    let RH = height(root.right);
    if (LH > RH)  // or  max(LH,RH)+1
        return (LH + 1);
    else
        return (RH + 1);

    }
   
}
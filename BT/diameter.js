
function height(root){
    if (root == null)
        return 0;
    else
    {
        const LH = height(root.left);
        const RH = height(root.right);
        if (LH > RH)  // or  max(LH,RH)+1
            return (LH + 1);
         else
            return (RH + 1);
    }
}


function diameter(root){
  
    if(root == null) return 0;

    const lheight = height(root.left);
    const rheight = height(root.right);
  
    const ldiameter = diameter(root.left);
    const rdiameter = diameter(root.right);
    const finalDiameter= Math.max(ldiameter, rdiameter);

    return Math.max(lheight + rheight + 1,finalDiameter);
 
}
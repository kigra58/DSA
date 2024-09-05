

function sumOfLeaf(root,sum=0){
    if(!root){
        return 0;
    }

    const LH=sumOfLeaf(root.left,sum);
    const RH=sumOfLeaf(root.right,sum);


}
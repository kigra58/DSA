






function sumOfAllNode(root){
     // root is null
     if(!root){
        return 0;
     }

     const LH=sumOfAllNode(root.left);
     const RH=sumOfAllNode(root.right);

     return LH+RH+root.data

}
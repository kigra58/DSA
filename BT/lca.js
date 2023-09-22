function findLCA(root, n1, n2){
   
    if (root == null) return null;
    if (root.data == n1 || root.data == n2) return root;

    let leftLCA = findLCA(root.left, n1, n2);
    let rightLCA = findLCA(root.right, n1, n2);

    if (leftLCA!=null && rightLCA!=null)
        return root;

    return (leftLCA != null) ? leftLCA : rightLCA;
}
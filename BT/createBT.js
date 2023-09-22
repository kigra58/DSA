
class Node {
constructor(val) {
 this.data = val;
 this.left = null;
 this.right = null;
}
}

let root = null;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);

function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

console.log("===============",inorder(root))
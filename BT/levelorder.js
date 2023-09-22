/**
 *  USING QUEUE
 * @param {*} root 
 */
function printLevelOrderByQueue(root) {
    let queue = [];
    queue.push(root);
    while (queue.length != 0) {
             
        // The shift() method removes
        // the first element from an array
        // and returns that removed element.
        let tempNode = queue.shift();
        console.log(tempNode.data + " ");
 
        // Enqueue left child
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }
 
        // Enqueue right child
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }
}


function height(root) {
 if(root===null) return 0;
 
 const LH=height(root.left);
 const RH=height(root.right);
 return Math.max(LH,RH)+1

}

function printCurrentLevel(root , level) {
    if (root == null)
        return;
    if (level == 1)
        console.log(root.data + " ");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}

function printLevelOrder(root) {
    let H = height(root);
    let i;
    for (i = 1; i <= H; i++){
        printCurrentLevel(root, i);
    }
}




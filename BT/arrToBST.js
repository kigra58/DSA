function sortedArrayToBST(arr, start, end){
  
    if (start > end) return null;
    
    const mid = parseInt((start + end) / 2);
    const root = new Node(arr[mid]);
 
    root.left = sortedArrayToBST(arr, start, mid - 1);
    root.right = sortedArrayToBST(arr, mid + 1, end);

    return root;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const n = arr.length;
const root = sortedArrayToBST(arr, 0, n - 1);



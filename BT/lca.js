/**
 *  1-> FIND PATH OF N1 FROM ROOT AND FIND THE PATH OF N2 FROM ROOT;
 *  2-> TRAVERSE THE PATH , FIND THE COMMON ELE OF BOTH PATH ;
 *  3-> RETURN THE LAST COMMON ELE OF PATH ;
 */


/**
 * ======EXAMPLE=====
 * PATH1=[]
 * PATH2=[]
 * for(let i=0 i<PATH1.length && i<PATH2.length;++i){
 *   if(PATH1[i]===PATH2[i]){
 *     retun PATH[i]
 *   }
 * } 
 */


function findPath(root,node,arr){
  // arr-> STORE PATH OF ELE
  if(root===null) return false;
  arr.push(root.data);
  if(root===node) return true;
  // CHECK LEFT PATH 
  const leftPath=findPath(root.left,node,arr);
  // CHECK RIGHT PATH 
  const rightPath=findPath(root.left,node,arr);
  if(leftPath||rightPath){
    return true;
  }
  arr.pop();
  return false;
}


const  printPath=(root,node)=>{
   const arr=[];
   if(findPath(root,node,arr)){
       for(let i=0;i<arr.length;++i){
           console.log("=============PATH",arr[i]);
       }
   }
   else{
    console.log("==========NOT PATH EXIST=======");
   } 
}




/**
 * OPTIMISED APPROCH
 * @param {*} root 
 * @param {*} n1 
 * @param {*} n2 
 * @returns 
 */
function findLCA(root, n1, n2){
    // 4 CASES
    if (root == null) return null;
    if (root.data == n1 || root.data == n2) return root;

    let leftLCA = findLCA(root.left, n1, n2);
    let rightLCA = findLCA(root.right, n1, n2);

    if (leftLCA!=null && rightLCA!=null)
        return root;

    return (leftLCA != null) ? leftLCA : rightLCA;
}

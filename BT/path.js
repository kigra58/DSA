
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
 
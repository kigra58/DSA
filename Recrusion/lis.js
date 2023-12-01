/**
 * 1. brute force approch , solved by recrusion (2**n, o(n))
 * 2. solved by DP (n**2 ,o(n) )
 * 3. solved by Binary search (nlogn)
 */



function LIS(arr,prevInd,currInd){
  
    if(arr.length===currInd) return 0;
    let includeItem=0;
    
    
    /**
     * for first ele prevInd=-1
     */

    if(prevInd===-1 || arr[currInd] > arr[prevInd]){
       includeItem=1+LIS(arr,currInd,currInd+1);
    }
    const excludeItem=LIS(arr,prevInd,currInd+1);
    return Math.max(excludeItem,includeItem);
}

const res=LIS([3,10,2,11],-1,0);



console.log("================res",res);

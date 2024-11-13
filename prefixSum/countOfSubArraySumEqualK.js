
/**
 * BRUTE FORCE APPROCH
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
function brutForce(arr,k){
    let cnt=0;
    for(let i=0;i<arr.length;i++){
     let sum=0;
      for(let j=i;j<arr.length;j++){
         sum+=arr[j];
         if(sum===k){
           cnt++;
         }       
      } 
    } 
    return cnt;
};

/**
 *  PREFIX SUM
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
function byPrefixSum(arr,k){
    let sum=0;
    let cnt=0;
    const map=new Map();
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

        if(sum===k){
          cnt++;
        }

        if(map.has(sum-k)){
           cnt+= map.get(sum-k);
        }
        map.set(sum,(map.get(sum)||0)+1);
    } 
    return cnt;
};



const res=byPrefixSum([10, 2, -2, -20, 10],-10);
console.log("ressssss",res);


/**
 * BRUTE FORCE APPROCH
 */
function bruteForce(arr,target){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]===target){
        return [i,j];
      }
    }
  }
  return [-1];
};


/**
 *  TWO POINTER APPROCH
 */
function twoSum(arr,target) {
  let L=0, H=arr.length;
  while (L<=H) {
     const sum=arr[L]+arr[H];
     if(sum===target){
      return [L,H];
     }
     else if(sum<target){
        L++;
     }else {
        H--;
     }
  };
  return [-1];
};


const res=twoSum([2,7,11,15],9);
console.log("res :"+ res);



/*

Find out the array of index which value have equal to given target



 */

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
  let L=0, H=arr.length-1;
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



// 
function byHashMap(nums,target){
    const map=new Map();
    for(const index in nums){
       map.set(nums[index],index);
    };

    for(const index in nums){
       const remain=target- nums[index];
       if(map.has(remain) && map.get(remain)!==index){
          return [+index,+map.get(remain)];
       }
    }
    return [-1];
}


const res=twoSum([2,7,11,15],9);
console.log(res);


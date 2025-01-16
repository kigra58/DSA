/**
 * BRUTE FORCE APPROCH
 */
function bruteForce(A, target) {
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        const sum = A[i] + A[j] + A[k];
        if (sum === target) {
          return [i, j, k];
        }
      }
    }
  }
  return [-1];
}

/**
 * USING TWO POINTER APPROCH
 */
function usingTwoPointer(A, target) {
  let l, r;
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    l = i + 1;
    r = A.length - 1;
    while (l < r) {
      const sum = A[i] + A[j] + A[k];
      if (sum === target) {
        return [i, j, k];
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return [-1];
};


function byHashMap(nums,target){
   const map=new Map();
   for(const index in nums){
     map.set(nums[index],index);
   };

  //  console.log(map)

   for(const index in nums){
      for(let j= +index+1;j<nums.length;j++){
           const twoSum=nums[index] + nums[j];
           const remain=target- twoSum;
          //  console.log({index,j,num1: nums[index],num2:nums[j],remain});
           if(map.has(remain) && index!==j && j!==map.get(remain) && index!==map.get(remain)){
             return [+index,+j,+map.get(remain)]
           }
      }
   }
   return [-1];
}



const nums = [1, 4, 45, 6, 10, 8];
const target = 22;
const output = byHashMap(nums, target);
console.log(output);

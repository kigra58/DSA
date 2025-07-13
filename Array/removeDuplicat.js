

function removeDuplicates(nums){
    if(!nums.length) return 0;
     
    let i=0;
    for(let j=1;j<nums.length;j++){

        // check duplicate
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    // why we return i+1 instead of i
    return i+1;
};
 

const res= removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(res);
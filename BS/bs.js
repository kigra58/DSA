/**
 *  ARRAY SHOULD BE SORTED
 */

function  BS(arr=[],target=0){
    let L=0,H=arr.length-1;
    while (L<=H) {
        const mid=Math.floor((L+H)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            L=mid+1;
        }
        else{
            H=mid-1;
        }
    };
    return -1;
};


function byRecrusion(arr=[],target=0,L,H){
    if(L<=H){
          const mid=Math.floor((L+H)/2);
          if(arr[mid]===target){
            return mid;
          }
          else if(arr[mid]<target){
            byRecrusion(arr,target,mid+1,H);
          }
          else{byRecrusion(arr,target,L,mid-1)};
    }
    return -1;
};


function optimise(nums=[],target){
    let L = 0;
    let H = nums.length - 1;

    while (L <= H) {
        const mid = Math.floor((L + H) / 2);
        if (nums[mid] === target) {
            return mid; 
        }
        if (nums[L] <= nums[mid]) {
            if (nums[L] <= target && target < nums[mid]) {
                H = mid - 1; 
            } else {
                L = mid + 1; 
            }
        } else {
            if (nums[mid] < target && target <= nums[H]) {
                L = mid + 1; 
            } else {
                H = mid - 1; 
            }
        }
    }

    return -1;
};



const sortedArr=[1,2,3,4,5,6,7,8,9];


// const res=BS(sortedArr,2);
// const res1=byRecrusion(arr,5,0,arr.length-1);
const res=optimise(sortedArr,2);
console.log("ress",res);
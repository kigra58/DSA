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
}

const arr=[1,2,3,4,5,6,7,8,9]

const res=BS(arr,5);
// const res1=byRecrusion(arr,5,0,arr.length-1);
console.log("ress",res);
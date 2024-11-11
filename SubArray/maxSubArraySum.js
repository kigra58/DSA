const arr1=[5, 4, 1, 7, 8]; // ANS 25
const arr2=[2, 3, -8, 7, -1, 2, 3];  // ANS 11

function maxSubArraySum(arr){
 let globalSum=0;
  for(let i=0;i<arr.length;i++){
    // const subArray=[];
    let localSum=0;
    for(let j=i; j<arr.length;j++){
        // arr[i] All sub Arrays elements
        localSum+=arr[j];
        if(localSum>globalSum){
            globalSum=localSum;
        }
    }
  }
  return globalSum
}

const res= maxSubArraySum(arr2);
console.log("resssssssss",res);
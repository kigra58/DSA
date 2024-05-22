

const arr=[1, 4, 2, 10, 2, 3, 1, 0, 20];





function bruteforce(arr,k){
  let max=0;
  for (let i = 0; i < arr.length-k+1 ; i++) {
    let currSum=0;

    for (let j = i; j < k; j++) {
      currSum+=arr[i+j];
    };
    max=Math.max(max,currSum);

  };
  return max;
}



function SW(arr,k){
  
  // SUM OF WINDOW 
  let windowSum=0;
  let max=0;
  for (let i = 0; i < k; i++) {
    windowSum+=arr[i];
  };

  for (let i = k; i < arr.length; i++) {
    console.log("=======>",i-k,arr[i-k]);
    windowSum= windowSum-arr[i-k]+ arr[i];
     max=Math.max(max,windowSum);
  };

  return max;

};

const k=4;
const res=bruteforce(arr,k);

console.log("==========res",res);


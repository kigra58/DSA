const input=[15, 10, 25, 5, 10, 20];
// const output=[85, 70, 60, 35, 30, 20];
function suffixSum(arr){
    let res=new Array(arr.length).fill(0);
    for(let i=arr.length-1;i>=0;i--){
        if(i===arr.length-1){
          res[arr.length-1]=arr[i];
        }else{
          res[i]=res[i+1]+arr[i];
        }
    }
    return res;
}

const res=suffixSum(input);
console.log("res",res);
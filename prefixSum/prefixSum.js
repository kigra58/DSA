// const input=[10, 20, 10, 5, 15];
// const output=[10,30,40,45,60];

function preFixSum(arr,pre=[]){
    for(let i=0;i<arr.length;i++){
        if(i===0){
            pre[0]=arr[0];
        }else{
            pre[i]=pre[i-1]+arr[i];
        }
    }
    return pre;

};


const res=preFixSum(input);
console.log("res",res);
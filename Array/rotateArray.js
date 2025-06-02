

function shiftArr(arr){

    let length=arr.length;
   
 
    for(const i in arr){
        if(i==arr.length-1){
         arr[arr.length-1]=arr[i]
        }else{
            arr[+i]=arr[+i+1];
        }

    }

    return arr;
}

const res=shiftArr([1,2,3,4,5]);

console.log(res);
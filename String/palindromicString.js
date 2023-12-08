

function PS(str){
    let low=0, high=str.length-1;
   while (low<high) {
     if(str[low++]!==str[high--]){
        console.log("===========",str);
       return false;
     }
   }
   return true;
};

console.log(PS("aabaa"));

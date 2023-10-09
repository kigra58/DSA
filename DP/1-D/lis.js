const arr = [10, 22, 9, 33, 21, 50, 41, 60];
let max_ref;



/**
 * USING RECRUSION
 */
function _lis(arr,n){
		if (n == 1) return 1;
		let res, max_ending_here = 1; 

		for (let i = 1; i < n; i++){
			res = _lis(arr, i); 
			if (arr[i-1] < arr[n-1] && res + 1 > max_ending_here) {
                max_ending_here = res + 1; 
            }
		}
        max_ref=Math.max(max_ref,max_ending_here);
		return max_ending_here; 
}
	

function main(arr,n){
		max_ref = 1; 
		_lis( arr, n);
		return max_ref;
}
	
let n = arr.length; 
// console.log("Length of lis is", main(arr, n));

	








/**
 *  USING DP
 */
function lis(a) {
   let n = a.length;
   let d=new Array(n).fill(1);
   let ans = d[0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (a[j] < a[i]){
				d[i] =Math.max(d[i], d[j] + 1);
			}
        }
    }
    for (let i = 1; i < n; i++) {
        ans =Math.max(ans, d[i]);
    }
    return ans;
}

// console.log(lis(arr))



function helper(arr,startInd,){
   const Len=arr.length;
   if(startInd===Len-1){
       return 1;
    };
    
    // let maxNum=1;
    let maxNum=1;

   for(let i=startInd+1;i<Len;++i){
      if(arr[startInd]<arr[i]){
        let len=1+helper(arr,i);
        maxNum=Math.max(len,maxNum);
      }
   }
   return maxNum;
}

console.log("================>>>>>>>>>",helper(arr,0));





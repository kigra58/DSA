const arr = [ 3, 10, 2, 1, 20 ];
function subArrRecur(arr, start, end){
	if (end == arr.length) 
		return;
	else if (start > end){
        subArrRecur(arr, 0, end + 1);
    }
	else{
	    let temp=[];
		for(let i = start; i < end; i++){
			temp.push(arr[i]);
		}
		temp.push(arr[end]);
		console.log("===============>",temp);
        subArrRecur(arr,start+1,end);
	}
	return;
}
// subArrRecur(arr, 0, 0);

 





function subArray(n) { 
	for(let i = 0; i < n; i++) { 
		// Pick ending point 
		for(let j = i; j < n; j++) { 
			// Print subarray between current 
			// starting and ending points 
			let temp=[];
			for(let k = i; k <= j; k++) {
			//   console.log(arr[k] + " ");
			    //  if(arr[k]<arr[k+1])
				     temp.push(arr[k]);
			   
			}
			console.log("========>",temp);
		} 
	} 
} 

// subArray(arr.length); 

function lis(arr ,idx){
  let ans=1;	
  for(let i=0;i<idx;++i){
	if(arr[idx]>ans[i]){
		ans=Math.max(ans,lis(i)+1)
	}
  }
  return ans;
}


function main(){
	let ans=0;
    const arr = [ 3, 10, 2, 1, 20 ];
	for(let i=0;i<arr.length;++i){
		ans=lis(arr,i)
	}
	return ans;
}
console.log( "=======>{{{{",main())


	


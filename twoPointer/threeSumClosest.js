


function bruteForce(arr, target){
	
    let closestSum = Number.MaxValue; 
	for(let i = 0; i < arr.length ; i++) {
		for(let j =i + 1; j < arr.length; j++){
			for(let k =j + 1; k < arr.length; k++){
                const sum=arr[i] + arr[j] + arr[k]
				if (Math.abs(target-sum) < Math.abs(target - closestSum)  ){
                    closestSum = sum;
                }
			} 
		}
	}
	return closestSum;
};



function solution(arr, target){
	arr.sort((a, b) => a - b);
	let closestSum =  Number.MaxValue;
	for (let i = 0; i < arr.length - 2; i++){
		let ptr1 = i + 1, ptr2 = arr.length - 1;
		while (ptr1 < ptr2) {
			const sum = arr[i] + arr[ptr1] + arr[ptr2];
			if (Math.abs(target - sum) < Math.abs(target - closestSum)){
				closestSum = sum;
			}
			if (sum > target) {
				ptr2--;
			}
			else {
				ptr1++;
			}
		}
	}
	return closestSum;
}

const res= bruteForce([ -1, 2, 1, -4 ],1);
console.log("res", res);







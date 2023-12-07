function MSP(idx, sum, arr, n, totalSum, dp){
	if (idx === n) {
		// One subset sum is 'sum' and the other is
		// 'totalSum - sum'
		return Math.abs((totalSum - sum) - sum);
	}
	if (dp[idx][sum] !== -1) return dp[idx][sum];	

	let pick= MSP(idx + 1, sum + arr[idx], arr, n, totalSum, dp);
	let notPick = MSP(idx + 1, sum, arr, n, totalSum, dp);
	return dp[idx][sum] = Math.min(pick, notPick);
}

function findMin(arr, n){
	let totalSum = 0;
	for (let i = 0; i < n; i++) totalSum += arr[i];
    const dp=Array.from(Array(n+1),()=>Array(totalSum+1).fill(-1));
	return MSP(0, 0, arr, n, totalSum, dp);
}

let arr = [ 3, 1, 4, 2, 2, 1 ];
let n = arr.length;

console.log("The minimum difference between two sets is ", findMin(arr, n));

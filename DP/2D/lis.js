
function LIS(currIndex, prevIndex, n, a, dp) {
		if (currIndex == n) return 0;

		if (dp[currIndex][prevIndex + 1] != -1) {
		   return dp[currIndex][prevIndex + 1];
		}
		let take = Number.MIN_VALUE;
		
		if (prevIndex == -1 || a[currIndex] > a[prevIndex]) {
		    take = 1 + LIS(currIndex + 1, currIndex, n, a, dp);
		}
		const notTake = 0 + LIS(currIndex + 1, prevIndex, n, a, dp);
		
		return dp[currIndex][prevIndex + 1] = Math.max(take, notTake);
}
    

const arr = [3, 10, 2, 1, 20];
const n = arr.length;
const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(-1));

console.log("Length of lis is " + LIS(0,-1,n, arr,dp));
	
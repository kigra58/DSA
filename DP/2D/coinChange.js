const coins = [2, 5, 3, 6];
const sum = 10;

function CC(arr, sum, N, dp) {
    if (sum === 0) return dp[N][sum] = 1

    if (sum < 0 || N <= 0) return 0;

    if (dp[N][sum] !== -1) {
        return dp[N][sum];
    }
    else {
        const includeItem = CC(arr, sum - arr[N - 1], N, dp);
        const excludeItem = CC(arr, sum, N - 1, dp);

        return dp[N][sum] = includeItem + excludeItem
    }


}
const dp = Array.from(Array(coins.length + 1), () => Array(sum + 1).fill(-1));
const res = CC(coins, sum, coins.length, dp);
console.log("=========resss", res);
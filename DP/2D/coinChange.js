const coins = [2, 5, 3, 6];
const sum = 10;

function CC(arr, sum, N) {
    let dp = new Array(N + 1).fill(new Array(sum + 1).fill(-1));
    if (sum === 0) return dp[N][sum] = 1

    if (sum < 0 || N <= 0) return 0;

    if (dp[N][sum] !== -1) {
        return dp[N][sum];
    }
    else {
        const includeItem = CC(arr, sum - arr[N - 1], N);
        const excludeItem = CC(arr, sum, N - 1);

        return dp[N][sum] = includeItem + excludeItem
    }


}

const res = CC(coins, sum, coins.length);
console.log("=========resss", res);
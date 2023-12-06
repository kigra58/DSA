
const profitArr = [60, 100, 120];
const weightArr = [10, 20, 30];
let capacity = 50;
let n = profitArr.length

function KNPS(weightArr, profitArr, capacity, N, dp) {
    if (capacity === 0 || N === 0) return 0;

    if (dp[N][capacity] !== -1) return dp[N][capacity];

    if (capacity - weightArr[N - 1] >= capacity) {
        return dp[N][capacity] = KNPS(weightArr, profitArr, capacity, N - 1, dp);
    } 
    else{

        const includeItem = profitArr[N - 1] + KNPS(weightArr, profitArr, capacity - weightArr[N - 1], N-1, dp);
        const excludeItem = KNPS(weightArr, profitArr, capacity, N - 1, dp);
        return dp[N][capacity] = Math.max(includeItem, excludeItem);
    }
    
};


const dp = Array.from(Array(n + 1), () => Array(capacity + 1).fill(-1));
const res = KNPS(weightArr, profitArr, capacity, n, dp);
console.log("===============res", res);
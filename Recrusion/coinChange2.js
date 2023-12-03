/**
 * 
 */



const coins = [2, 5, 3, 6];
const sum = 10;

function CC(arr, sum, N) {
    if (sum === 0) return 1;
    if (sum < 0 || N <= 0) return 0;

    const includeItem = CC(arr, sum - arr[N - 1], N);
    const excludeItem = CC(arr, sum, N - 1);
   
    console.log("=============ttttttttt",includeItem+excludeItem);
    return includeItem + excludeItem;

}

const res = CC(coins, sum, coins.length);
console.log("=========resss", res);
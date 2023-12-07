let arr=[3, 1, 5, 9, 12 ];
let n = arr.length;

function isSubsetSum(arr,N,sum,dp){

    if (sum == 0) return true;
    if (N == 0 && sum != 0)  return false;

    if(dp[N][sum]!==-1)return dp[N][sum];

    if (arr[N - 1] > sum)
        return isSubsetSum(arr, N - 1, sum,dp);
    
    const includeItem=isSubsetSum(arr, N - 1, sum - arr[N - 1],dp);
    const excludeItem=   isSubsetSum(arr, N - 1, sum,dp) ;

    return dp[N][sum]= includeItem || excludeItem;
    
}

function findPartition(arr,n){
    let sum = 0;
    for (let i = 0; i < n; i++) sum += arr[i];
    
    if (sum % 2 != 0) return false;
    
    const dp=Array.from(Array(n+1),()=>Array(sum+1).fill(-1));
    return isSubsetSum(arr, n, Math.floor(sum / 2),dp);
}

if (findPartition(arr, n) == true)
    console.log("Can be divided into two subsets of equal sum");
else
    console.log("Can not be divided into two subsets of equal sum");
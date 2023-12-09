

function SS(set, N, sum,dp) {

    if (sum === 0) return true;

    if (N === 0) return false;
    if(dp[N][sum]!==-1)return dp[N][sum];

    if (set[N - 1] > sum) {
        return SS(set, N - 1, sum,dp);
    }

    const includeItem = SS(set, N - 1, sum - set[N - 1],dp);
    const excludeItem = SS(set, N - 1, sum,dp);
    
    return  dp[N-1][sum]=includeItem || excludeItem;
};


const arr=[3, 34, 4, 12, 5, 2];
const n=arr.length;
const sum=9
const dp=Array.from(Array(n+1),()=>Array(sum+1).fill(-1));
const res= SS(arr,n,sum,dp);
console.log("==============res",res);
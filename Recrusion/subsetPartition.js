/**
 *  SUBSET= SUBSET1[] AND SUBSET2[]
 *  SUBSET1 SUM = SUBSET2 SUM
 */


/**
 * 1. FIND SUBSET SUM
 * 2. FIND SUM OF ARRAY AND CHECK SUM ODD OR EVEN
 * 3. IF SUM IS ODD RETURN FALSE ELSE CALL SUMSET FUN 
 * 
 */


let arr=[3, 1, 5, 9, 12 ];
let n = arr.length;

function isSubsetSum(arr,N,sum){

    if (sum == 0) return true;
    if (N == 0 && sum != 0)  return false;

    if (arr[N - 1] > sum)
        return isSubsetSum(arr, N - 1, sum);
    
    const includeItem=isSubsetSum(arr, N - 1, sum - arr[N - 1]);
    const excludeItem=   isSubsetSum(arr, N - 1, sum) ;

    return includeItem || excludeItem;
    
}

function findPartition(arr,n){
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum += arr[i];
    }
    if (sum % 2 != 0) return false;

    return isSubsetSum(arr, n, Math.floor(sum / 2));
}

if (findPartition(arr, n) == true)
    console.log("Can be divided into two subsets of equal sum");
else
    console.log("Can not be divided into two subsets of equal sum");

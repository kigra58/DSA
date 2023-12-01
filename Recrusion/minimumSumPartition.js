/**
 * Partition a set into two subsets such that the difference of subset sums is minimum
 */

function findMinRec(arr, i, sumCalculated, sumTotal) {

    if (i == 0) return Math.abs((sumTotal - sumCalculated) - sumCalculated);
  
    const includeItem = findMinRec(arr, i - 1, sumCalculated + arr[i - 1], sumTotal);
    const excludeItem = findMinRec(arr, i - 1, sumCalculated, sumTotal);
    return Math.min(includeItem, excludeItem);
  
  }
  
  function findMin(arr, n) {
    let sumTotal = 0;
    for (let i = 0; i < n; i++) sumTotal += arr[i];
  
    return findMinRec(arr, n, 0, sumTotal);
  }
  
  const arr = [3, 1, 4, 2, 2, 1];
  const n = arr.length;
  const res = findMin(arr, n);
  console.log("The minimum difference" + " between two sets is " + res);
  
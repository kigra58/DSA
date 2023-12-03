/**
 * find min diff btw two subset who's sum is qual
 */

/**
 * Partition a set into two subsets such that the difference of subset sums is minimum
 */

const arr = [3, 1, 4, 2, 2, 1];
const n = arr.length;

function subSetSum(arr, N, sumCalculated, sumTotal) {

  if (N == 0) return Math.abs((sumTotal - sumCalculated) - sumCalculated);

  const includeItem = subSetSum(arr, N - 1, sumCalculated + arr[N - 1], sumTotal);
  const excludeItem = subSetSum(arr, N - 1, sumCalculated, sumTotal);

  return Math.min(includeItem, excludeItem);

}

function findMin(arr, n) {
  let sumTotal = 0;
  for (let i = 0; i < n; i++) sumTotal += arr[i];

  return subSetSum(arr, n, 0, sumTotal);
}

const res = findMin(arr, n);
console.log("The minimum difference  between two sets is " + res);

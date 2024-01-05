function thirdApproch(arr, n, k) {
    let prevSum = new Map();
    let sum = 0, maxLen = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == k) {
            maxLen = i + 1;
        };

        if (!prevSum.has(sum)) {
            prevSum.set(sum, i);
        };

        if (prevSum.has(sum - k)) {
            maxLen = Math.max(maxLen, i - prevSum.get(sum - k))
        };
    };
    return maxLen;
};

const arr = [15, -2, 2, -8, 1, 7, 10, 23];
const n = arr.length;
const sum = 0;
const res = thirdApproch(arr, n, sum);
console.log("============res", res);
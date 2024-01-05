
function secondApproch(arr, n, sum) {
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        let currsum = 0;
        for (let j = i; j < n; j++) {
            currsum += arr[j];
            if (currsum % sum === 0) {
                maxLen = Math.max(maxLen, j - i + 1);
            };
        };
    };
    return maxLen;
};


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

const arr = [2, 7, 6, 1, 4, 5];
const n = arr.length;
const sum = 3;
const res = secondApproch(arr, n, sum);
console.log("============res", res);
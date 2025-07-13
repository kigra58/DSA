/**
 
Find the longest sub array sum equalt to K


 */



function secondApproch(arr, n, sum) {
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        let currsum = 0;
        for (let j = i; j < n; j++) {
            currsum += arr[j];
            if (currsum === sum) {
                maxLen = Math.max(maxLen, j - i + 1);
            };
        };
    };
    return maxLen;
};


function byPrefixSum(arr, k) {
    const mp = new Map();
    let res = 0, sum = 0;

    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];

        if (sum === k) {
            res = i + 1;
        }

        if (mp.has(sum - k)) {
            res = Math.max(res, i - mp.get(sum - k));
        }

        if (!mp.has(sum)) {
            mp.set(sum, i);
        }
    }
    return res;
}





const arr = [10, 5, 2, 7, 1, 9];
const n = arr.length;
const sum = 15;

// const res = thirdApproch(arr, n, sum);
const res = secondApproch(arr, n, sum);
console.log("========result", res);



/**
 *  USING DP
 */
function lis(a) {
    let n = a.length;
    let d = new Array(n).fill(1);
    let ans = d[0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (a[j] < a[i]) {
                d[i] = Math.max(d[i], d[j] + 1);
            }
        }
    }
    for (let i = 1; i < n; i++) {
        ans = Math.max(ans, d[i]);
    }
    return ans;
}

// console.log(lis(arr))



function helper(arr, startInd,) {
    const Len = arr.length;
    if (startInd === Len - 1) {
        return 1;
    };

    // let maxNum=1;
    let maxNum = 1;

    for (let i = startInd + 1; i < Len; ++i) {
        if (arr[startInd] < arr[i]) {
            let len = 1 + helper(arr, i);
            maxNum = Math.max(len, maxNum);
        }
    }
    return maxNum;
}

console.log("================>>>>>>>>>", helper(arr, 0));





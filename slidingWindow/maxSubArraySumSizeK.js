const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 4;



function brutForce(arr, k) {

    let maxSum = Number.MIN_VALUE;
    for (let i = 0; i < arr.length - k + 1; i++) {
        let currSum = 0;
        for (let j = 0; j < k; j++) {
            currSum += arr[i + j];
            maxSum = Math.max(currSum, maxSum);
        };
    };
    return maxSum;
};



function fun(arr, k) {

    let winSum = 0;
    for (let i = 0; i < k; i++) {
        winSum += arr[i];
    };

    console.log("======windowSum", winSum);
    let nextWinSum = winSum;
    for (let i = k; i < arr.length; i++) {
        console.log("===========nextwindowSum", nextWinSum);
        console.log("====i==i-k==arr[i-k]===arr[i]", i, i - k, arr[i - k], arr[i]);
        nextWinSum = nextWinSum - arr[i - k] + arr[i];
        console.log("======nextWinSum====windowSum", nextWinSum, winSum);
        winSum = Math.max(winSum, nextWinSum);
        console.log("==========max", winSum);
    };
    return winSum;
};

const res = fun(arr, k);
console.log("==========res", res);


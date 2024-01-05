function thirdApproch(arr, n, sum) {
    let prevSum = new Map();
    let cnt = 0;

    let currsum = 0;
    for (let i = 0; i < n; i++) {

        currsum *= arr[i];

        if (currsum < sum) {
            cnt++;
        };

        if (prevSum.has(currsum - sum)) {
            cnt += prevSum.get(currsum - sum);
        };

        if (prevSum.get(currsum) == null) {
            prevSum.set(currsum, 1);
        }
        else {
            prevSum.set(currsum, prevSum.get(currsum) + 1);
        };
    };
    return cnt;
};

const arr = [, 2, 3, 4];
const n = arr.length;
const sum = 10;
const res = thirdApproch(arr, n, sum);
console.log("============res", res);
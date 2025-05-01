

/**1. PRINT ALL SUB ARRAYS
 * 2. SUB ARRAY SUM EQUAL TO K
 * 3. SUB ARRAY SUM EQUAL TO ZERO
 * 4. SUB ARRAY SUM DIVISIBLE BY K
 */



function firstApproch(arr, n, target) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let cursum = 0;
            for (let k = i; k < j; k++) {
                cursum += arr[k];
            }
            if (cursum === target) {
                cnt++;
            }
        }
    }
};

function secondApproch(arr, n, target) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        let currsum = 0;
        for (let j = i; j < n; j++) {
            currsum += arr[j];
            if (currsum === target) {
                cnt++;
            };
        };
    };
};


// x=currSum-sum
function findSubarraySum(arr, n, target) {
    let prevSum = new Map();
    let cnt = 0;

    let currsum = 0;
    for (let i = 0; i < n; i++) {
        currsum += arr[i];
        if (currsum === target) {
            cnt++;
        };

        if (prevSum.has(currsum - target)) {
            cnt += prevSum.get(currsum - target);
        };

        if (prevSum.get(currsum) === null) {
            prevSum.set(currsum, 1);
        }
        else {
            prevSum.set(currsum, prevSum.get(currsum) + 1);
        };
    };
    return cnt;
};

const arr = [10, 2, -2, -20, 10];
const target = -10;
const n = arr.length;
console.log(findSubarraySum(arr, n, target));



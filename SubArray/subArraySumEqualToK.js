

/**1. PRINT ALL SUB ARRAYS
 * 2. SUB ARRAY SUM EQUAL TO K
 * 3. SUB ARRAY SUM EQUAL TO ZERO
 * 4. SUB ARRAY SUM DIVISIBLE BY K
 */



function firstApproch(arr, n, sum) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let cursum = 0;
            for (let k = i; k < j; k++) {
                cursum += arr[k];
            }
            if (cursum === sum) {
                cnt++;
            }
        }
    }
};

function secondApproch(arr, n, sum) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        let currsum = 0;
        for (let j = i; j < n; j++) {
            currsum += arr[j];
            if (currsum === sum) {
                cnt++;
            };
        };
    };
};


// x=currSum-sum
function thirdApproch(arr, n, sum) {
    let prevSum = new Map();
    let cnt = 0;

    let currsum = 0;
    for (let i = 0; i < n; i++) {
        currsum += arr[i];
        if (currsum == sum) {
            cnt++;
        };

        if (prevSum.has(currsum - sum)) {
            cnt += prevSum.get(currsum - sum);
        };

        if (!prevSum.has(currsum)) {
            prevSum.set(currsum, 1);
        }
        else {
            prevSum.set(currsum, prevSum.get(currsum) + 1);
        };
    };
    return cnt;
};

const arr = [10, 2, -2, -20, 10];
const sum = -10;
const n = arr.length;
console.log(thirdApproch(arr, n, sum));



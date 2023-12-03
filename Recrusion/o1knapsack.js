/**
 *  1. FIND ALL COMBINATION OF WEIGHT ARRAY
 *  2. FIND PROFIT OF THESE COMBINATION
 *  3. FIND MAX PROFIT WHO'S COMBINATION OF TOATAL WEIGHT <=CAPACITY  
 */


function KNPS(capacity, weightArr, profitArr, N) {

    if (N === 0 || capacity === 0) {
        return 0;
    }

    if (weightArr[N - 1] <= capacity) {
        const excludeItem = KNPS(capacity, weightArr, profitArr, N - 1);

        const includeItem = profitArr[N - 1] + KNPS(capacity - weightArr[N - 1], weightArr, profitArr, N - 1);

        return Math.max(includeItem, excludeItem);

    } else {
        return KNPS(capacity, weightArr, profitArr, N - 1);
    }
};



const profitArr = [60, 100, 120];
const weightArr = [10, 20, 30];
let capacity = 50;
let n = profitArr.length


const res = KNPS(capacity, weightArr, profitArr, n);
console.log("=================Result", res);


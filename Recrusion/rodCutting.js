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



const profitArr = [1, 5, 8, 9, 10, 17, 17, 20];
const weightArr = [1, 2, 3, 4, 5, 6, 7, 8];
let capacity = weightArr.length;
let n = profitArr.length


const res = KNPS(capacity, weightArr, profitArr, n);
console.log("=================Result", res);


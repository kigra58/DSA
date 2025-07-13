
/*
Find out the sub array sum from array which have lagest sum 
 */
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];





function bruteForch(arr) {
    let res = arr[0];
  
    // Outer loop for starting point of subarray+
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}


const res1= bruteForch( [2, 3, -8, 7, -1, 2, 3]);
console.log("bruteforce==========>",res1);






/**
 *  ALGORITHM
 */
function kadens(arr) {
    let currSum = 0; maxSum = arr[0];
    arr.forEach(ele => {
        currSum =currSum+ele;
        currSum=Math.max(currSum,ele);  
        maxSum = Math.max(currSum, maxSum);
     
    });
    return maxSum;
};


const kadenseRes=kadens( [2, 3, -8, 7, -1, 2, 3]);
console.log("kadenseRes==========>",kadenseRes);








/**
 *  DRY RUN CODE HERE
 */
function fun(arr) {
    let sum = 0, maxi = arr[0];
    const ansArr = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.index = i;
        obj.value = arr[i];
        sum += arr[i];
        obj.sum = sum;
        maxi = Math.max(sum, maxi);
        obj.maxi = maxi;

        if (sum < 0) {
            sum = 0;
            obj.sum = 0;
            obj.sumZero = 0;
        } else {
            obj.sum = sum;
            obj.sumZero = sum
        }
        // console.log("=========obj", obj);
        ansArr.push(obj);
    }
    console.log("==========ans", ansArr);
    return maxi;

};

const res = fun(arr);
console.log("==============res", res);

/*
Return the majority ele of the arr
which ele have freq more return the ele

*/


// Brute force approach
function brutForce(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }
        if (count > Math.floor(n / 2)) {
            return nums[i];
        }
    }
    return -1; // If no majority element
}

/*

Approch :
Certainly! This approach uses the Boyer-Moore Voting Algorithm

candidate = 2, count = 1
candidate = 2, count = 2
candidate = 2, count = 1 (after seeing 1)
candidate = 2, count = 0 (after seeing 1)
candidate = 1, count = 1 (reset to 1)
candidate = 1, count = 0 (after seeing 2)
candidate = 2, count = 1 (reset to 2)
Final candidate is 2, which is the majority element.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
        console.table({count,num,candidate})
    }
    return candidate;
}

// Example usage:
console.log(majorityElement([2,2,1,1,1,2,2,3])); // Output: 2/*
// console.log(majorityElement([3,2,3])); // Output: 3
// console.log(majorityElement([2,3])); // Output: 3

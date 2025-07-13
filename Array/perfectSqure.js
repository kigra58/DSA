

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    const numSet = new Set(nums); // remove duplicates
    let maxLen = 0;

    for (let num of numSet) {
        // Only start counting if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            maxLen = Math.max(maxLen, currentStreak);
        }
    }
    return maxLen;
};
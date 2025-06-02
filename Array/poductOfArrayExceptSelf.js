
function bruteForce(nums) {
    const n = nums.length;
    const result = [];
    for (let i = 0; i < n; i++) {
        let currentProduct = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                currentProduct *= nums[j];
            }
        }
        result.push(currentProduct);
    }
    return result;
}






function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n)

    // Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // Calculate suffix products and multiply
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}

const res = productExceptSelf([1, 2, 3, 4]);
console.log(res); // Output: [24, 12, 8, 6]
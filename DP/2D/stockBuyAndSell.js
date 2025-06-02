
function bruteForce(arr){
    let maxProfit=0;
    for(let i=0;i<arr.length;i++){
       
        for(let j=i+1;j<arr.length;j++){
           
            if(arr[j]>arr[i]){
                const profit=arr[j]-arr[i]
                console.log(`buy at ${arr[i]} and sell at ${arr[j]} profit is ${profit}`);
                maxProfit=Math.max(maxProfit,profit)
               
            }
        }
    }

    console.log(maxProfit)
    
    return maxProfit;
    
}


/**
 
 1. find the min price of stock 
 2. find the profit by subtracting the min price from the current price
 3. find the max profit by comparing the current profit with the max profit
 4. return the max profit

 */

function optimize(arr) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {
        minPrice = Math.min(minPrice, arr[i]);
        const profit = arr[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        console.log(`buy at ${minPrice} and sell at ${arr[i]} profit is ${maxProfit}`);
      
    }

    console.log(maxProfit);
    return maxProfit;
}

/*
1. Initialize Total Profit
    Start with totalProfit = 0.

2. Iterate Through Prices
    Loop from the second day (i = 1) to the last day.

3. Check for Profit Opportunity
    For each day, check if today’s price is higher than yesterday’s (prices[i] > prices[i-1]).

4. Add Profit
    If yes, calculate the profit (prices[i] - prices[i-1]) and add it to totalProfit.

5. Repeat
    Continue this for all days.

6. Return Result
    After the loop, return totalProfit.
*/
function maxProfitII(prices) {
    let totalProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            const profit = prices[i] - prices[i - 1]; // today - yesterday
            totalProfit += profit;
            console.log(`Buy at ${prices[i - 1]}, sell at ${prices[i]}, profit: ${profit}`);
        }
    }
    console.log("Total profit:", totalProfit);
    return totalProfit;
}

// Example usage:
const res2 = maxProfitII([7,1,5,3,6,4]);
console.log(res2);



function maxProfitIII(prices) {
    if (!prices || prices.length === 0) return 0;

    let n = prices.length;
    let leftProfits = Array(n).fill(0);
    let rightProfits = Array(n + 1).fill(0);

    // Left pass: max profit if sold up to day i
    let minPrice = prices[0];
    for (let i = 1; i < n; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        const leftPrice=prices[i] - minPrice
        leftProfits[i] = Math.max(leftProfits[i - 1], leftPrice);
    }

    // Right pass: max profit if bought from day i
    let maxPrice = prices[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i]);
        const rightPrice=maxPrice - prices[i];
        rightProfits[i] = Math.max(rightProfits[i + 1], rightPrice);
    }

    // Combine: max of left + right
    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
        const combinePrice=leftProfits[i] + rightProfits[i + 1]
        maxProfit = Math.max(maxProfit, combinePrice);
    }
    return maxProfit;
}

// Example usage:
const res3 = maxProfitIII([3,3,5,0,0,3,1,4]);
console.log(res3); // Output: 6




// const res=optimize([7,1,5,3,6,4])

// console.log(res)

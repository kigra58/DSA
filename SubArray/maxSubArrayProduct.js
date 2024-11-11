function maxSubarrayProduct(arr) {
    const dryRun = [];
    let maxi = arr[0], obj = {};

    for (let i = 0; i < arr.length; i++) {
        console.log("=========iiiiiii", i);
        obj.i = i;
        obj.value = arr[i];
        let mul = arr[i];
        obj.pro = mul;

        for (let j = i + 1; j < arr.length; j++) {
            obj.j = j;
            maxi = Math.max(maxi, mul);
            obj.maxi = maxi;
            mul *= arr[j];
            obj.uptMul = mul;
        };
        maxi = Math.max(maxi, mul);
        obj.uptMaxi = maxi;
    }
    dryRun.push(obj);
    console.log("=======dry Run", dryRun);
    return maxi;
};


/**
 *  USING KADEN'S ALGORITHMS
 */
function usingKadensAlgo(arr) {


};


/**
 * USING PREFIX SUFFIX APPROCH O(N) O(1)
 */
function fun(arr) {

    let prefixPro = 1, suffixPro = 1, maxPro = arr[0];

    for (let i = 0; i < arr.length; i++) {

        prefixPro *= arr[i];
        // traverse from reverse;
        suffixPro *= arr[arr.length - i - 1];

        if (prefixPro === 0) prefixPro = 1;
        if (suffixPro === 0) suffixPro = 1;

        maxPro = Math.max(maxPro, Math.max(prefixPro, suffixPro));
    };
    return maxPro;
};




function maxSubArrayProduct(arr){
    let globalProduct=1;
    for(let i=0;i<arr.length;i++){
         let localProduct=1;

        for(let j=i;j<arr.length;j++){
            localProduct=localProduct*arr[j];
            if(globalProduct<localProduct){
                globalProduct=localProduct;
            }
        }
    }
    return globalProduct;
     
}
const res_=maxSubArrayProduct([-2, 6, -3, -10, 0, 2]);

console.log("ressssssssss",res_);










// const arr = [1, -2, -3, 0, 7, -8, -2];
// const arr = [-8, 5, 3, 1, 6];
// const arr = [6, -3, -10, 0, 2];
// const res = usingKadensAlgo(arr);
// const res = maxSubarrayProduct(arr);
// const res = fun(arr);

// console.log("==============res", res);





const arr = [1, 2, 3, 4, 5];

function fun(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const subArray = [];
            let z = [];
            let sum = 0;
            let product = 1
            for (let k = i; k <= j; k++) {
                z.push(k);
                subArray.push(arr[k]);
                sum += arr[k];
                product *= arr[k];
            }
            // console.log(ans)
            // console.log({ i, j, z, ans })
            result.push({ i, j, k: z, subArray, sum, product });
        }
    }
    return result;
}


function recFun(arr, start, end) {

    if (end === arr.length) return;

    else if (start > end) {
        recFun(arr, 0, end + 1);
    }

    else {
        console.log("[");
        for (let i = start; i < end; i++) {
            console.log(arr[i] + ", ");
        }

        console.log(arr[end] + "]<br>");
        recFun(arr, start + 1, end);
    }
    return;
}





// const res = fun(arr);
const res = recFun(arr, 0, 0);
console.log(res);
const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];

const k = 4;

function fun(arr, k) {
    let winSum = 0;
    for (let i = 0; i < k; i++) {
        winSum += arr[i];
    };

}



const res = fun(arr, k);
console.log("==========res", res);


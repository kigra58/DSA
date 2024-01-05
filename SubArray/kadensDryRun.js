const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

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
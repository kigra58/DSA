// leet code 

function spiral(arr) {
    if (!arr || arr.length === 0) return [];
    const res = [];
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from Left to Right
        for (let i = left; i <= right; i++) {
            console.log("12==========",arr[top][i])
            res.push(arr[top][i]);
        }
        top++;

        // Traverse from Top to Bottom
        for (let i = top; i <= bottom; i++) {
                console.log("19==========",arr[i][right])
            res.push(arr[i][right]);
        }
        right--;

        // Traverse from Right to Left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                console.log("25==========",arr[bottom][i])
                res.push(arr[bottom][i]);
            }
            bottom--;
        }

        // Traverse from Bottom to Top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log("33==========",arr[i][left])
                res.push(arr[i][left]);
            }
            left++;
        }
    }
    return res;
}

const input = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const res = spiral(input);
console.log(res);

/*
OUTPUT

1,2,3,6,9,8,7,4,5

[0][0],[0][1],[0][2],

[1][2],[2][2],[2][1],

[2][0],[1][0],[1][1]
*/
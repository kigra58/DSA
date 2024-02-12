


function allSubString(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let ans = "";
            for (let k = i; k <= j; k++) {
                ans += str[k];
            }
            console.log(ans);
        }
    }
}
const res = allSubString("leetcode");
console.log("res: " + res);




function check(str) {
    if (str.length > 0) {
        let temp = ""
        for (let index = str.length - 1; index >= 0; --index) {
            temp = temp + str[index];
        }
        if (temp === str) return true;
        else return false;
    } else {
        return false;
    }
}




function subsets(str = "abcd", ans = "", index = 0) {
    const N = str.length;
    if (N === index) {

        console.log("========", check(ans) ? ans:"");
        return;
    }
    subsets(str, ans + str[index], index + 1);
    subsets(str, ans, index + 1);
};

subsets();
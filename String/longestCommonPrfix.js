/*
1. flower
2. flow
3. flight

=============Approach===============

1. Find minimum length of string in the given array of strings.
2. Compare characters at each position for all strings up to the minimum length.
3. If all characters match, add to prefix; else, break.
*/

function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    // Find the minimum length string
    let minLen = Math.min(...strs.map(str => str.length));
    let prefix = "";

    for (let i = 0; i < minLen; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"




function commonPrefixLen(s1, s2) {
    let idx = 0;
    const len = Math.min(s1.length, s2.length);

    // Compare s1 and s2
    while (idx < len && s1[idx] === s2[idx]) {
        idx++;
    }

    return idx;
}



function longestCommonPrefix(arr) {
    const res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const len = commonPrefixLen(res, arr[i]);
        res = res.substring(0, len);
    }

    return res;
}



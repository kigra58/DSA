/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [];
    if (s.length < p.length) return res;

    const pCount = Array(26).fill(0);
    const sCount = Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - aCharCode]++;
        sCount[s.charCodeAt(i) - aCharCode]++;
    }

    if (sCount.join() === pCount.join()) res.push(0);

    for (let i = p.length; i < s.length; i++) {
        sCount[s.charCodeAt(i) - aCharCode]++;
        sCount[s.charCodeAt(i - p.length) - aCharCode]--;
        if (sCount.join() === pCount.join()) res.push(i - p.length + 1);
    }

    return res;
};
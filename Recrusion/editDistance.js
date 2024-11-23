const s1 = "sunday";
const s2 = "saturday";

/**
 * CONVERT STRING S1 -> S2  FIND MIN NUMBER OF OPERATION TO PERFORMED
 */

/**
 *  OPERATION-> 1. INSERT 
 *              2. REMOVE
 *              3. REPLACE
 */

/**
 * INSERT -> Fun(M,N-1)
 * REMOVE -> Fun(M-1,N)
 * REPLACE -> Fun(M-1,N-1)
 */

function editDistance(s1, s2, s1Len, s2Len) {

    // If first string is empty, the 
    // only option is to insert all 
    // characters of second string into first
    if (s1Len === 0) {
        return s2Len;
    }
    // same case
    if (s2Len === 0) {
        return s1Len;
    }

    let matchLastChar
    // match condition
    if (s1[s1Len - 1] === s2[s2Len - 1]) {
        return matchLastChar = editDistance(s1, s2, s1Len - 1, s2Len - 1);

    }
    // if not match perform the operation
    const insert = editDistance(s1, s2, s1Len, s2Len - 1);
    const remove = editDistance(s1, s2, s1Len - 1, s2Len);
    const replce = editDistance(s1, s2, s1Len - 1, s2Len - 1);


    return 1 + Math.min(insert, remove, replce);
}

const res = editDistance(s1, s2, s1.length, s2.length);

console.log("===============res", res);
/**
 *  n!=n* (n-1)
 */

function fact(N) {
    if (N <= 1) return 1;
    return fact(N - 1) * N;
};

const res = fact(3);

console.log("======res", res);
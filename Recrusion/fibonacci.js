

function fibo(N) {

    if (N === 0 || N === 1) return N;
    return fibo(N - 2) + fibo(N - 1);
}

const res = fibo(10);

console.log("=============", res);


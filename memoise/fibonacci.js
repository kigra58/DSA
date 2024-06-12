let functionCalled=0;

function fibo(N) {
    if(N<=1) return 1;
    functionCalled++;
    return fibo(N-1)+fibo(N-2);
};

function usingMemoise(N,memo={}){
    if(N in memo) return memo[N];
    if(N<=1) return 1;
    
    functionCalled++;
    memo[N]=fibo(N-1,memo)+fibo(N-2,memo);
    return memo[N]; 
};

function facttorialUsingMemo(N,memo={}) {
    if(N in memo) return memo[N];
    if(N<=1) return 1;
    functionCalled++;
    memo[N]=facttorialUsingMemo(N-1,memo)*N;
    return memo[N];
}
    
    
    
    // const res=fibo(5);
const res=facttorialUsingMemo(3);
console.log("first call to factorial",functionCalled)
console.log("res:",res);




// BOTTOM UP APPROCH 
function fact(n) {
    let result=[1000];
    if (n >= 0) {
       result[0] = 1;
       for (let i = 1; i <= n; ++i) {
          result[i] = i * result[i - 1];
       }
       return result[n];
    }
}



// BOTTOM UP APPROCH
function fibo(n) {
    let result=[1000];
    if (n >= 0) {
       result[0] = 1;
       result[1] = 1;
       for (let i = 2; i <= n; ++i) {
          result[i] = i + result[i - 1];
       }
       return result[n];
    }
}

 

// const res= fibo(5);
// console.log("============Res",res);


/**
 * TOP DOWN APPROCH
 */
let num=10;
let DP=new Array(num+1).fill(-1);
function fiboTopDown(n){
  if(n==0)return 0;
  if(n==1)return 1;
  if(DP[n]===-1) {
     return  DP[n]=fiboTopDown(n-1)+fiboTopDown(n);
   }else{
      return DP[n];
  } 
}

// TABULATION
function fiboBottomUP(n){
    const dp=new Array(n+1).fill(-1);
    if(n<2) return n;
    dp[0]=0;
    dp[1]=1;
    
    for(let i=2;i<n+1;i++){
        dp[i]=dp[i-2]+dp[i-1];
    }
    return dp[n];
}



console.log("=============>",factTopDown(num));





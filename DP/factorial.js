/**
 * FACTORIAL
 * @param {*} n 
 * @returns 
 */
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


/**
 *  FIBONACCI
 * @param {*} n 
 * @returns 
 */
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

 

const res= fibo(5);
console.log("============Res",res);

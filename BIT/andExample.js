/**
 * CHECK NUMBER IS ODD OR EVEN BY AND OPRATOR
 */

function check(N){
 const res=N&1;
  if(res === 0){
    // EVEN NUMBER
    return true;
  };
  // ODD NUMBER
  return false;
};
// const result = check(4);
// console.log("res:",result);



/**
 *  CHECK NUMBER  POWER OF 2
 */
function isPowerOfTwo(N){
  if(N<=0) return false;
  return (N&(N-1)) ===0;
};

const res = isPowerOfTwo(16);
console.log("res:",res);



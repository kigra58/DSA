
/**
 * INCERMENT AND DECREMENT BY ONE
 */

function incAndDec() {
    const XOR_BY =1;
    for (let index = 0; index <20; index++) {
        if(index%2  === 0) {
            // EVEN NUMBER
            console.log("Even Number", index, index^XOR_BY);
        }
        else {
            // ODD NUMBER
            console.log("Odd Number",index ,index^XOR_BY);
        }
    };
};

/**
 *  SWAP TWO NUMBERS
 */
function swap(a, b) {
    a=a^b;
    b=a^b;
    a=a^b;
   return [a,b]
}
const out=swap(1,2);
console.log("out", out);




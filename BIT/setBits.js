

/**
 *  NUMBER OF SET BITS IN NUMBER
 */

function numberOfSetBits(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
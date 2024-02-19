function main(arr, target) {
  arr.sort((a, b) => a - b);
  let l, r;

  for (let i = 0; i < arr.length - 3; i++) {
    l = i + 1;
    r = arr.length - 1;
    for (let j = 0; j < arr.length - 2; j++) {
      while (l < r) {
        const sum = arr[l] + arr[r];
        if (sum === target) {
          return [i, j, k];
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
}

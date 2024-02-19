function bruteForce(arr) {
  let l, r, minSum, sum, minL, minR;

  if (arr.length < 2) {
    console.log("Invalid Input");
    return;
  }

  minL = 0;
  minR = 1;
  minSum = arr[0] + arr[1];

  for (l = 0; l < arr.length - 1; l++) {
    for (r = l + 1; r < arr.length; r++) {
      sum = arr[l] + arr[r];
      if (Math.abs(minSum) > Math.abs(sum)) {
        minSum = sum;
        minL = l;
        minR = r;
      }
    }
  }
  return [minL,minR];
}



function usingTwoPointer(arr) {
  let  minSum = Number.MAX_VALUE;;
  let l = 0, r = arr.length - 1;
  let minL = l, minR = arr.length - 1;

  if (arr.length < 2) {
    console.log("Invalid Input");
    return;
  }

  while (l < r) {
    const  sum = arr[l] + arr[r];
    if (Math.abs(sum) < Math.abs(minSum)) {
      minSum = sum;
      minL = l;
      minR = r;
    }
    if (sum < 0) {
      l++;
    } else {
      r--;
    }
  };
  return [minL, minR];
}

const res=bruteForce([1, 60, -10, 70, -80, 85]);
console.log("res:",res);

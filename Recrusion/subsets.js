/**
 * 1.item include
 * 2.item not include
 */




/**
 * POWER SETS OF ARRAY
 * @param {*} arr 
 * @param {*} ans 
 * @param {*} index 
 * @returns 
 */
function subsetsArr(arr = [1, 2, 3], ans = [], index = 0) {
  const N = arr.length;
  if (N === index) {
    console.log("================", ans)
    console.log("sum=>", subSetsSum(ans));
    return;
  }
  subsetsArr(arr, ans.concat(arr[index]), index + 1);
  subsetsArr(arr, ans, index + 1);
};





/**
 * POWER SETS OF STRING
 * @param {*} str 
 * @param {*} ans 
 * @param {*} index 
 * @returns 
 */
function subsets(str = "abc", ans = "", index = 0) {
  const N = str.length;
  if (N === index) {
    console.log("========", ans);
    return;
  }
  subsets(str, ans + str[index], index + 1);
  subsets(str, ans, index + 1);
};

// subsets();
subsetsArr();
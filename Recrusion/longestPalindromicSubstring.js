// const s1="abcd";


/**
 * 1. take item 
 * 2. not take item
 */


function subsets(str = "abcd", ans = "", index = 0) {
  const N = str.length;
  if (N === index) {
    
    console.log("========", ans,);
     
    return;
  }
  subsets(str, ans + str[index], index + 1);
  subsets(str, ans, index + 1);
};

subsets();

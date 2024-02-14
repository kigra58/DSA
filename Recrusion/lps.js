/**
 * LONGEST PALINDROMIC SUBSTRING
 * BRUTEFORCE APPROCH O(N**3) O(1)
 * ODD EVEN APPROCH O(N**2)  O(N)
 * MANCHERS ALORITHM O(N) O(1)
 */


function printSubStr(str, low, high) {
  for (let i = low; i <= high; ++i) {
    console.log(str[i]);
	};
};


function LPS(s) {
  const N = s.length;
	let start = 0, end = 1;
	let low, hi;
  
  
	for (let i = 0; i < N; i++) {
		low = i - 1;
		hi = i;

       // EVEN SIZE SUBSTRING
		while (low >= 0 && hi < N && s[low] === s[hi]) {
			if (hi - low + 1 > end) {
                start = low;
				end = hi - low + 1;
			}
			low--;
			hi++;
		};
    
		low = i - 1;
		hi = i + 1;   //  ONLY HIGH WILL BE CHANGED
    
	  // ODD SIZE SUBSTRING
		while (low >= 0 && hi < N && s[low] === s[hi]) {
			if (hi - low + 1 > end) {
                start = low;
				end = hi - low + 1;
			};
			low--;
			hi++;
		};
	};
  
	console.log("Longest palindrome substring is: ");
	printSubStr(s, start, start + end - 1);
	
	return end; 
}


const str="aabaa";
console.log("Length is: " + LPS(str));

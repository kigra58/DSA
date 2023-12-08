
function longestPalin(s) {

	let count = -1;
	let ans = "";

	const N = s.length;

	const dp = Array.from({ length: N }, () => Array(N).fill(false));

	for (let g = 0; g < N; g++) {
		for (let i = 0, j = g; j < N; i++, j++) {
			// Check if the substring is of length 1 (base case).
			if (g === 0) {
				dp[i][j] = true;
			} else if (g === 1) {
				// Check if the substring is of length 2 (base case).
				dp[i][j] = s[i] === s[j];
			} else {
				// Check if the current substring is a 
				// palindrome based on its ends.
				dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
			}

			// Update the longest palindrome and its length if found.
			if (dp[i][j] && count < j - i + 1) {
				ans = s.substring(i, j + 1);
				count = ans.length;
			}
		}
	}
	return ans;
}

const str = "forgeeksskeegfor";
console.log(longestPalin(str));

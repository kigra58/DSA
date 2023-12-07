
function LCS(X, Y, m, n, dp){
	if (m == 0 || n == 0)
		return 0;
	if (X[m - 1] == Y[n - 1])
		return dp[m][n] = 1 + LCS(X, Y, m - 1, n - 1, dp);

	if (dp[m][n] != -1) return dp[m][n];
	
	return dp[m][n] = Math.max(LCS(X, Y, m, n - 1, dp),
						LCS(X, Y, m - 1, n, dp));
}



let X = "AGGTAB";
let Y = "GXTXAYB";

let m = X.length;
let n = Y.length;
const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(-1));
console.log("Length of LCS is " + LCS(X, Y, m, n, dp));



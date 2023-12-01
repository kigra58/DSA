// Returns length of LCS for X[0..m-1], Y[0..n-1]
function LCS( X, Y , m , n ) { 
	if (m == 0 || n == 0) 
		return 0; 
	if (X[m-1] == Y[n-1]) {
        return 1 + LCS(X, Y, m-1, n-1); 
    }
	else{
        return Math.max(LCS(X, Y, m, n-1), LCS(X, Y, m-1, n)); 
    }
} 

const s1 = "AGGTAB";
const s2 = "GXTXAYB";
const m = s1.length;
const n = s2.length; 

console.log("Length of LCS is" + " " + LCS( s1, s2, m, n ) ); 
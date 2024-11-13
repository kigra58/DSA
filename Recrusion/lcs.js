

function LCS( X, Y , m , n ) { 
    // base case
	if (m == 0 || n == 0) 
		return 0;
    
    // match last element
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
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = Array.from({ length: cols }, () => Array(rows));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};




/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * Transposes the matrix in-place if it's square.
 */
var transpose1 = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    if (n !== m) throw new Error("In-place transpose only works for square matrices.");
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
};

// Example usage for square matrix:
// const input = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(transpose(input)); // [[1,4,7],[2,5,8],[3,6,9]]
/**
 * Rotates the given N x N matrix by 90 degrees clockwise in-place.
 * @param {number[][]} matrix
 * @return {void}
 */
function rotate(matrix) {
    const n = matrix.length;
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Example usage:
const mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
rotate(mat);
console.log(mat); // Output: [[7,4,1],[8,5,2],[9,6,3]]
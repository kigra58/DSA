/**
 *  FIND MIN PATH IN GRID FROM SOURCE TO DESTINATION 
 *  PROBLEM LIKE KNIGHT STEPS 
 */

const ROW = 4;
const COL = 4;
const grid = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
];

const vis = Array.from(Array(ROW), () => Array(COL).fill(false));

let dRow = [-1, 0, 1, 0];
let dCol = [0, 1, 0, -1];

function isValid(vis, row, col) {

	if (row < 0 || col < 0 || row >= ROW || col >= COL)
		return false;
	if (vis[row][col])
		return false;
	return true;
}


function BFS(grid, vis, row, col) {
	let queue = [];
	vis[row][col] = true;
	queue.push([row, col]);

	while (queue.length != 0) {
		const cell = queue[0];
		const curX = cell[0];
		const curY = cell[1];
		console.log(grid[x][y] + " ");
		queue.shift();

		for (let i = 0; i < 4; i++) {
			const adjx = curX + dRow[i];
			const adjy = curY + dCol[i];
			if (isValid(vis, adjx, adjy)) {
				vis[adjx][adjy] = true;
				queue.push([adjx, adjy]);
			}
		}
	}
}

BFS(grid, vis, 0, 0);




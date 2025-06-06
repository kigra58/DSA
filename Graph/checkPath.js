const arr = [
	[0, 0, 0, -1, 0],
	[-1, 0, 0, -1, -1],
	[0, 0, 0, -1, 0],
	[-1, 0, 0, 0, 0],
	[0, 0, -1, 0, 0]
];

const row = 5;
const col = 5;
// Directions
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function isPath(arr) {
	let queue = [];
	queue.push([0, 0]);

	while (queue.length > 0) {
		let p = queue[0];
		queue.shift();

		arr[p[0]][p[1]] = -1;

		// Destination is reached.
		if (p[0] == row - 1 && p[1] == col - 1)
			return true;

		for (let i = 0; i < 4; i++) {
			const a = p[0] + dir[i][0];
			const b = p[1] + dir[i][1];

			if (a >= 0 && b >= 0 && a < row && b < col && arr[a][b] != -1) {
				if (a == row - 1 && b == col - 1)
					return true;
				queue.push([a, b]);
			}
		}
	}
	return false;
}

// Path from arr[0][0] to arr[row][col]
if (isPath(arr))
	console.log("Yes");
else
	console.log("No");




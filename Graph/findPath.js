const ROW = 4;
const COL = 4;
const grid = [  
[1, 2, 3, 4 ],
[5, 6, 7, 8 ],
[9, 10, 11, 12 ],
[13, 14, 15, 16 ] 
];

const vis = Array.from(Array(ROW), ()=> Array(COL).fill(false));

// Direction vectors
let dRow = [-1, 0, 1, 0 ];
let dCol = [0, 1, 0, -1 ];

function isValid(vis, row, col){
	// If cell lies out of bounds
	if (row < 0 || col < 0 || row >= ROW || col >= COL)
		return false;

	// If cell is already visited
	if (vis[row][col])
		return false;

	// Otherwise
	return true;
}


function BFS( grid, vis,row, col){
	let queue = [];
	vis[row][col] = true;
	queue.push([row, col ]);

	while (queue.length!=0) {
		const cell = queue[0];
		const x = cell[0];
		const y = cell[1];
		console.log(grid[x][y] + " ");
		queue.shift();

		for (let i = 0; i < 4; i++){
			const adjx = x + dRow[i];
			const adjy = y + dCol[i];
			if (isValid(vis, adjx, adjy)){
				vis[adjx][adjy] = true;
				queue.push([adjx, adjy]);
			}
		}
	}
}

BFS(grid, vis, 0, 0);




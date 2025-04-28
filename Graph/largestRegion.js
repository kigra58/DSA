/**
 *  1.TRAVERSE THE GRID 
 *  2. 
 */
let grid=[
    [ 0, 0, 1, 1, 0 ],
    [ 1, 0, 1, 1, 0 ],
    [ 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1 ] 
];
let ROW, COL, cnt;

function isSafe(grid,row,col,visited){
		return (
			(row >= 0) && (row < ROW) && (col >= 0)
			&& (col < COL)
			&& (grid[row][col] == 1 && !visited[row][col]));
}


function DFS(grid,row,col,visited){
		let dRow = [ -1, -1, -1, 0, 0, 1, 1, 1 ];
		let dCol = [ -1, 0, 1, -1, 1, -1, 0, 1 ];
		visited[row][col] = true;
		for (let k = 0; k < 8; ++k){
            let dx = row + dRow[k];
            let dy = col + dCol[k];
			if (isSafe(grid, dx, dy, visited)){
                cnt++
				DFS(grid, dx, dy, visited);
			}
		}	
}


function largestRegion(grid){
        const visited = Array.from(Array(ROW), () => Array(COL).fill(false));
		let result = 0;
		for (let i = 0; i < ROW; i++){
			for (let j = 0; j < COL; j++){
				if (grid[i][j] == 1 && !visited[i][j]){
					cnt = 1;
					DFS(grid, i, j, visited);
					result = Math.max(result, cnt);
				}
			}
		}
		return result;
}

					
ROW = 4;
COL = 5;
console.log(largestRegion(grid));






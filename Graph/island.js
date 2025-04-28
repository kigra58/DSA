/**
 *  1.TRAVERSE THE GRID 
 *  2.FIND THE CONNECTED COMPONENT COUNT
 */

let grid = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1] ,
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
    ];
    
    const ROW = grid.length, COL = grid[0].length;
        
    function isSafe(grid,row,col,visited){
            return (row >= 0) && (col >= 0)  && (row < ROW) && 
            (col < COL) && (grid[row][col] == 1 && !visited[row][col]);
    }
    
    /**
     *  USING DFS
     * @param {*} grid 
     * @param {*} row 
     * @param {*} col 
     * @param {*} visited 
     */
    function DFS(grid, row, col, visited){
            const dRow = [-1, -1, -1, 0, 0, 1, 1, 1];
            const dCol = [-1, 0, 1, -1, 1, -1, 0, 1];
            visited[row][col] = true;
            
            for (let k = 0; k < 8; ++k){
                const dx = row + dRow[k];
                const dy = col + dCol[k];
                if (isSafe(grid, dx, dy, visited)){
                    DFS(grid, dx, dy, visited);
                }
            }		
    }
    
    /**
     *  USING BFS
     * @param {*} mat 
     * @param {*} si 
     * @param {*} sj 
     * @param {*} vis 
     */
    function BFS(mat,si, sj,vis){
        const row = [ -1, -1, -1, 0, 0, 1, 1, 1 ];
        const col = [ -1, 0, 1, -1, 1, -1, 0, 1 ];
        const queue = [];
        queue.push([si, sj]);
        vis[si][sj] = true;
        while (queue.length !== 0){
            const cellX = queue[0][0];
            const cellY = queue[0][1];
            queue.shift();
            for (let k = 0; k < 8; k++){
                const dx=cellX + row[k];
                const dy=cellY + col[k];
                if (isSafe(mat, dx,dy, vis)){
                    vis[dx][dy] = true;
                    queue.push([dx, dy]);
                }
            }
        }
    }
        
    
    function countIslands(grid){
            const visited = Array.from(Array(ROW), () => Array(COL).fill(false));
            let count = 0;
            for (let i = 0; i < ROW; ++i){
                for (let j = 0; j < COL; ++j){
                    if (grid[i][j] == 1 && !visited[i][j]){
                        BFS(grid, i, j, visited);
                        count++;
                    }
                }
            }
            return count;
    }
        
    console.log("Number of islands is = " + countIslands(grid));
        
    
    
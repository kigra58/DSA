
/**
 *  FLOOD FILL ALGO BY RECURSION
 */


const grid = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1],
];
const ROW = grid.length;
const COL = grid[0].length;

const X = [0, 1, 0, -1];
const Y = [-1, 0, 1, 0]

const x = 4,y = 4,newC = 3;


function floodFillUtil(screen, x, y, prevC, newC){
    // Base cases
    if (x < 0 || y < 0 || x >= ROW  || y >= COL) return;
    if (screen[x][y] !== prevC) return;

    // Replace the color at (x, y)
    screen[x][y] = newC;
    let dx, dy;
    for (let k = 0; k < 4; ++k) {
        dx = x + X[k];
        dy = y + Y[k];
        if(floodFillUtil(grid, dx, dy, prevC,newC)){
            return true;
        }
    }
    
    // Recur for north, east, south and west
    // floodFillUtil(screen, x + 1, y, prevC, newC);
    // floodFillUtil(screen, x - 1, y, prevC, newC);
    // floodFillUtil(screen, x, y + 1, prevC, newC);
    // floodFillUtil(screen, x, y - 1, prevC, newC);
}


function floodFill(screen, x, y, newC) {
    let prevC = screen[x][y];
    if (prevC == newC) return;
    floodFillUtil(screen, x, y, prevC, newC);
}

floodFill(grid, x, y, newC);

console.log("===========",grid);




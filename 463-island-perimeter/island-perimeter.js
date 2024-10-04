/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function (grid) {
    let col = grid[0].length;
    let row = grid.length;
    let perimeter = 0;

    const checkCell = (x, y) => {
        return (x >= 0 && x < row && y >= 0 && y < col && grid[x][y] === 1);
    }

    const dfs = (x, y) => {
        if (grid[x][y] === 0) return;
        if (grid[x][y] === 1) {
            let directions = [[x, y - 1], [x - 1, y], [x + 1, y], [x, y + 1]];
            perimeter += 4;

            //check adjacents columns
            for (const [nx, ny] of directions) {
                if (checkCell(nx, ny)) {
                    perimeter--;
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            dfs(i, j);
        }
    }

    return perimeter;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */

const checkCell = (row, col, grid, x, y) => {
    return (x >= 0 && x < row && y >= 0 && y < col && grid[x][y] === 1);
}

const checkNeighbors = (row, col, x, y, visited, grid) => {
    let neighbors = [];
    let cellPerimeter = 0;
    let directions = [[x, y - 1], [x - 1, y], [x + 1, y], [x, y + 1]];

    for (const [nx, ny] of directions) {
        if (checkCell(row, col, grid, nx, ny) && !visited[nx][ny]) {
            neighbors.push([nx, ny]);
        } else if (!checkCell(row, col, grid, nx, ny)) {
            cellPerimeter++;
        }
    }

    return { neighbors, cellPerimeter };
}

var islandPerimeter = function (grid) {
    let col = grid[0].length;
    let row = grid.length;
    let perimeter = 0;

    let visited = Array.from({ length: row }, () => new Array(col).fill(false)); //initialize visited


    const dfs = (x, y) => {
        if (!(checkCell(row, col, grid, x, y) && !visited[x][y])) {
            return;
        }

        visited[x][y] = true;

        let { neighbors, cellPerimeter } = checkNeighbors(row, col, x, y, visited, grid);

        perimeter += cellPerimeter;

        for (const [nx, ny] of neighbors) {
            dfs(nx, ny);
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                dfs(i, j);
                return perimeter;
            }
        }
    }

    return perimeter;
};

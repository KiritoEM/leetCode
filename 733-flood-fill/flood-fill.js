/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let sc_color = image[sr][sc];
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    const dfs = (x, y) => {
        if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] !== sc_color) {
            return;
        }

        image[x][y] = color;

        for (const [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;
            dfs(nx, ny);
        }
    }

    if (sc_color !== color) {
        dfs(sr, sc);
    }

    return image;
};

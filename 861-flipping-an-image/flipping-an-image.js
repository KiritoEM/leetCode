/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let len = image.length;

    for (let i = 0; i < image.length; i++) {
        let start = 0, end = image[i].length - 1;

        while (start <= end) {
            if (start === end) {
                image[i][end] = image[i][end] === 0 ? 1 : 0;
            }
            else {
                [image[i][start], image[i][end]] = [image[i][end], image[i][start]];
                image[i][start] = image[i][start] === 0 ? 1 : 0;
                image[i][end] = image[i][end] === 0 ? 1 : 0;
            }

            start++;
            end--;
        }
    }

    return image;
};
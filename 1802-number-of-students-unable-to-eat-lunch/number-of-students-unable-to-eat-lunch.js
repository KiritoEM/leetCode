/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (std, sdw) {
    let unable = 0;

    while (std.length > 0) {
        if (std[0] === sdw[0]) {
            std.shift();
            sdw.shift();
            unable = 0;
        }
        else {
            std.push(std.shift()); //revoie a la fin de la queue
            unable++;
            if (std.length === unable) break;
        }
    }

    return std.length;
};
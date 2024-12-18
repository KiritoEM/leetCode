/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1, end = n;
        let val;
        let nbr;

        while (true) {
            nbr = Math.floor((end + start) / 2)
            val = isBadVersion(nbr);
            if (val) {
                if (!isBadVersion(nbr - 1))
                    return nbr;
                end = nbr - 1;
            }
            else {
                if (isBadVersion(nbr + 1))
                    return nbr + 1;
                start = nbr + 1;
            }


        }

    };
};
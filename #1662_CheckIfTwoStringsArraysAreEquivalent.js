// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

/*
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

function buildString(word) {
    let ans = "";
    for(let i = 0; i < word.length; i++ ) {
        ans += word[i];
    }
    return ans;
}

var arrayStringsAreEqual = function(word1, word2) {
    return buildString(word1) == buildString(word2);
};

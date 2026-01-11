// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    let str1 = strs[0]
    let maxPrefixLength = str1.length

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < maxPrefixLength; j++) {
            if (str1[j] !== strs[i][j]) {

                maxPrefixLength = j
                break

            }

            if (maxPrefixLength === 0) return "";
        }

    }
    const result = str1.slice(0, maxPrefixLength);
    return result

};
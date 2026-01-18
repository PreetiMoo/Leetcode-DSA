// Given two binary strings a and b, return their sum as a binary string.
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
 
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */


var addBinary = function (a, b) {

    let carryOver = "0";
    let result = "";
    const len = a.length > b.length ? a.length : b.length

    if (a.length != b.length) {
        let diff = Math.abs(a.length - b.length)
        if (a.length > b.length) {

            b = "0".repeat(diff) + b

        } else {

            a = "0".repeat(diff) + a
        }

    }

    for (let i = len - 1; i >= 0; i--) {
        let l = a[i] || 0
        let m = b[i] || 0
        if (l == 1 && m == 1) {
            if (carryOver == "1") {
                result += "1"
            } else {
                result += "0"
            }
            carryOver = "1"
        } else {
            if (Number(l) + Number(m) == "1") {
                if (carryOver == "1") {
                    carryOver = "1"
                    result += "0"
                } else {
                    carryOver = "0"
                    result += "1"
                }


            } else {
                if (carryOver === "1") {
                    result += Number(l) + Number(m) + Number(carryOver)
                    carryOver = "0"
                } else {
                    result += Number(l) + Number(m)
                }

            }


        }


    }
    if (carryOver == "1") {
        result += "1"
        carryOver = "0"
    }
    return result.split('').reverse().join('');
};







var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};

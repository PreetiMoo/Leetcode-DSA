// Given an integer x, return true if x is a palindrome, and false otherwise.
//Follow up: Could you solve it without converting the integer to a string?


var isPalindrome = function(x) {
    if (x < 0) 
    return false;

    var orig = x
    var rev = 0
    
    while(x>0){
        let lastdigit = x % 10
        rev = rev * 10 + lastdigit
        x = Math.floor(x/10)
    }
   
    return orig===rev

}
    

// var isPalindrome = function(x) {
    
//     if (x < 0) 
//     return false;
    
//     const str = x.toString();
//     let rev = str.split('').reverse().join('');

//     return str === rev;
// }

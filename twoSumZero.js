//Two sum -Pairs with 0 Sum - 2 pointer
// Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

// Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the answer must not contain any duplicate pairs.

// Examples:

// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 1]]
// Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
// arr[2] + arr[4] = 1 + (-1) = 0.
// The distinct pair are [-1,1].
// Input: arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5]
// Output: [[-6, 6],[-1, 1]]
// Explanation: The distinct pairs are [-1, 1] and [-6, 6].

function twoSum(arr,target=0){
     arr.sort((a, b) => a - b); 
     console.log(arr)
    let left=0
    let right = arr.length-1
    let results = []
   
    
    while(left<right){
         let sum=arr[left]+arr[right]
        if(sum>target){
            // console.log(sum)
           right --
        }else if(sum<target){
            left++
            // console.log(sum)
        }else if((arr[right]!=arr[left])&&sum==target){
            results.push([arr[left],arr[right]])
            right--
            left++
        }
       
    } return results
}

console.log(twoSum([-1, 0, 1, 2, -1, -4]))
console.log(twoSum([6, 1, 8, 0, 4, -9, -1, -10, -6, -5]));
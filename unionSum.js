// Union of 2 Sorted Arrays - 2 pointers
// Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.
// Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.

// Examples:

// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
// Output: [1, 2, 3, 4, 5, 6, 7]
// Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
// Input: a[] = [2, 2, 3, 4, 5], b[] = [1, 1, 2, 3, 4]
// Output: [1, 2, 3, 4, 5]
// Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.
// Input: a[] = [1, 1, 1, 1, 1], b[] = [2, 2, 2, 2, 2]
// Output: [1, 2]
// Explanation: Distinct elements including both the arrays are: 1 2.

function uniArr(arr1,arr2){
    let res=[]
  
      let i=0, j=0
    while(i<arr1.length && j<arr2.length){
      
      if(arr1[i]==arr2[j]){
          if(res.length==0 || res[res.length - 1] !== arr1[i]){
              res.push(arr1[i])
              
          }i++
              j++
      }
      else if(arr1[i]>arr2[j]){
            if(res.length==0 || res[res.length - 1] !== arr2[j]){
                res.push(arr2[j])
                
            }j++
      }else {
          if(res.length==0 || res[res.length - 1] !== arr1[i]){
                res.push(arr1[i])
                
            }i++
      }
      
      
      }
      
      while(i<arr1.length){
           if(res.length==0 || res[res.length - 1] !== arr1[i]){
                res.push(arr1[i])
                
            }i++
      }
      while(j<arr2.length){
           if(res.length==0 || res[res.length - 1] !== arr2[j]){
                res.push(arr2[j])
                
            }j++
      }
      return res
     
}
    
    console.log(uniArr([2, 2, 3, 4, 5],[1, 1, 2, 3, 4]));
    console.log(uniArr([1, 2, 3, 4, 5],[1, 2, 3, 6, 7]));
    console.log(uniArr([1, 1,1,1,1],[2,2,2,2,2]));
    


//BFA

// function unionArray(arr1,arr2){
//     let arr3=[]
//   for(let i=0; i<arr1.length; i++){
//       if(!arr3.includes(arr1[i])){
//           arr3.push(arr1[i])
//       }
//   }
//       for(let j=0; j<arr2.length; j++){
//       if(!arr3.includes(arr2[j])){
//           arr3.push(arr2[j])
//       }
//   }
//   arr3.sort((a,b) => a-b)
//   return arr3
    
// }
// console.log(unionArray([2, 2, 3, 4, 5],[1, 1, 2, 3, 4]));
// console.log(unionArray([1, 2, 3, 4, 5],[1, 2, 3, 6, 7]));
// console.log(unionArray([1, 1,1,1,1],[2,2,2,2,2]));

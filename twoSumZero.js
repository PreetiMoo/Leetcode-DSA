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
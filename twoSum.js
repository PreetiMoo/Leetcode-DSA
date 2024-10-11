/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/


myMap = {}

var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
            if(target-nums[i] in myMap){
                if(myMap[target-nums[i]] != i){
                return [myMap[target-nums[i]], i]
            }}
            console.log(myMap)
            myMap[nums[i]] = i;
    }
    return undefined;
}



// var twoSum = function(nums, target) {
//     for (i=0; i<nums.length; i++){
//         if(target - nums[i] in pair_idx){
//            if (pair_idx[target - nums[i]] != i ){
//             return [i, pair_idx[target - nums[i]]]
            
//         }}
        
//         pair_idx[nums[i]] = i
//     }
//     }
    
    

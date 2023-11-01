/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
             map.set(nums[i], map.get(nums[i]) + 1);
        }
        else{
            map.set(nums[i],1)
        }
    }
     const sortedKeys = Array.from(map.keys()).sort((a, b) => {
    return map.get(b) - map.get(a);
  });
    return sortedKeys.slice(0,k);
};
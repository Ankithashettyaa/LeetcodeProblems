/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map();
    map.set(nums[0],0);
    for(let i=1;i<nums.length;i++){
        const r = target-nums[i];
        if(map.has(r))
            {
                return [map.get(r),i]
            }
        map.set(nums[i],i);
    }
    return 0;
};
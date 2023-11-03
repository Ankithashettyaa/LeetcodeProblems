/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = new Array(nums.length).fill(0);
    let res = new Array(nums.length).fill(0);
   arr[nums.length-1]=  nums[nums.length-1]
    for(let i = nums.length-2;i>=0;i--){
        arr[i] = nums[i]*arr[i+1]
    }
    res[0]=arr[1];
    let right = nums[0]
    for(let i=1;i<nums.length-1;i++){
        res[i]= right*arr[i+1]
        right = right*nums[i]
    }
    res[nums.length-1]= right;
    return res;
};
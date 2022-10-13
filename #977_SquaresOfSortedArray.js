// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var sortedSquares = function(nums) {
    nums = nums.map((a) => a**2);
    nums = nums.sort((a,b) => (a - b));
    return nums;
};

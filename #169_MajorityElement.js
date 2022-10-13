// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var majorityElement = function(nums) {
    nums.sort((a,b) => { return a - b});
    return nums[Math.floor((nums.length - 1) / 2)];
};

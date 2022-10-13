// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 *   @param {number[]} nums
 *   @return {number}
 */

var singleNumber = function(nums) {
    nums.sort((a,b) => {return a - b});

    for(let i = 0; i < nums.length - 2; i += 2) {
        if(nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }

    return nums[nums.length - 1];
};

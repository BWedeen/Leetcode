/*   Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. 
 *   If it is impossible to form any triangle of a non-zero area, return 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
**/


var largestPerimeter = function(nums) {

    nums.sort(function(a, b){return a - b});

    for(let i = nums.length - 1; i > 1; i--) {
        console.log(nums[i] + " < " + nums[i - 1] + " + " + nums[i - 2]);
        if(nums[i] < nums[i - 1] + nums[i - 2]) {
            return nums[i] + nums[i - 1] + nums[i - 2]
        }
    }
    return 0;
};

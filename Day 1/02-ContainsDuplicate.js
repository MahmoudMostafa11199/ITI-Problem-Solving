/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const sortedNums = nums.sort((a,b) => a - b);

    return sortedNums.some((n,i) => nums[i+1] == n);
};
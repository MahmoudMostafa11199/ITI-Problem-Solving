/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 *
 * 1) Add the current number (i) to the sum.
 * 2) While the sum is bigger than or equal to the target:
 * 3) Find the window size (i - left + 1) and keep the smallest one.
 * 4) Move the left pointer and subtract its number from the sum.
 * 5) At the end, if minLength didn't change, return 0.
 */

var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = nums.length + target;

  for (let i = 0; i < nums.length; i++) {
    // 1)
    sum = sum + nums[i];

    // 2)
    while (sum >= target) {
      // 3)
      minLength = Math.min(minLength, i - left + 1);

      // 4)
      sum = sum - nums[left];
      left++;
    }
  }

  // 5)
  return minLength == nums.length + target ? 0 : minLength;
};

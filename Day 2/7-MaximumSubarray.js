/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = 0;
  let maxSum = 0;

  const isNegative = Math.max(...nums);

  if (isNegative < 0) {
    maxSum = isNegative;
  } else {
    for (let i = 0; i < nums.length; i++) {
      currentSum = currentSum + nums[i];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }

      if (currentSum < 0) {
        currentSum = 0;
      }
    }
  }

  return maxSum;
};

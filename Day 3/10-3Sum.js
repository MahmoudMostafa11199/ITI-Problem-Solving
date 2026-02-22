/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 1) Sort the array to use two pointers and bring duplicates together
 * 2) Loop through the array, fix nums[i], and skip it if it's the same as the previous one.
 * 3) Set left pointer at i + 1 and right pointer at the end of the array
 * 4) If sum is 0 save it, if > 0 move right left, if < 0 move left right
 * 5) After finding a zero sum, skip identical left and right values to ensure unique triplets.
 * 6) Move both pointers one last step to start searching for a new set
 */

var threeSum = function (nums) {
  const result = [];

  // 1)
  nums.sort((a, b) => a - b);

  // 2)
  for (let i = 0; i < nums.length; i++) {
    // 3)
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      // 4)
      if (sum == 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // 5)
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        // 6)
        left++;
        right--;
      }
      if (sum > 0) {
        right--;
      }
      if (sum < 0) {
        left++;
      }
    }
  }

  return result;
};

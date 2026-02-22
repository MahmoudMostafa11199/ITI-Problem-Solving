// var removeDuplicates = function (nums) {
//   if (!nums.length) return 0;

//   let uniqueNums = [...new Set(nums)];

//   nums.length = 0;
//   nums.push(...uniqueNums);
//   return nums.length;
// };

//------------------------------------
// Solution use Two Pointer
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 1) If the array is empty, return 0 immediately.
 * 2) Start pointer (k) at index 1 to track where to place the next unique element.
 * 3) Loop through the array starting from the second element.
 * 4) If the current element is different from the previous one, it's unique.
 * 5) Move the unique element to index (k) and increment (k).
 */

var removeDuplicates = function (nums) {
  // 1)
  if (!nums.length) return 0;

  // 2)
  let k = 1;

  // 3)
  for (let i = 1; i < nums.length; i++) {
    // 4, 5)
    if (nums[i] == nums[i - 1]) continue;

    // 4, 5)
    nums[k] = nums[i];
    k++;
  }

  return k;
};

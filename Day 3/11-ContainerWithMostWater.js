/**
 * @param {number[]} height
 * @return {number}
 *
 * 1) Place pointers at both ends and a result variable starting at 0
 * 2) Continue looping as long as the left pointer is less than the right
 * 3) Area = (distance between pointers) × (height of the shorter line)
 * 4) If the new area is larger than the current result, update it
 * 5) Move the shorter line's pointer inward to find a potentially taller one.
 */

var maxArea = function (height) {
  // 1)
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  // 2)
  while (left < right) {
    const width = right - left;
    // 3)
    const area = width * Math.min(height[left], height[right]);
    // 4)
    if (result < area) result = area;

    // 5)
    if (height[left] < height[right]) left++;
    else right--;
  }

  return result;
};

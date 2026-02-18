// var productExceptSelf = function (nums) {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (i == 0) {
//       result.push(eval(nums.slice(1).join('*')));
//     } else if (nums.length == i + 1) {
//       result.push(eval(nums.slice().reverse().slice(1).join('*')));
//     } else {
//       result.push(
//         eval(nums.slice(0, i).join('*')) * eval(nums.slice(i + 1).join('*')),
//       );
//     }
//   }

//   return result;
// };

//------------------------------
//* Solution 2
// var productExceptSelf = function (nums) {
//   const result = [];
//   let copyNums = [...nums];

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = eval(copyNums.filter((n, index) => index !== i).join('*'));
//     copyNums = [...nums];
//   }

//   return result;
// };

//------------------------------
//* Solution 3
//* Used Hint 1
//* Think how you can efficiently utilize prefix and suffix products to calculate the product of all elements except self for each index. Can you pre-compute the prefix and suffix products in linear time to avoid redundant calculations?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [1];

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left = left * nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right = right * nums[i];
  }

  return result;
};

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const letters = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;

  for (let i = letters.length - 1; i >= 0; i--) {
    if (i < letters.length / 2) break;

    if (letters[left] == letters[i]) left++;
    else return false;
  }

  return true;
};

//*---------------------------------------
//* Solution 2 (while)
// var isPalindrome = function (s) {
//   const letters = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//   let left = 0;
//   let right = letters.length - 1;

//   while (left < right) {
//     if (letters[left] !== letters[right]) return false;

//     left++;
//     right--;
//   }

//   return true;
// };

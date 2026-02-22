/**
 * @param {string} s
 * @return {number}
 *
 * 1) Use a string (strs) as a sliding window to track unique characters.
 * 2) Iterate through the input string.
 * 3) If a duplicate is found, slide the window start by slicing up to the first occurrence.
 * 4) Add the new character to the window
 * 5) update the maximum length found so far.
 */

var lengthOfLongestSubstring = function (s) {
  // 1)
  let strs = '';
  let maxLength = 0;

  // 2)
  for (let i = 0; i < s.length; i++) {
    // 3)
    if (strs.includes(s[i])) {
      const index = strs.indexOf(s[i]);
      strs = strs.slice(index + 1);
    }

    // 4)
    strs += s[i];

    // 5)
    maxLength = Math.max(strs.length, maxLength);
  }

  return maxLength;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 *
 * 1) Add 1 to the count of the current character in our map.
 * 2) Find the character that repeats the most in the current window.
 * 3) Calculate window size (last(i) - first(left) + 1) and subtract the max frequency.
 * 4) If the result is bigger than k, move the left pointer and decrease its count.
 * 5) Keep the biggest window size we found in maxLength.
 */

var characterReplacement = function (s, k) {
  const m = {};
  let left = 0;
  let maxFrequency = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    // 1)
    if (!m[s[i]]) {
      m[s[i]] = 1;
    } else {
      ++m[s[i]];
    }

    // 2)
    maxFrequency = Math.max(maxFrequency, m[s[i]]);

    // 3)
    if (i - left + 1 - maxFrequency > k) {
      // 4)
      m[s[left]]--;
      left++;
    }

    // 5)
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
};

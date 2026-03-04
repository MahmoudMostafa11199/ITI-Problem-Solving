/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 *
 * 1) Build a map (c1) of character counts for s1.
 * 2) Slide a window across s2 and store character counts in map (c2).
 * 3) If window size > s1 length, remove the left character and update c2.
 * 4) If window size == s1 length, compare c1 and c2 sizes and contents.
 * 5) If they match, return true. If the loop ends without a match, return false.
 */

var checkInclusion = function (s1, s2) {
  // 1)
  const c1 = new Map();
  for (const s of s1) {
    c1.set(s, (c1.get(s) ? c1.get(s) : 0) + 1);
  }

  const c2 = new Map();
  let left = 0;

  for (let i = 0; i < s2.length; i++) {
    // 2)
    const ch = s2[i];
    c2.set(ch, (c2.get(ch) ? c2.get(ch) : 0) + 1);

    // 3)
    if (i - left + 1 > s1.length) {
      const lfCh = s2[left];
      if (c2.get(lfCh) === 1) {
        c2.delete(lfCh);
      } else {
        c2.set(lfCh, c2.get(lfCh) - 1);
      }
      left++;
    }

    // 4)
    if (i - left + 1 === s1.length) {
      if (c1.size === c2.size) {
        let match = true;
        for (let [key, val] of c1) {
          if (c2.get(key) !== val) {
            match = false;
            break;
          }
        }
        // 5)
        if (match) return true;
      }
    }
  }

  return false;
};

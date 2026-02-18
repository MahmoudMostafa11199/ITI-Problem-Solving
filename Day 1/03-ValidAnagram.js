/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const sortedString = (str) => {
  return str.split('').sort((a, b) => {
    if (a < b) return -1;
    if (b > a) return 1;
    return 0;
  });
};

var isAnagram = function (s, t) {
  const sortedS = sortedString(s);
  const sortedT = sortedString(t);

  if (sortedT.length == sortedS.length) {
    return sortedS.every((s, i) => s == sortedT[i]);
  }

  return false;
};

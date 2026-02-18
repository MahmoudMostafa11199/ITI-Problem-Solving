/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const sortFun = (str) => {
  return str.split('').sort((a, b) => {
    if (a < b) return -1;
    if (b > a) return 1;
    return 0;
  });
};

var groupAnagrams = function (strs) {
  const sortedStr = strs.map((str) => sortFun(str).join(''));

  const groupAnagram = {};

  for (let i = 0; i < sortedStr.length; i++) {
    if (!groupAnagram[sortedStr[i]]) {
      groupAnagram[sortedStr[i]] = [];
    }

    groupAnagram[sortedStr[i]].push(strs[i]);
  }

  return Object.values(groupAnagram).reverse();
};

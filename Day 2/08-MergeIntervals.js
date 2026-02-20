/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let lResult = result[result.length - 1];

    if (lResult[1] >= intervals[i][0]) {
      lResult[1] = Math.max(lResult[1], intervals[i][1]);
      //
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

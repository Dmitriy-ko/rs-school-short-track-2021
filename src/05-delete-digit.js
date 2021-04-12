/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const arr = String(n).split('');
  const l = arr.length;
  const newArr = (i) => Number(arr.slice(0, i).concat(arr.slice(i + 1, l)).join(''));
  for (let i = 0; i < l; i++) {
    if (max < newArr(i)) {
      max = newArr(i);
    }
  }
  return max;
}

module.exports = deleteDigit;

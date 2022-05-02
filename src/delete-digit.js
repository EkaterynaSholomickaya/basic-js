const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // n = n.toString().split('');

  // n = n.sort((a, b) => +a - +b).reverse();
  // let sum = 0;
  // for (let i = 0; i < n.length - 1; i++) {
  //   sum = sum + Math.pow(10, n.length - 2 - i) * +n[i];
  // }
  // return sum;

  let flag = 1;
  let sum = 0;
  n = n.toString().split('');
  n = n.map((i) => +i);

  for (let i = 1; i < n.length; i++) {
    if (n[i - 1] < n[i]) {
      n[i - 1] = -1;
      flag = 0;
      break;
    }
  }

  if (flag) n[n.length - 1] = -1;

  n = n.filter((i) => i !== -1);
  for (let i = 0; i < n.length; i++) {
    sum = sum + Math.pow(10, n.length - 1 - i) * +n[i];
  }
  return sum;
}

module.exports = {
  deleteDigit,
};

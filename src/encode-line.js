const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  res = [];
  str = str.split('');
  let a = str[0];
  count = 1;
  for (i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count === 1) res.push(a);
      else res.push(count.toString() + a);
      a = str[i];
      count = 1;
    }
  }
  if (count === 1) res.push(a);
  else res.push(count.toString() + a);

  return res.join('');
}

module.exports = {
  encodeLine,
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let reg = /[0-9A-F][0-9A-F]/;
  let flag = true;
  n = n.split('-');

  n.forEach((e) => {
    let a = e.match(reg);

    if (!a || a.length != 1) flag = false;
    if (e.length != 2) {
      flag = false;
    }
  });
  return flag;
}

module.exports = {
  isMAC48Address,
};

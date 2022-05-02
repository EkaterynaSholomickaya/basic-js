const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrSort = arr.filter((i) => i !== -1).sort((a, b) => a - b);
  let i = -1;

  arr = arr.map((item) => {
    // console.log(arrSort[i]);

    if (item !== -1) {
      i++;
      return arrSort[i];
    } else return item;
  });

  return arr;
}

module.exports = {
  sortByHeight,
};

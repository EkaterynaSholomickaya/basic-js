const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  arrRes = [];
  console.log(arr);

  if (!(arr instanceof Array)) {
    console.error("'arr' parameter must be an instance of the Array!");
    return;
  }
  // ("'arr' parameter must be an instance of the Array!");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (arr[i + 1]) arrRes.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      if (arrRes.length > 0) {
        arrRes.push(arr[i - 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      arrRes.splice(-1, 1);
      if (arrRes.lenght > 0) arrRes.splice(arrRes.length - 1, 1);
    } else if (arr[i] === '--discard-next') {
      i++;
      if (arr[i + 1] === '--discard-prev' || arr[i + 1] === '--double-prev')
        i++;
    } else arrRes.push(arr[i]);
  }
  return arrRes;
}

module.exports = {
  transform,
};
